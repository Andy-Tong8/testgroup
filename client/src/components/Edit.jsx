import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

const Edit = (props) => {
    
    const [formState,setFormState] = useState({
        name: "",
        description: ""
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOne/${props.id}`)
        .then(response => setFormState(response.data))
        .catch(error => console.log(error))
        
    }, [props.id])
    const [errorState, setErrorState] = useState([])

    const nameError = "Name must be at least 2 characters"
    const descriptionError = "Description must be at least 5 characters"

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateOne/${formState._id}`,formState)
        .then(response => {
            if (response.data.errors) {
                const temp = []
                for(let key in response.data.errors) {
                    temp.push(response.data.errors[key].message)
                }
                setErrorState([...temp])
            } else {
                navigate("/dashboard")
            }
        })
        .catch(error => console.log(error))
    }

    const onChangeHandler = (e)=>{
        setFormState({
            ...formState,[e.target.name]:e.target.value})
        }

    return (
        <div>
            <p style={{color:"blue"}}>{ formState.name.length > 0 && formState.name.length < 2 && nameError}</p>
            <p style={{color:"blue"}}>{ formState.description.length > 0 && formState.description.length < 5 && descriptionError}</p>
            {errorState.map((item, index) => (
                <p style={{color:'red'}} key={index}>{item}</p>
            ))}
            <form onSubmit={onSubmitHandler}>
                <p>Name:</p><input name="name" onChange={onChangeHandler} type="text" value={formState.name}/>
                <p>Description</p><input name="description" onChange={onChangeHandler} type="text" value={formState.description}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit

