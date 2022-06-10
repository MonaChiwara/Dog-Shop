// CSS
import './App.css';
// Axios
import axios from 'axios';
// Components
import DogInfo from '../DogInfo/DogInfo';
// Hooks
import { useState } from 'react'


function App() {
  // setup states variables

  // State for input field
  const [dogBreed, setDogBreed] = useState('')

  // State for Dog Info
  const [dogInfo, setDogInfo] = useState([])
  
  // HandleChange
  const handleChange = (e) => {
    // console.log(e.target.value)
    setDogBreed(e.target.value)
  }

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'https://api.thedogapi.com/'
    const query = 'v1/breeds/search?q='
    // console.log('url', baseUrl + query + dogBreed)

    // Axios
    try {
      const response = await axios.get(baseUrl + query + dogBreed)
      setDogInfo(response.data)
      console.log('Response', response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  
  return (
    <div className=" form-group App" >
      <h1>Dog Shop</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed:</label>
        <input type="text" required value={dogBreed} onChange={handleChange} class="form-control" id="exampleInputName2" placeholder="Type Breed Name Here" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <DogInfo dogInfo={dogInfo} />
    </div>
  );
}
export default App;