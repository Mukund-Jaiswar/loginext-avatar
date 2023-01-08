import { useState, useContext, useEffect } from "react";
import { CrossIcon } from "./icons";
import { UserContext } from "../context/UserContext";


function EditModal(){

    const {usersdata,editID,dispatch} = useContext(UserContext);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    });

    const closeEdit = () =>{
        dispatch({type:"CLOSE_EDIT"})
    }
    
    const handleSubmit = (event) =>{

        event.preventDefault();
        const index = usersdata.findIndex((item) => item.id === editID) 
        const editedArray = [...usersdata]
        editedArray[index] = {...usersdata[index],...formValues}
        dispatch({type:"EDIT_USER_INFO",payload:editedArray});
        dispatch({type:"CLOSE_EDIT"})

    }

    useEffect(() => {
        if (editID) {
          const index = usersdata.findIndex((item) => item.id === editID)  
          setFormValues({
            name: usersdata[index].name,
            email: usersdata[index].email,
            phone: usersdata[index].phone,
            website: usersdata[index].website,
          });
        }
      }, [editID, usersdata]);

    return(
       <div className="modal-container">
        <div className="modal">
           <div className="modal-head">
                <h4>Basic Modal</h4>
                <span onClick={()=>closeEdit()}><CrossIcon/></span>
           </div>

           <form id="myForm" onSubmit={handleSubmit}>
                <div className="form-row">
                <label htmlFor="name"><span className="required">*</span>Name:</label>
                <input type="text" id="name" name="name" value={formValues.name} required maxLength={20}
                    onChange={(event) =>
                        setFormValues({ ...formValues, name: event.target.value })
                    }
                />
                </div>

                <div className="form-row">
                <label htmlFor="email"><span className="required">*</span>Email:</label>
                <input type="email" id="email" name="email" value={formValues.email} required maxLength={25}
                    onChange={(event) =>
                        setFormValues({ ...formValues, email: event.target.value })
                    }
                />
                </div>

                <div className="form-row">
                <label htmlFor="phone"><span className="required">*</span>Phone:</label>
                <input type="tel" id="phone" name="phone" value={formValues.phone} required maxLength={25} 
                    onChange={(event) =>
                        setFormValues({ ...formValues, phone: event.target.value })
                    }
                />
                </div>

                <div className="form-row">
                <label htmlFor="website"><span className="required">*</span>Website: </label>
                <input type="text" id="website" name="website" value={formValues.website} required maxLength={25}
                    onChange={(event) =>
                        setFormValues({ ...formValues, website: event.target.value })
                    }
                />
                </div>
           </form>

           <div className="modal-action">
                <div id="cancel" onClick={()=>closeEdit()}>Cancel</div>
                <button id="ok" form="myForm" type="submit">OK</button>
           </div>
        </div>
       </div> 
    )
}

export default EditModal;