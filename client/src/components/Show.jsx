import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

const Show = (props) => {
    const buttonOff={
        backgroundColor: "white",
        color: "black"
      }
      const buttonOn={
        backgroundColor: "green",
        color: "white"
      }

    const [state, setState] = useState({})
    useEffect(() => {
        console.log('you are in show component')
        axios.get(`http://localhost:8000/api/findOne/${props.id}`)
            .then(response => {
                setState({ ...response.data })
            })
            .catch(error => console.log(error))
    }, [])

    const goToEdit = (e) => {
        navigate(`/edit/${props.id}`);
    }
    const consoleLogMe = (e) => {
        axios.get(`http://localhost:8000/api/find`)
            .then(response => {
                console.log(response.data )
            })
            .catch(error => console.log(error))
    }
    const deleteFromState = () => {
        navigate('/dashboard')
    }

    return (
        <div>
            {state.name ?
                <div>
                    <h3>{state.name}</h3>
                    <h5>{state.description}</h5>
                    <h5>
                        
                        {/* {state.status.map((val,index)=>{
                           <p>Game {index+1}</p>
                           // <button {val==1 ? style={buttonOn} : style={buttonOff}}>Game {index+1}</button> 
                        })} */}
                    </h5>
                    <h5>{state.team}team should go here</h5>
                    <button onClick={consoleLogMe}>consolelog my database</button> |&nbsp;
                    <button onClick={goToEdit}>Edit</button> |&nbsp;
                    <DeleteButton personId = {props.id} successCallback = {()=>deleteFromState()} />
                </div>
            : <div>
                <h5>Show Component Says: "backend is down :("</h5>
                <h5>ERR_CONNECTION_REFUSED OH NO!</h5>
              </div>

                        
            }
            
        </div>
    )
}

export default Show
