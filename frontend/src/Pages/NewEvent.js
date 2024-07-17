import React from 'react'
import EventForm from '../components/EventForm'
// import { json, redirect } from 'react-router-dom';

export default function NewEvent() {
  return (
    <EventForm method="post"/>
  )
}

// export const action=async ({request})=>{

//   const data=await request.formData();

//   const eventData={
//     title:data.get('title'),
//     image:data.get('image'),
//     description:data.get('description'),
//     date:data.get('date'),

//   }

//   const response=await fetch('http://localhost:8080/events',{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(eventData)
//   })

//   if(response.status===422){
//     return response;
//   }

//   if(!response.ok){
//     throw json({message:'error occured in sending data'},{status:500})
//   }

//   return redirect('/events')

// }
