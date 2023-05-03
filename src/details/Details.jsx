import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    let[prod, setProd] = useState(null);
    let {id} = useParams();
    let redirecting = useNavigate();
    let [disable, setDisable] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/ecommerce/single/${id}`)
        .then(res=>{
            setProd(res.data);
        })
        .catch(err=>{
            console.log(err.message);
        })
    });

function handleDelete(x) {
    setDisable(true);
    console.log('blog deleted!',id);
    axios.post('http://localhost:4000/api/ecommerce/deleteproduct',{id: id})
  .then(res => {
      console.log(res.data);
      redirecting('/');
    })
    .catch(err => {
      console.log(err.message);
  })
}

  return (
    <div>
        {
    prod && <Container className='mt-4 text-center align-content-center justify-content-center'>
       <h1>{prod.prodName}</h1>
       <div className='text-center'>
          <img className='img-fluid  w-5 h-5 my-5' src={prod.prodImg_url} alt="" />
       </div>
       <div className="text-center text-muted mx-3 p-3 lead lh-2 fs-4">
        <h2 className='text-primary fw-bold display-5'>{prod.prodPrice}</h2>
        <p>{prod.prodDetails}</p>
        </div>
        <div className="btn-group text-center my-5">
            <Link to={'/'} className='btn btn-light btn-outline-primary'>Back</Link>
            <Link to={`/update/${prod._id}`}
             className='btn btn-light btn-outline-success mx-3'>Update</Link>
            <Button
            onClick={(e)=>handleDelete(prod._id)}
            disabled={disable}
            className='btn btn-light btn-outline-warning'
            >Delete</Button>
        </div>
    </Container>
}
        </div>
  )
}

export default Details