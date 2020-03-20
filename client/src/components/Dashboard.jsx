import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
// import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    styled,
    Card,
    CardContent,
} from '@material-ui/core';
const styles = {
    paper: {
        minWidth: "95%", padding: "1rem", display:"flex", justifyContent: "space-evenly"
    },
    card: {
        width: "30%", padding: "1rem", justifyContent: "space-evenly"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const Dashboard = (props) => {
    const [state, setState] = useState([])
    const [changeState, setchangeState] = useState(false)
    const [sortdueDate, setSortdueDate] = useState(1);
    
    useEffect(() => {
        console.log('you are in useeffect')
        axios.get(`http://localhost:8000/api/readAll/${sortdueDate}`)
            .then(response => setState([...response.data]))
            .catch(error => console.log(error))
    }, [changeState,sortdueDate])
 
    const sortDue = (e) => {
        setSortdueDate(-1*sortdueDate)
    }
    
    const goToNew = () => {
        navigate('/projects/new')
    }
    const onClickHandler = (item, idx) => {
        if (idx === 3) {
            axios.delete(`http://localhost:8000/api/deleteOne/${item._id}`)
                .then(response => setchangeState(!changeState))
                .catch(error => console.log(error))
        } else {
            item.status = idx
            axios.put(`http://localhost:8000/api/updateOne/${item._id}`,item)
                .then(response => setchangeState(!changeState))
                .catch(error => console.log(error))
        }
    }
        
    return (
        <>
        <Paper elevation={3} style={styles.paper}>
        <Card style={styles.card}><CardContent>
        <div className="backlog">
                <h2 onClick={sortDue} style={{backgroundColor: "#9FC5F8"}}>Backlog</h2>
                {state.map((item, index) => (
                    item.status === 0 ?
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>Due: {item.dueDate.substring(0,10)}</p>
                            <Button style={{backgroundColor:"#FFE599"}} onClick={(e) => onClickHandler(item, 1)}>Start Project</Button>
                      
                        </div>
                        : null
                ))}
            </div>
            </CardContent></Card>
            <Card style={styles.card}><CardContent>
            <div className="progress">
                <h2 onClick={sortDue} style={{backgroundColor:"#FFE599"}}>In Progress</h2>
                {state.map((item, index) => (
                    item.status === 1 ?
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>Due: {item.dueDate.substring(0,10)}</p>
                            <Button style={{backgroundColor:"#B6D7A8"}} onClick={(e) => onClickHandler(item, 2)}>Move To Completed</Button>
                        </div>
                        : null
                ))}
            </div>
            </CardContent></Card>
            <Card style={styles.card}><CardContent>
            <div className="completed">
                <h2 onClick={sortDue} style={{backgroundColor:"#B6D7A8"}}>Completed</h2>
                {state.map((item, index) => (
                    item.status === 2 ?
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <p style={{color:new Date(item.dueDate).getTime() - new Date().getTime() < 0 ? 'red':'black'}}>Due: {item.dueDate.substring(0,10)}</p>
                            <Button style={{backgroundColor:"#EA9999"}} onClick={(e) => onClickHandler(item, 3)}>Remove Project</Button>
                </div>
                        : null
                ))}
            </div>
            </CardContent></Card>
            </Paper>
        <Button style={{backgroundColor:"#9FC5F8", display:"inline-block", margin:"1px", textAlign: "left"}} onClick={goToNew}>Add New Project</Button>
        </>
    )
}

export default Dashboard
