import { useParams } from 'react-router-dom'
import CommentForm from './CommentForm'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Blog = ({ blogs, updatedBlog, deleteBlog, user, addComment }) => {
  const navigate = useNavigate()
  const id = useParams().id
  const blog = blogs.find((blog) => blog.id === id)

  const handleUpdateLikes = () => {
    const updatedBlogLikes = {
      ...blog,
      likes: blog.likes + 1,
    }
    updatedBlog(updatedBlogLikes)
  }

  const handleDelete = () => {
    if (
      window.confirm(`Remove blog You're NOT gonna need it! by ${blog.author}`)
    ) {
      deleteBlog(blog)
      navigate('/blogs')
    }
  }
  if (!blog || !user) {
    return null
  }

  const handleAddComment = (comment) => {
    const updatedBlogComments = {
      id: blog.id,
      comment,
    }
    console.log('commented blog: ', updatedBlogComments)
    addComment(updatedBlogComments)
  }

  return (
    <Container>
      <Card className="user-card">
        <Card.Body>
          <Card.Title className="card-text">
            {blog.title.toUpperCase()}
          </Card.Title>
          <Card.Link className='link' href="">{blog.url}</Card.Link>
          <Card.Text className="item_date">{blog.date}</Card.Text>
          <Card.Text>Posted by {blog.user.name}</Card.Text>
          <Card.Text>{blog.description}</Card.Text>
          <Card.Text>{blog.likes} likes</Card.Text>
          <Card.Text>Comments</Card.Text>
          <ul>
            {blog.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <CommentForm addComment={handleAddComment} />
          <button onClick={handleUpdateLikes}>Like</button>
          {blog.user.name === user.name && (
            <button onClick={handleDelete}>remove</button>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Blog
