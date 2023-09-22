import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DisplayGrill from '../components/DisplayGrill';

const SCartList = (props) => {

    const user = props.user
    const [productList, setProductList] = useState([]);

    const listBuilder = arr => {
        arr.forEach(product => {
            axios.get(`http://localhost:8000/api/grills/${product._id}`)
                .then(res => {
                    console.log(res.data);
                    console.log('prduct data above?')
                    setProductList([...productList, res.data])
                }).catch(err => console.log(err))
        });
    }
    const deleteProduct = (id) =>{
        console.log(id)
    }
    console.log('user cart: ' + user.cart)
    useEffect(() => {
        listBuilder(user.cart)
        // axios.get(`http://localhost:8000/api/users/${id}`)
        // .then(res => {
        //     console.log(res.data)
        //     setUser(res.data)
        //     console.log('done')
        // })
        // .catch(err => console.log(err))
    }, [])
    if (productList) {
        console.log(productList)
        return (
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Item</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                        {productList.map((eachProduct, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{eachProduct.itemName}</td>
                                    <td>{eachProduct.price}</td>
                                    <td><button className='btn btn-danger btn-sm m-2' onClick={() => deleteProduct(eachProduct._id)}>Remove</button></td>
                                </tr>
                            )
                        })

                        }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default SCartList