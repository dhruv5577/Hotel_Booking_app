import React, { Suspense } from 'react'
import { useRouteLoaderData,json, redirect, defer, Await } from 'react-router-dom'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

export default function EventDetails() {

  const {event,events}=useRouteLoaderData('event-details');  

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={event}>
        {loadedEvent=><EventItem event={loadedEvent}/>}
      </Await>
    </Suspense>
    
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {loadedEvent=><EventsList events={loadedEvent}/>}
      </Await>
    </Suspense>
      
    </>
  )
}

async function loadedevent(id){
  const response= await fetch('http://localhost:8080/events/'+id);

    if(!response.ok){
      throw json({message:'could not fetched details of an event'},
        {
          status:500
        }
      )
    }else{
      const resData = await response.json();
      return resData.event;
    }
}

async function loadevents(){
  const response = await fetch('http://localhost:8080/events');

        if (!response.ok) { 
          //return {isError:true,message:"Could nor fetched data"}
          // throw new Response(JSON.stringify({message:'cound not fexched data'}),{
          //   status:500
          // })
          return json({message:'cound not fexched data'},
            {
              status:500,
            }
          )
        } else {
          const resData = await response.json();
          return resData.events;
        }
}




export const loader=async ({request,params})=>{

  const id=params.eventId;

    return defer({
      event:await loadedevent(id),
      events:loadevents()
    })

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
