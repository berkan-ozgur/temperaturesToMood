import React from 'react';
import './App.css';
import FetchingData from './getData';


// axios.interceptors.response.use(function (response){
//   console.log(response)
//   return response;
// })


function App() {
  return (
    <div>
      <FetchingData />
    </div>
  )
}

export default App;
