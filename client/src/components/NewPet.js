import axios from 'axios';
import e from 'cors';
import React, {useState} from 'react';
import { useHistory } from 'react-router';

const NewPet = () => {
    let [formInfo, setFormInfo] = useState({
        name: null,
        type: null,
        description: null
    });

    let [validationErrors, setValidationErrors] = useState({});
    const history = useHistory();

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new',formInfo)
        .then(res => {
            if (res.data.err){
                setValidationErrors(res.data.err.errors);
            }
            else{
                history.push("/");
            }
        })
        .catch(err=>err)
    };

    const homeClickHandler = () => history.push("/");

    return (
        <div className="container">
            <h2>Know a pet needing a home?</h2>
            <button onClick={homeClickHandler} className="btn btn-info">back to home</button>
            <br></br><br></br>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control"/>
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type: </label>
                    <input onChange={changeHandler}type="text" name="type" id="" className="form-control"/>
                    <p className="text-danger">{validationErrors.type?.message}</p> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control"/>
                    <p className="text-danger">{validationErrors.description?.message}</p> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skillOne" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input onChange={changeHandler} type="text" name="skillTwo" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input onChange={changeHandler} type="text" name="skillThree" id="" className="form-control"/>
                </div>
                <br></br>
                <input type="submit" value="Add Pet" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default NewPet;