import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page, ReactPDF } from "react-pdf"; // To display the PDF
import useFetch from "../../hooks/useFetch"; // Your custom useFetch hook

const ScorePage = () => {
  const { id } = useParams(); // Get the score ID from the URL
  const [score, setScore] = useState(null);
  const [sessionType, setSessionType] = useState("repertoire");
  const [message, setMessage] = useState("");

  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/v1/scores/${id}`
  );
  const handleSessionTypeChange = (e) => {
    setSessionType(e.target.value);
  };

  const handleSaveScore = async () => {
    const token = localStorage.getItem("authToken"); // Get auth token if needed
    try {
      const response = await fetch("http://localhost:3000/api/v1/storings", {
        method: "POST",
        headers: {
          Authorization: ` ${token}`,
        },
        body: JSON.stringify({
          score_id: data.id,
          session_type: sessionType,
        }),

        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage("Error adding score to your collection.");
        
      }
    } catch (error) {
      setMessage("Something went wrong.");
      console.log(error);

    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="score-page">
      <div className="row">
        <div className="col-12 col-lg-7 pdf-scorepage mx-lg-5 mx-3">
          <embed src={data.pdf_url} width="100%" />
        </div>
        <div className="col-12 col-lg-4 scorepage-descriptions mt-3 mt-lg-5">
          <h1>{data.name}</h1>
          <h2>{data.composer}</h2>
          <p>{data.instrument}</p>
          <div>
            <label htmlFor="sessionType">
              Add this score to your collection:
            </label>
            <select
              id="sessionType"
              value={sessionType}
              onChange={handleSessionTypeChange}
            >
              <option value="repertoire">Repertoire</option>
              <option value="practicing">Practicing</option>
              <option value="future_plan">Future Plan</option>
              <option value="orchestral">Orchestral</option>
            </select>
          </div>

          <button onClick={handleSaveScore}>Add to My Scores</button>

          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
