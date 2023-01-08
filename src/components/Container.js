import SingleProfile from "./SingleProfile";
import EditModal from "./EditModal";
import { UserContext } from "../context/UserContext";
import { useEffect, useContext} from "react";
import DeleteModal from "./DeleteModal";

function Container() {

    const { usersdata, dispatch, isLoading, isEditOpen, isDeleteOpen} = useContext(UserContext);

    useEffect(() => {
      async function fetchData() {

        dispatch({ type: 'FETCH_LOADING' });

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: data });

      }

        fetchData();

    }, [dispatch]);


    if (isLoading) {
      return (
        <main className="loading-page">
            <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
            </div>
        </main>
      )
	  }


    return (
      <>
        {isDeleteOpen&&<DeleteModal/>}
        {isEditOpen&&<EditModal/>}
        <div className="users-container">
          {usersdata.map( data=> <SingleProfile {...data} key={data.id} />)}
        </div>
      </>
    );
  }
  
  export default Container;