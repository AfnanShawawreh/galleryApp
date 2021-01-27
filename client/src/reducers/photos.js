export default (photos = [], action) => {
  switch (action.type) {

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
    return [...photos, action.payload];
    
    default:
      return photos;
  }
};
