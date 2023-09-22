import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const GrillList = (props) => {

    const [allGrills, setAllGrills] = useState([]);

    let user = props.user

    useEffect(() => {
        axios.get('http://localhost:8000/api/grills')
        .then(response => setAllGrills(response.data))
        .catch(err => console.log(err))
    }, []);





    return (
        <div>
            <h1>All Grills:</h1>
            

                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Grill</td>
                            <td>Brand</td>
                            <td>Burners</td>
                            <td>Price</td>
                        </tr>


                        {
                            allGrills.map((eachGrill, idx) =>{
                                return (
                                    <tr key={idx}>
                                        <td><Link to={`/shop/${user._id}/${eachGrill._id}`} >{eachGrill.itemName}</Link></td>
                                        <td>{eachGrill.brand}</td>
                                        <td>{eachGrill.burners}</td>
                                        <td>{eachGrill.price}</td>
                                    </tr>
                                )
                            }
                            )}
                    </tbody>
                </table>

        </div >
    )
}
