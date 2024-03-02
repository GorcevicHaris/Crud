import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// // Na primer, ako je vrednost id koja se dobije iz URL-a 5,
//  URL zahteva će biti http://localhost:8081/read/5. Ovo znači
//   da će zahtev biti usmeren na putanju /read/5 na serverskoj 
//   strani, gde će se ID 5 koristiti za dohvatanje odgovarajućih
//    podataka o studentu sa ID-jem 5 iz baze podataka.
function Read() {
    const {id} = useParams()
console.log(id,'readid')
    useEffect(()=>{
        axios.get(`http://localhost:8081/read/`+id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>Read</div>
  )
}

export default Read