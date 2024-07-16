import { useLoaderData,json } from 'react-router-dom';
import EventsList from '../components/EventsList';

export default function Events() {
  
 const data=useLoaderData();

  // if( data.isError){
  //   return <p> {data.message} </p>
  // }

 const events=data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export  const loader= async ()=>{
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
          return resData;
        }
}
