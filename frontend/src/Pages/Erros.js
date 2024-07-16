import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function Erros() {

  const error=useRouteError();

  let title='An Error Occured'
  let message='Something went Wrong';

  if(error.status===500){
    message=error.data.message;

  }

  if(error.status===404){
    title='Not Found';
    message='Could Not found the page'
  }

  return (
    <>
    <MainNavigation/>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>

  )
}
