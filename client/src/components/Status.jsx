import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";
import PlayerHeader from "./PlayerHeader";

const Status = props => {
  const [state, setState] = useState([]);
  const [changeState, setChangeState] = useState(false);
  useEffect(() => {
      console.log(props.id)
    axios
      .get("http://localhost:8000/api/readAll/1")
      .then(response => setState([...response.data]))
      .catch(error => console.log(error));
  }, [changeState]);

  const styled={
    backgroundColor: "white",
    color: "black"
  }
  const styled1={
    backgroundColor: "green",
    color: "white"
  }
  const styled2={
    backgroundColor: "red",
    color: "white"
  }
  const styled3={
    backgroundColor: "yellow",
    color: "black"
  }

  const onClickHandler = (e,item) => {
      
    console.log(item)
    let temp = item.status;
  
    temp[props.id-1]=Number(e.target.value)
  
    axios.put(`http://localhost:8000/api/updateOne/${item._id}`, {"status": temp})
    .then(response => setChangeState(!changeState))
    .catch(error => console.log(error));
}

  return (
    <div>
        <h3 style={{ textAlign: "left" }}>Player Status - Game {props.id}</h3>
        <Link style={{margin:'5px'}} to="/status/game/1">Game 1</Link> |&nbsp;
        <Link style={{margin:'5px'}} to="/status/game/2">Game 2</Link> |&nbsp;
        <Link style={{margin:'5px'}} to="/status/game/3">Game 3</Link>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/players/edit/${item._id}`}>{item.name}</Link>
              </td>
              <td>
                  <button value="1" onClick={(e) => onClickHandler(e, item)} style={item.status[props.id-1]==1 ? styled1 : styled}>Playing</button>
                  <button value="2" onClick={(e) => onClickHandler(e, item)} style={item.status[props.id-1]==2 ? styled2 : styled}>Not Playing</button>
                  <button value="3" onClick={(e) => onClickHandler(e, item)} style={item.status[props.id-1]==3 ? styled3 : styled}>Undecided</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Status;
