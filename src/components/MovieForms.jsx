import React, { useState } from 'react';
import './MovieForms.css';

const MovieForms = (props) => {
  const { data } = props;
  const { setData } = props;
  const [number, setNumber] = useState(1);
  const [userName, setUserName] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const newData = {
      userName: userName,
      numberOfTickets: parseInt(number),
    };
    setData([...data, newData]);
    alert("Ticket booked successfully!");
    setFormOpen(false);
  };
  
  const toggleForm = () => {
    setFormOpen(!formOpen);
  }

  return (
    <div className="Movieforms"> 
      {formOpen ?
        <div>
          <h2>Book Tickets</h2>
          <label htmlFor="numberOfTickets">Enter Number of tickets: </label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} name="numberOfTickets" id="numberOfTickets" />
          <br />
          <label htmlFor="name">Enter Name:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="name" id="name" />
          <br />
          <button type="submit" onClick={handleClick}>Book</button>
          <button onClick={toggleForm}>Close</button>
        </div>
        :
        <button onClick={toggleForm}>Book Tickets</button>
      }
      <h1>{props.show.name}</h1>
      <p>{props.show.rating.average}</p>
      <p>{props.show.genres.join(", ")}</p>
      <p>{props.show.language}</p>
    </div>
  );
};

export default MovieForms;
