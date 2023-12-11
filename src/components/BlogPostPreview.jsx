import { Link } from 'react-router-dom'

const BlogPostPreview = ({ post }) => {
  return (
    <div>
      <h3>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p>Date: {post.date}</p>
      <p>Topic: {post.topic}</p>
      <hr />
    </div>
  )
}

export default BlogPostPreview
