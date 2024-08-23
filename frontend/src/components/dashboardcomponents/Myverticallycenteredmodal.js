import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export function Myverticallycenteredmodal(props) {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('score[pdf]', file);

    try {
      const response = await fetch('http://localhost:3000/api/v1/scores', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the upload.');
      }

      const data = await response.json();
      console.log('Upload successful', data);
      props.onHide(); // Close the modal after successful upload
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add score to your Dashboard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pdf">Upload PDF:</label>
          <input type="file" id="pdf" accept=".pdf" onChange={handleFileChange} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Upload</button>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
