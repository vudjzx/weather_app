import React, {Fragment,useState,useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
function App() {
      // state for forms
    const [search, updateSearch] = useState({
      city: '',
      units: ''
    })
    const {city, units} = search;
    const [consult, saveConsult] = useState(false);
    //state to store the result
    const [result, storeResult] = useState({});
    // state to change units
    const [currentUnits, storeUnits] = useState("");
    // state to verify city exists
    const [error,saveError] = useState(false);
    // useEffect for making the api call 
    useEffect(()=>{
      const fetchApi = async () =>{
        if(consult){
          const key = "7a50ee4507e52c92a8285c5566126576";
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;
          const res = await fetch(url);
          const data = await res.json();
          storeResult(data);
          saveConsult(false);
          if(data.cod==="404"){
            saveError(true);
          }else{
            saveError(false);
          }
          // change displayed units
          if(units==="metric"){
            storeUnits("C");
          }else if(units==="imperial"){
            storeUnits("F");
          }else{
            storeUnits("K");
          }
        }
      }
      fetchApi();
      // eslint-disable-next-line
    },[consult]);


  return (
    <Fragment>
      <Header
      title='React weather app'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
              search={search}
              updateSearch={updateSearch}
              saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">
              {error? <p className="red darken-4 error">City not found</p>: <Weather
              result={result}
              currentUnits={currentUnits}
              />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
