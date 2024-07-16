import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Events,{loader as eventsloader} from './Pages/Events';
import EventDetails ,{loader as eventdetailsloader}from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import Root from './Pages/Root';
import EventsRoot from './Pages/EventsRoot';
import Erros from './Pages/Erros';

const router=createBrowserRouter([
  {path:'/',
   element:<Root/>,
   errorElement:<Erros/>,
   children:[
    {index:true,element:<Home/>},
    {path:'events',element:<EventsRoot/>,children:[
    
      
      // {path:':eventId',
      //   id:'event-details',
      //   loader:eventsloader ,
      //   children:[
        
      //   {
      //     path:'edit',
      //     element:<EditEvent/>,
        
      //   }
      // ]},
      
      {index:true,element:<Events/>, loader:eventsloader},
      {
        path:':eventId',
        id:'event-details',
        loader:eventdetailsloader,
        children:[
          {
            index:true,
            element:<EventDetails/>
          },
          {path:'edit',element:<EditEvent/>}
        ]
      },
      
      {path:'new',element:<NewEvent/>},
      
    ]}
    
   ]
  }
  

])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
