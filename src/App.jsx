import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let image_arr = imageData()

  return (
    <>
      <h1>Kalvium Gallery</h1>
      <div className='parent'>
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
          <img src={image_arr[0].img} className='eleImg' alt="" />
      </div>
    
    </>
  )
}

export default App;
