import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useContext, useRef } from "react";
import MyBook from "../../Context";

export default function ModalWindow() {

  const { modal, handlerClose, handlerAdd } = useContext(MyBook);

  const title = useRef(null);
  const author = useRef(null);
  const year = useRef(null);
  const pages = useRef(null);
  const publishing = useRef(null);
  const count = useRef(null);

  const addBooks = () => {
    if(title !== '' && author !== '' && count !== '') {
      handlerAdd(title, author, year, pages, publishing, count);
      handlerClose();
    }
  }

  return (
    <Modal show={modal} onHide={() => handlerClose()}>

      <Modal.Header closeButton>
        <Modal.Title>Add new book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name of book</InputGroup.Text>
            <Form.Control type="text" placeholder="Name of book" ref={title}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Author</InputGroup.Text>
            <Form.Control type="text" placeholder="Author" ref={author}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Year</InputGroup.Text>
            <Form.Control type="text" placeholder="Year" ref={year}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Pages</InputGroup.Text>
            <Form.Control type="text" placeholder="Pages" ref={pages}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Publishing</InputGroup.Text>
            <Form.Control type="text" placeholder="Publishing" ref={publishing}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Count</InputGroup.Text>
            <Form.Control type="text" placeholder="Count" ref={count}/>
          </InputGroup>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => handlerClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => addBooks()}>
          Save Changes
        </Button>
      </Modal.Footer>

    </Modal>
  )
}