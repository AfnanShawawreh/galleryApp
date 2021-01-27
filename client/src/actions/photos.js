import * as api from "../api";
export const getPhotos = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPhotos();
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const addPhoto = (photo) => async (dispatch) => {
    try {
      const { data } = await api.addPhoto(photo);
      dispatch({type:'CREATE' ,payload:data})
    } catch (error) {console.log(error)}
  };
  // export const likePhoto =(id)=> async(dispatch)=>{
  //   try {
  //     const{data}= await api.likePhoto(id)
  //     dispatch({type:'UPDATE', payload:data})
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }