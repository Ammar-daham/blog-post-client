import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'



import '../index.css'

const NewBlog = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const navigate = useNavigate()
  const addNewBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newBlog.title,
      author: newBlog.author,
      url: newBlog.url,
    })
    setNewBlog({ title: '', author: '', url: '' })
    navigate('/users')
  }

  return (
    <Container className="newBlog-Form">
      <h2>create new blog post</h2>
      <Form onSubmit={addNewBlog}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newBlog.title}
            onChange={({ target }) =>
              setNewBlog({ ...newBlog, title: target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={newBlog.author}
            onChange={({ target }) =>
              setNewBlog({ ...newBlog, author: target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Url</Form.Label>
          <Form.Control
            type="text"
            value={newBlog.url}
            onChange={({ target }) =>
              setNewBlog({ ...newBlog, url: target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAuthor"></Form.Group>
        <Row>
          <Col xs={8} sm={11}>
          </Col>
          <Col xs={4} sm={1}>
            <button type="submit" id="create-button">
              Create
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default NewBlog
