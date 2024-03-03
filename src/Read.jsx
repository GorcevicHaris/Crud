import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// // Na primer, ako je vrednost id koja se dobije iz URL-a 5,
//  URL zahteva će biti http://localhost:8081/read/5. Ovo znači
//   da će zahtev biti usmeren na putanju /read/5 na serverskoj 
//   strani, gde će se ID 5 koristiti za dohvatanje odgovarajućih
//    podataka o studentu sa ID-jem 5 iz baze podataka.

function Read() {
    const {id} = useParams()
    const [student,setStudent] = useState([])
console.log(id,'readid')
    useEffect(()=>{
        axios.get(`http://localhost:8081/read/`+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <h2>Student Detail</h2>
        <h2>{student.id}</h2>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>
        <Link to={'/'} className='btn btn-primary me-2'>Back</Link>
        <Link to={`/edit/${student.id}`} className='btn btn-primary'>Edit</Link>
        <button className='btn btn-sm btn-danger'>Delete</button>
        </div>
        </div>

  )
}

export default Read