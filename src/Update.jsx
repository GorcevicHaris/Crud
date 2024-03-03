import axios from 'axios'
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Update() {
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:8081/read/`+id)
    .then(res =>{
       console.log(res)
       setValues({...values,name:res.data[0].name,email:res.data[0].email})
       console.log(values)
      })
    .catch(err => console.log(err))
  },[])
    const [values,setValues] = useState({
      name:'',
      email:'',
    })
  console.log(values)

  function handleSubmit(event){
    event.preventDefault()
    axios.put(`http://localhost:8081/update/`+id,values)
    .then(res => {
      console.log(res)
      navigate('/')
    }).catch(err => console.log(err,'error'))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  )
}

export default Update