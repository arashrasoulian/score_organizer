import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Myverticallycenteredmodal } from "../../../components/dashboardcomponents/Myverticallycenteredmodal";
import useFetch from "../../../hooks/useFetch";
import Scorelist from "../../../components/homepage/Scorelist";

const Scores = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [groupedScores, setGroupedScores] = useState({});

  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/v1/scores"
  );
  const titles = ["Repertoire", "Practicing", "orcestral", "for future"];

  const groupScoresBySessionType = (scores) => {
    return scores.reduce((acc, score) => {
      const sessionType = score.session_type || "Uploaded"; // Use 'Uploaded' for scores without session_type
      if (!acc[sessionType]) {
        acc[sessionType] = [];
      }
      acc[sessionType].push(score);
      return acc;
    }, {});
  };

  useEffect(() => {
    if (data) {
      const grouped = groupScoresBySessionType(data);
      setGroupedScores(grouped);
      console.log(groupedScores);
    }
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

      <div className="row ">
        {groupedScores &&
          Object.keys(groupedScores).map((item, i) => (
            <div key={item + i} className="col-4 col-md-3">
              <Scorelist props={i} title={item} />
            </div>
          ))}
      </div>

      <Myverticallycenteredmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Scores;
