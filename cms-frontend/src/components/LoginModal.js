import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import StaticExample from '../../components/LoginModal';


function LoginBox() {
  return (
    <div
      className="modal show modal-container"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='modal-box'>
        <Modal.Header closeButton>
          <Modal.Title className='modal-header'>Dive into Canvas</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Browser for Classes, Professors, Schedule and many more !!! <br/>Now all in one place easily accessible from your place of convienience..</p>
        </Modal.Body>

        <Modal.Footer className='button-flex'>
          
          <Button variant='primary button-flex register'>Register</Button>
          <Button variant="primary button-flex login">Login</Button>
          

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LoginBox;