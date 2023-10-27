import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import ErrorImg from "../images/error.jpg";

export const AlertBanner = ({ message, variant, showImage = true }) => {
  return (
    <Stack className="mx-2">
      <Alert variant={variant} className="text-center">
        {message}
      </Alert>
      {showImage && <Image src={ErrorImg} rounded className="error-img" />}
    </Stack>
  );
};
