
// Function to handle storing data in localStorage
export const storeDataInLocalStorage = (key, valueJson) => {
  try{
    localStorage.setItem(key, JSON.stringify(valueJson));
    return true
  } catch(error){
    console.error('An error occurred in saving localStorage:', error.message);
    return error.message
  }

};

// Function to retrieve data from localStorage
export const retrieveDataFromLocalStorage = (key) => {
  try{
    const valueJson = JSON.parse(localStorage.getItem(key));
    return (valueJson); // returns null if data not present
  } catch(error){
    console.error('An error occurred in retrieving localStorage:', error.message);
    return error.message
  }
};

// Function to clear data from localStorage
export const clearDataFromLocalStorage = () => {
  try{
    localStorage.clear();
    return true
  } catch(error){
    console.error('An error occurred in clearing localStorage:', error.message);
    return error.message
  }
}