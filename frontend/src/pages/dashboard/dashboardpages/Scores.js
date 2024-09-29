import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Myverticallycenteredmodal } from "../../../components/dashboardcomponents/Myverticallycenteredmodal";
import useFetch from "../../../hooks/useFetch";
import Scorelist from "../../../components/homepage/Scorelist";

const Scores = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/v1/scores"
  );
  const titles = ["Repertoire", "Practicing", "orcestral", "for future"];

  useEffect(() => {
    console.log(data);
  }, [data]);

  const currUser = useSelector((state) => state.user.currUser);
  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="myscores-container">
      <div className="row  d-flex justify-content-center align-items-center searchbar-myscores-container">
        <div className="col-md-8">
          <div className="searchform-myscores">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control searchform-myscores-input"
              placeholder="Search anything..."
            />
            <span className="left-pan">
              <i className="fa fa-microphone"></i>
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="m-4"
      >
        add new pdf
      </Button>

      <div className="row ">
        {data &&
          titles.map((title) => {
            return (
              <div key={title} className="col-4 col-md-3">
                <Scorelist props={data} title={title} />
              </div>
            );
          })}
      </div>
      <Myverticallycenteredmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Scores;
