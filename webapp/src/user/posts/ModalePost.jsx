import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import AddProduct from './Post'

function AddPost(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Post 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <AddProduct/>
      </Modal.Body>
   
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] =useState(false);

  return (
    <>
      <Button variant="success" size='lg' onClick={() => setModalShow(true)}>
      ADD POST
      </Button>

      <AddPost
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);
export default App