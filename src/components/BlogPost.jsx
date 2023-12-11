import { useParams } from 'react-router-dom'
import blogData from '../data/blogData'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogData.find((p) => p.id === parseInt(id))

  if (!post) {
    return <div>Blog post not found.</div>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Date: {post.date}</p>
      <p>Topic: {post.topic}</p>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost
