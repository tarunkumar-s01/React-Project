import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { Link, Outlet } from 'react-router-dom'

const AddComp = () => {
    const [product,setproduct] = useState([]);

    useEffect(() =>{
        fetchdata();
        
    },[])

    const fetchdata =()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
            console.log(res.data);
            setproduct(res.data);
        }).catch((error)=>{});
        
    }

    const deleteproduct = (id) =>{
        console.log(id);
        if(window.confirm(`are you sure want to delete : ${id}`)){
            axios.delete(`http://localhost:8080/products/${id}`).then(() =>{
            
                window.alert("product deleted");
                fetchdata();
            }).catch((error)=>{})
        }

    }

    // const values = () =>{
    //     window.alert('hello');
    // }

  return (
    <div>
        <Outlet></Outlet>
        <Link to='/maindashboard/productadd' className='btn btn-primary'>Add</Link>
        <table border="1" className=' table table-hover table-bordered table-stripped text-center' >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            
                            <th>Quantity</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((employee,index) => (
                            <tr key={employee.id}>
                                <td>{index+1}</td>
                                <td>{employee.pname}</td>
                                <td>{employee.pprice}</td>
                                <td>{employee.pquantity}</td>
                                <td>
                                <Link to={`/maindashboard/productedit/${employee.id}`}> add </Link>
                                    
                                    <button type='button' onClick={()=>deleteproduct(employee.id)}> remove </button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  )
}

export default AddComp