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
    
    useEffect(()=>{
        axios.get(`http://localhost:8081/read/`+id)
        .then(res => {
            setStudent(res.data)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
        <h2>Student Detail</h2>
        {student && student.map((el)=> {
            return  <>
            <h2>{el.id}</h2>
            <h2>{el.name}</h2>
            <h2>{el.email}</h2>
            </>
        })}
        <Link to={'/'} className='btn btn-primary me-2'>Back</Link>
        <Link to={`/edit/${student.id}`} className='btn btn-primary'>Edit</Link>
        <button className='btn btn-sm btn-danger me-2'>Delete</button>
        </div>
        </div>

  )
}

export default Read