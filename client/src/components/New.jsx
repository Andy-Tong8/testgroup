import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

const New = () => {
    
    const [formState,setFormState] = useState({
        name: '',
        description: ''
    })
    
    const [errorState, setErrorState] = useState([])

    const nameError = "Name must be at least 2 characters"
    const descriptionError = "Description must be at least 5 characters"

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/create',formState)
        .then(response => {
            console.log(response)
            if (response.data.errors) {
                const temp = []
                for(let key in response.data.errors) {
                    temp.push(response.data.errors[key].message)
                }
                setErrorState([...temp])
            } else {
                console.log('success')
                setFormState({
                    name:'',
                    description:'',
                })
                navigate("/add")
            }
        })
        .catch(error => console.log(error))
    }

    const onChangeHandler = (e)=>{
        console.log('i am in onChange handler and formState is:',formState)
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
                <p>Name:</p><input name="name" onChange={onChangeHandler}type="text"/>
                <p>Description</p><input name="description" onChange={onChangeHandler} type="text"/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default New
