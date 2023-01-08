import UserReducer from "./UserReducer";
import { useReducer, createContext } from "react";

const Intial_state = {
    usersdata : null,
    isLoading : true,
    error : null,
    isEditOpen : false,
    editID : null,
    isDeleteOpen : false,
    deleteID: null
}

export const UserContext = createContext(Intial_state);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, Intial_state);


    return(
        <UserContext.Provider value=
            {{
                usersdata: state.usersdata, isLoading: state.isLoading,
                isEditOpen:state.isEditOpen, editID: state.editID, error: state.error,
                isDeleteOpen: state.isDeleteOpen, deleteID: state.deleteID, dispatch
            }}>
            {children}
        </UserContext.Provider>
    )
}