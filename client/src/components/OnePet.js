import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';

const OnePet = () => {

    const [petInfo, setPetInfo] = useState({});
    const history = useHistory();
    const {_idParam} = useParams();

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/pets/${_idParam}`)
        .then( res=> {
            setPetInfo(res.data.results);
        })
        .catch(err => err)
    },[])

    const deleteClickHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_idParam}`)
        .then( res=> {
            history.push("/");
        })
        .catch(err=>err)
    };

    const homeClickHandler = () => history.push("/");

    return (
        <div>
            <button onClick={deleteClickHandler} className="btn btn-danger">Adopt!</button>
            <button onClick={homeClickHandler} className="btn btn-info">Home</button>
            <h2><strong>Details about:</strong> {petInfo.name}</h2>
            <h2><strong>Type:</strong> {petInfo.type}</h2>
            <h3><strong>Description:</strong> {petInfo.description}</h3>
            <h3><strong>Skills:</strong></h3>
            <ul className="list-unstyled">
                <li>{petInfo.skillOne}</li>
                <li>{petInfo.skillTwo}</li>
                <li>{petInfo.skillThree}</li>
            </ul>
        </div>
    );
};

export default OnePet;