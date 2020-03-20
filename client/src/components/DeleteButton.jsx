import React from 'react'
import axios from 'axios';

export default props => {
    const { playerId, successCallback } = props;
    const deletePlayer = e => {
        if(window.confirm('Delete the item?')){
        axios.delete(`http://localhost:8000/api/deleteOne/`+playerId)
        .then(response => successCallback())
        .catch(error => console.log(error))
        }
    }
    return (
        <button style={{backgroundColor: "red", color: "white"}} onClick={deletePlayer}>Delete</button>
    )
}