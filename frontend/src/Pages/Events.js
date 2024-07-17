import { useLoaderData,json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

export default function Events() {
  
 const {events}=useLoaderData();

  // if( data.isError){
  //   return <p> {data.message} </p>
  // }

 return(
  <Suspense fallback={<p>Loading...</p>}>
 <Await resolve={events}>
  {(loadedevents)=><EventsList events={loadedevents}/>}
 </Await>
 </Suspense>
 )
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

export  const loader=  ()=>{
    return defer({
      events:loadevents()
    })
}
