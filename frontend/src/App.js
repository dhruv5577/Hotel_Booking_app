import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import Events,{loader as eventsloader} from './Pages/Events';
import EventDetails ,{loader as eventdetailsloader,action as deleteevent} from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import Root from './Pages/Root';
import EventsRoot from './Pages/EventsRoot';
import Erros from './Pages/Erros';
import { action as manipulateevents} from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './Pages/NewsletterPage';


const router=createBrowserRouter([
  {path:'/',
   element:<Root/>,
   errorElement:<Erros/>,
   children:[
    {index:true,element:<Home/>},
    {path:'events',element:<EventsRoot/>,children:[
    
      
      {index:true,element:<Events/>, loader:eventsloader},
      {
        path:':eventId',
        id:'event-details',
        loader:eventdetailsloader,
        children:[
          {
            index:true,
            element:<EventDetails/>,
            action:deleteevent
          },
          {path:'edit',element:<EditEvent/>,action:manipulateevents}
        ]
      },
      
      {path:'new',element:<NewEvent/>,action:manipulateevents},

      
    ]},
    {
      path: 'newsletter',
      element: <NewsletterPage />,
      action: newsletterAction,
    },
    
   ]
  }
  

])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
