import { useContext} from "react";
import { UserContext } from "../context/UserContext";


function DeleteModal(){

   const {usersdata,deleteID,dispatch} = useContext(UserContext);

   const confirmdelete = () =>{
        const newArray = usersdata.filter((item) => item.id !== deleteID);
        dispatch({type:"EDIT_USER_INFO",payload:newArray});
        dispatch({type:"CLOSE_DELETE"})
   }

   const canceldelete = () =>{;
        dispatch({type:"CLOSE_DELETE"})
    }

    return(
       <div className="modal-container">
        <div className="delete-modal">
            <h4>Are you sure you want delete this Profile?</h4>
            <div className="btn-container">
                <div className="confirm" onClick={confirmdelete}>
                    confirm
                </div>
                <div className="cancel" onClick={canceldelete}>
                    cancel
                </div>
            </div>
        </div>
       </div> 
    )
}

export default DeleteModal;