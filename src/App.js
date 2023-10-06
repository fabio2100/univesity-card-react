import './App.css';
import { useState } from "react"

function App() {
  const [busqueda,setBusqueda] = useState('');
  const [arrayImages,setArrayImages] = useState([]);

  const handleBusqueda = ({target}) => {
      setBusqueda(target.value);
  }


  const handleClickButton = () => {
      fetch(`http://universities.hipolabs.com/search?name=${busqueda}`)
      .then(response => response.json())
      .then(data => {
          setArrayImages(data);  
      })
  }

  return (<>
      <div className='searchBarra'>
      <input value={busqueda} name={busqueda} onChange={handleBusqueda} placeholder="Enter university to search"></input>
      <button onClick={handleClickButton}>Search Universities</button>
      </div>
      <div className='divUniversities row justify-content-around'>{arrayImages.map((element,index)=><UniversityVisor key={index} {...element} />)}</div>
  </>)
}


function UniversityVisor(props){
  return <>
  
  <div className='card col-xl-4 col-lg-4 col-md-6 col-sm-12 cardPersonalizacion'>
      <div className='card-header'><h5 className='card-title'>{props.name}</h5></div>
      <div className='card-body'>
      <h6 className='card-subtitle mb-2 text-muted'>{props.country}  {props.alpha_two_code}</h6>
      <div>{props.web_pages.map(element => {
          return <><a href={element}>{element}</a><br/></>       
      })}
      </div>
      </div>
      </div>
  </>
}

export default App;
