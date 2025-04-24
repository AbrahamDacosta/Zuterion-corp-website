import { sanity } from '@/lib/sanity'
import { urlFor } from '@/lib/image'
import SanityImage from '@/components/SanityImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Search } from 'lucide-react'

export async function getStaticProps() {
  const posts = await sanity.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug { current },
      excerpt,
      coverImage,
      publishedAt,
      category->{ title, slug { current } }
    }
  `)

  const categories = await sanity.fetch(`
    *[_type == "category"] {
      title,
      slug { current },
      "count": count(*[_type == 'post' && references(^._id)])
    } | order(count desc)
  `)

  return { props: { posts, categories }, revalidate: 86400 }
}

export default function BlogIndex({ posts, categories }) {
  const router = useRouter()
  const { cat } = router.query
  const selectedCategory = typeof cat === 'string' ? cat : null

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const POSTS_PER_PAGE = 6

  const updateCategory = (slug: string | null) => {
    const newQuery = { ...router.query }
    if (slug) {
      newQuery.cat = slug
    } else {
      delete newQuery.cat
    }
    router.push({ pathname: '/blog', query: newQuery }, undefined, { shallow: true })
    setCurrentPage(1)
  }

  const filteredPosts = posts.filter((post) => {
    const matchCategory = selectedCategory
      ? post.category?.slug?.current === selectedCategory
      : true
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const recentPosts = posts.slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        {/* Barre de recherche */}
        <div className="mb-6">
          <label className="relative block w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary/50 focus:outline-none"
            />
          </label>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug?.current}`} className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              {post.coverImage && (
                <SanityImage
                  image={post.coverImage}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="rounded mb-3 h-40 w-full object-cover"
                />
              )}
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(post.publishedAt).toLocaleDateString()} —
                {post.category?.slug?.current && (
                  <Link
                    href={`/category/${post.category.slug.current}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-primary underline ml-2"
                  >
                    {post.category.title}
                  </Link>
                )}
              </p>
              <p className="text-gray-700">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-full border text-sm font-medium ${
                  currentPage === i + 1
                    ? 'bg-black text-white border-black'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Barre latérale */}
      <aside className="border-l pl-6 space-y-8">
        {/* Filtres par catégorie */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Catégories populaires</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.slug.current}>
                <button
                  onClick={() => updateCategory(cat.slug.current)}
                  className={`flex justify-between w-full text-left px-4 py-2 rounded-md text-sm border ${
                    selectedCategory === cat.slug.current
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className="text-xs text-gray-500">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Articles récents */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Articles récents</h2>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post._id}>
                <Link href={`/blog/${post.slug.current}`} className="block text-sm text-primary hover:underline">
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
