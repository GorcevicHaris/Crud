import axios from 'axios'
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Update() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [values,setValues] = useState({
    name:'',
    email:''
  })

  useEffect(()=>{
    axios.get(`http://localhost:8081/read/${id}`)
    .then(res => {
      setValues({...values,name:res.data[0].name,email:res.data[0].email})
    })
    .catch(err => console.log(err))
  },[])

  function handleSubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:8081/update/${id}`,values)
    .then(res => {
      navigate('/')
    }).catch(err => console.log(err))
  }
  console.log(values)
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit} >
          <h2>Update Student</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input value={values.name} onChange={(e)=> setValues({...values,name:e.target.value})} placeholder='Enter Name' className='form-control'></input>
          </div>
          <div className='mb-2'
          >
            <label>Email</label>
            <input value={values.email} onChange={(e)=> setValues({...values,email:e.target.value})} placeholder='Enter Email' className='form-control'></input>
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to={'/'} className='btn btn-success mx-2'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update