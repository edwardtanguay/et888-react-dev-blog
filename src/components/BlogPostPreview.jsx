import { Link } from 'react-router-dom'

const BlogPostPreview = ({ post }) => {
  return (
    <div>
      <div className="my-6">
        <h3>
          <Link
            className="text-green-900 font-bold text-3xl hover:text-green-600"
            to={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
        </h3>
        <p>Date: {post.date}</p>
        <p>Topic: {post.topic}</p>
      </div>
      <hr />
    </div>
  )
}

export default BlogPostPreview
