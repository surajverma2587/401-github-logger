import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  return (
    <Form className="card m-2 p-4">
      <Form.Group className="mb-3">
        <Form.Control placeholder="Enter username" />
        <Form.Text className="text-danger">
          Please enter a valid username.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
