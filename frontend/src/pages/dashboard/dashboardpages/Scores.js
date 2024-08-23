import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Myverticallycenteredmodal } from "../../../components/dashboardcomponents/Myverticallycenteredmodal";

const Scores = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const currUser = useSelector((state) => state.user.currUser);
  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <div class="col py-3">scores</div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        add new pdf
      </Button>
      <Myverticallycenteredmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Scores;
