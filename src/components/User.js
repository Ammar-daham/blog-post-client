import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const User = ({ users }) => {
  const id = useParams().id
  console.log('userId: ', id)
  const user = users.find((u) => u.id === id)
  console.log('user: ', user)
  if (!user) {
    return null
  }
  return (
    <Container>
      <Card className="user-card">
        <Card.Body>
          <Card.Title className="card-text">
            {user.name.toUpperCase()}
          </Card.Title>
          <Card.Text>has {user.blogs.length} blogs:</Card.Text>
          <ul>
            {user.blogs.map((blog) => {
              return <li key={blog.id}>{blog.title}</li>
            })}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default User
