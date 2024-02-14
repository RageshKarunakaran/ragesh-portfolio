import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp, { useCountUp } from "react-countup";
import CircularProgress from "../../CircularProgress";
import styles from "../AboutModal/style.css";
import Lottie from "react-lottie";
import download from "../../lotties/download.json";
import About from "../About";
export function MyVerticallyCenteredModal(props) {
  const downloadImage = {
    loop: true,
    autoplay: true,
    animationData: download,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <About />
      </Modal.Body>
    </Modal>
  );
}
