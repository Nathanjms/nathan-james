import React, { useRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

export default function MovieFormModal({
  handleClose,
  show,
  baseURL,
  userId,
  setError,
  setSuccess,
}) {
  const titleRef = useRef();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (titleRef.current.value.trim() === "") {
      setError("Invalid Title");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await axios.post(baseURL + "/api/movies/add", {
        title: titleRef.current.value,
        firebaseId: userId,
      });
      handleClose();
      setLoading(false);
      setSuccess("");
      setSuccess("Movie Added Successfully");
    } catch (err) {
      var errorMessage = err.message;
      handleClose();
      setLoading(false);
      setError(errorMessage);
    }
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={() => handleClose()}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie to watch list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group id="title">
              <Form.Label>What's the Movie Title?</Form.Label>
              <Form.Control type="text" ref={titleRef} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button disabled={loading} variant="primary" type="submit">
              Submit!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
