/* import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieForms from "./MovieForms";

function Moviedetails(props) {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [openForm, setOpenForm] = useState(false)

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
   
  const handleBookingClick = () => {
    setOpenForm(true);
  };
  return (
    <div>
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <img src={show.image?.original} alt={show.name} />
          {show.summary}
        </div>
      ) : (
        <p>Loading...</p>
       
      )}
      <div>
        <button onClick={handleBookingClick}>Book Ticket</button>
      </div>
      {openForm && <MovieForms />}
    </div>
  );
}

export default Moviedetails; */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieForms from "./MovieForms";
import './Moviedetails.css';

function Moviedetails(props) {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleClick = () => {
    setOpenForm(true);
  };

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {show ? (
        <div className="moviedetails">
            <h1>Details of the show</h1>
          <h3>{show.name}</h3>
          <img src={show.image?.original} alt={show.name} />
          {show.summary}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div >
        {show && <button className="button" onClick={handleClick}>Book Ticket</button>}
        {openForm && (
          <MovieForms show={show} data={props.data} setData={props.setData} />
        )}
      </div>
    </div>
  );
}

export default Moviedetails;
