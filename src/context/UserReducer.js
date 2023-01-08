const UserReducer = (state, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS':
          return {
            ...state,
            usersdata: action.payload,
            isLoading: false,
            error: null,
          };

        case 'FETCH_LOADING':
          return {
            ...state,
            isLoading: true,
          };

        case 'OPEN_EDIT':
          return {
            ...state,
            isEditOpen: true,
            editID: action.payload,
          };
          
        case 'OPEN_DELETE':
            return {
              ...state,
              isDeleteOpen: true,
              deleteID: action.payload,
            };  

        case 'CLOSE_DELETE':
            return {
                ...state,
                isDeleteOpen: false,
                deleteID: null,
            };    

        case 'CLOSE_EDIT':
          return {
            ...state,
            isEditOpen: false,
            editID: null,
          };   

        case 'EDIT_USER_INFO':
          return {
            ...state,
            usersdata: action.payload,
          };


        default:
          return state;

      }
}

export default UserReducer;