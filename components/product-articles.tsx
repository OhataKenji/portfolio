import PostPreview from './post-preview'
import Post from '../types/post'
import SectionTitle from '../components/section-title'

type Props = {
  posts: Post[]
}

const ProductArticles = ({ posts }: Props) => {
  return (
    <section>
      <SectionTitle>Products</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductArticles
