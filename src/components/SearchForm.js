import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const handleChange = ({ target }) => {
    setUsername(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
      setUsername("");
    }
  };

  return (
    <Form className="card m-2 p-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
        {usernameError && (
          <Form.Text className="text-danger">
            Please enter a valid username.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
