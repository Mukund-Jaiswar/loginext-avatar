import { PhoneIcon, EmailIcon, SiteIcon, TrashIcon, UnLikedIcon, LikedIcon, EditIcon } from "./icons";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function SingleProfile(props) {

    const {id, name, username, email, phone, website} = props;
    const [liked, setLiked] = useState(false);
    const {dispatch } = useContext(UserContext);

    const handlelike = () =>{
        setLiked(prev=>!prev)
    }

    const openEdit = () =>{
        dispatch({type:"OPEN_EDIT",payload:id})
    }


    const handleDelete = () =>{
        dispatch({type:"OPEN_DELETE",payload:id});
    }

    return (
      <div className="profile-container">
        <div className="image-container">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} alt="Avatar"/>
        </div>
        <div className="info-container">
            <h4>{name}</h4>
            <div><span><EmailIcon/></span><p>{email}</p></div>
            <div><span><PhoneIcon/></span><p>{phone}</p></div>
            <div><span><SiteIcon/></span><p>{website}</p></div>
        </div>
        <div className="actions-container">
            <div id="like-btn" onClick={()=>handlelike()}>
                {liked?<LikedIcon/>:<UnLikedIcon/>}
            </div>
            <div id="edit" onClick={()=>openEdit()}><EditIcon/></div>
            <div onClick={handleDelete}><TrashIcon/></div>
        </div>
      </div>
    );
  }
  
  export default SingleProfile;