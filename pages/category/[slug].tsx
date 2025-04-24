// pages/category/[slug].tsx
import { sanity } from '../../lib/sanity';
import Link from 'next/link';

export async function getStaticPaths() {
  const categories = await sanity.fetch(`*[_type == "category"]{ slug }`);
  const paths = categories.map((cat) => ({ params: { slug: cat.slug.current } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const category = await sanity.fetch(`
    *[_type == "category" && slug.current == $slug][0]{
      title,
      slug
    }
  `, { slug: params.slug });

  const posts = await sanity.fetch(`
    *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt
    }
  `, { slug: params.slug });

  return {
    props: { category, posts },
    revalidate: 86400,
  };
}

export default function CategoryPage({ category, posts }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Articles : {category.title}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className="block bg-white dark:bg-zinc-900 p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={post.coverImage} alt={post.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <p className="text-base text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
