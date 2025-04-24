import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from '@/lib/sanity'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await sanity.fetch(`
    *[_type == "post" && defined(slug.current) && publishedAt <= now()][]{
      "slug": slug.current
    }
  `)

  return {
    paths: slugs.map((s: any) => ({ params: { slug: s.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug && publishedAt <= now()][0]{
      _id, title, slug, publishedAt, excerpt, content, 
      "category": category->title,
      "coverImage": coverImage.asset->url
    }`,
    { slug: params?.slug }
  )

  const comments = await sanity.fetch(
    `*[_type == "comment" && post._ref == $id && approved == true] | order(submittedAt desc)`,
    { id: post._id }
  )

  return {
    props: { post, comments },
    revalidate: 60,
  }
}

export default function BlogPost({ post, comments }: any) {
  const router = useRouter()
  if (router.isFallback) return <p>Chargement...</p>

  return (
    <>
      <Head>
        <title>{post.title} | Zuterion Blog</title>
      </Head>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.publishedAt).toLocaleDateString()} — {post.category}
        </p>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="rounded-lg mb-6 w-full h-64 object-cover"
          />
        )}

        <div className="prose prose-lg dark:prose-invert">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </Markdown>
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold mb-4">💬 Commentaires</h3>
          <CommentList comments={comments} />
        </section>

        <section className="mt-10 border-t pt-10">
          <h3 className="text-xl font-semibold mb-4">Laisser un commentaire</h3>
          <CommentForm postId={post._id} />
        </section>
      </article>
    </>
  )
}
