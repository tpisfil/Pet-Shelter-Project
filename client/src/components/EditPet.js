import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router';

const EditPet = () => {
    const [petInfo, setPetInfo] = useState({});
    const history = useHistory();
    const {_idParam} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_idParam}`)
        .then(res=>{
            setPetInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])

    let changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    let submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${_idParam}`,petInfo)
        .then(res => {
            console.log(res);
            history.push(`/pets/${_idParam}`);
        })
        .catch(err=>err);
    }

    return (
        <div>
            <h2>Edit Pet: </h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value={petInfo.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type: </label>
                    <input onChange={changeHandler}type="text" name="type" id="" className="form-control" value={petInfo.type}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control" value={petInfo.description}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skillOne" id="" className="form-control" value={petInfo.skillOne}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input onChange={changeHandler} type="text" name="skillTwo" id="" className="form-control" value={petInfo.skillTwo}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input onChange={changeHandler} type="text" name="skillThree" id="" className="form-control" value={petInfo.skillThree}/>
                </div>
                <br></br>
                <input type="submit" value="Edit Pet" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default EditPet;