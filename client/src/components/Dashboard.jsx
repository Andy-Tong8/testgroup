import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Dashboard = (props) => {
    const [state, setState] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const teamColors = ['white', 'red', 'blue', 'green']
    useEffect(()=>{
        axios.get('http://localhost:8000/api/find')
        .then(response => setState(response.data))
        .catch(error=>console.log(error))
    },[refresh])

    const buttonHandler = (e, item, buttonID) => {
        console.log(item);
        if(item.status[buttonID] === 0) {
            item.status[buttonID] = 1;
        } else {
            item.status[buttonID] = 0;
        }
        axios.put(`http://localhost:8000/api/updateOne/${item._id}`, item)
        .then(response => setRefresh(!refresh))
        .catch(error=>console.log(error))
    }
    const changeHandler = (e, item) => {
        item.team = e.target.value;
        axios.put(`http://localhost:8000/api/updateOne/${item._id}`, item)
        .then(response => setRefresh(!refresh))
        .catch(error=>console.log(error))
    }
    return(
        <div>
            {teamColors.map((color, globalIndex) => (
            <table style={{backgroundColor:color}} key={globalIndex}>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                        <tbody>
                            {state.map((item, index) => (
                                item.team === color ?
                                <tr key={index}>
                                    <td>
                                        <select name="" onChange={(e) => changeHandler(e, item)} value={item.team}>
                                            {teamColors.map((el, i) => (
                                                <option key={i} value={el}>{el}</option>
                                            ))}
                                        </select>
                                        
                                    </td>
                                    <td><Link style={{color:'yellow'}} to={`/edit/${item._id}`}>{item.name}</Link></td> 
                                    <td>
                                        <button onClick= {(e) => buttonHandler(e, item, 0)} style={{backgroundColor:item.status[0]===1?'green':'red'}}>{item.status[0] === 1 ? 'On' : 'Off'}</button>
                                        <button onClick= {(e) => buttonHandler(e, item, 1)} style={{backgroundColor:item.status[1]===1?'green':'red'}}>{item.status[1] === 1 ? 'On' : 'Off'}</button>
                                        <button onClick= {(e) => buttonHandler(e, item, 2)} style={{backgroundColor:item.status[2]===1?'green':'red'}}>{item.status[2] === 1 ? 'On' : 'Off'}</button>
                                        <button onClick= {(e) => buttonHandler(e, item, 3)} style={{backgroundColor:item.status[3]===1?'green':'red'}}>{item.status[3] === 1 ? 'On' : 'Off'}</button>
                                        <button onClick= {(e) => buttonHandler(e, item, 4)} style={{backgroundColor:item.status[4]===1?'green':'red'}}>{item.status[4] === 1 ? 'On' : 'Off'}</button>
                                    </td>
                                </tr>
                                : null
                            ))}
                        </tbody>   
            </table>
            ))}
        </div>
    )
}

export default Dashboard