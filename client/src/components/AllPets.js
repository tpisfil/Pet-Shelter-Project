import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

//ASK QUESTION ABOUT LINK VS HANDLER!!!!
//////////////////////////////////////

const AllPets = () => {

    const [allPets, setAllPets] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            setAllPets(res.data.results)
        })
        .catch(err => console.log(err))
    },[deleteClicked])

    const newClickHandler = () => history.push("/pets/new");

    return (
        <div className="container">
            <h2>These pets are looking for a good home, adopt them today!</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Pet Name</th>
                    <th scope="col">Type of Pet</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet,i)=> {
                        return <>
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
            <button id="homeButton" onClick={newClickHandler} className="btn btn-success">Add a new pet!</button>
        </div>
    );
};

export default AllPets;