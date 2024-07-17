import React from 'react'
import { useRouteLoaderData,json, redirect } from 'react-router-dom'
import EventItem from '../components/EventItem';

export default function EventDetails() {

  const data=useRouteLoaderData('event-details');  

  return (
    <>
      <EventItem event={data.event}/>
    </>
  )
}


export const loader=async ({request,params})=>{

  const id=params.eventId;

 const response= await fetch('http://localhost:8080/events/'+id);

 if(!response.ok){
  throw json({message:'could not fetched details of an event'},
    {
      status:500
    }
  )
 }else{
  return response;
 }

}


export const action =async ({params,request})=>{

  const id=params.eventId;

  const res=await fetch('http://localhost:8080/events/'+id,{
    method:request.method
  })

  if(!res.ok){
    throw json({message:'could not delete the event'},
      {
        status:500
      }
    )
  }

  return redirect('/events')
}
