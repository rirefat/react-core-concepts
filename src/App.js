import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const cssRefat ={
  fontSize: '18px',
  backgroundColor: '#74b9ff',
  padding: '20px',
  border: '4px solid #0984e3',
  borderRadius: '22px',
  margin: '15px'
}
const cssFriend ={
  fontSize: '18px',
  backgroundColor: '#dff9fb',
  padding: '20px',
  border: '4px solid #34e7e4',
  borderRadius: '22px',
  margin: '15px'
}

// const friendsList =['Abdul Hamid', 'Zahid Sabur', 'Abdul Karim', 'Hasin Hayder', 'Jhankar Mahbub'];
const id = ['a5528b0552801', 'a5528b0552802', 'bc05528055283', 'bc55280055284'];
const friendsList =[
  {name: 'Abdul Hamid', id: 'a5528b0552801', Profession: 'President of BD'},
  {name: 'Abdur Rahim', id: 'a5528b0552801', Profession: 'Graphics Designer'},
  {name: 'Humayum Kabir', id: 'a5528b0552801', Profession: 'SEO Specialist'}
]

function App() {
  return (
    <div className="App">
      <h1>I'm Learning React App</h1>
      <Counter></Counter>
      <Count></Count>
      <ThirdCounter></ThirdCounter>
      <Refat></Refat>
      {/* <Friend name="Abdul Hamid" id={id[1]} profession="President of Bangladesh"></Friend>
      <Friend name="Zahid Sabur" id={id[2]} profession="Principle of Engineers, Google Inc"></Friend> */}
      {
        // friendsList.map(friend => console.log(friend))
        friendsList.map(friend => <Friend name={friend.name} id={friend.id} profession={friend.Profession}></Friend>)
      }
      <div className="row">
        {/* <FriendsList></FriendsList> */}
      </div>
    </div>
  );
}

function Refat(){
  return(
    <div style={cssRefat}>
      <p><strong>Name: </strong> Rafiul Islam Refat</p>
      <p><strong>Profession: </strong>MERN Stack Web Developer</p>
      <p><strong>Id: </strong>{id[0]}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div style={cssFriend}>
      <p><strong>Friend's Name: </strong> {props.name}</p>
      <p><strong>Friend's Profession:</strong> {props.profession}</p>
      <p><strong>Id: </strong>{props.id}</p>
    </div>
  )
}
//********************************************************* Counter Section *********************************************************
function Counter(){
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    const newCount = count+1;
    setCount(newCount);
  }
  const decreaseCount = () => {
    const newCount = count-1;
    setCount(newCount);
  }
  return(
    <dir>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCount} className='btn btn-outline-primary'>Increase</button>
      <button onClick={decreaseCount} className='btn btn-outline-primary'>Decrease</button>
    </dir>
  )
}

// **********************************************************************************************************************************

//======================================================== Counter Section 2 ========================================================
function Count(){
  const [count, setCount] = useState(0);
  const increment = () =>{ setCount(count+1)}
  const decrement = () =>{ setCount(count-1)}
  return(
    <div>
      <h2>Present State: {count}</h2>
      <button onClick={increment} className='btn btn-outline-danger'>Plus+</button>
      <button onClick={decrement} className='btn btn-outline-danger'>Minus-</button>
    </div>
  )
}
// ==================================================================================================================================

//======================================================== Counter Section 3 ========================================================
function ThirdCounter(){
  const [count, setCount] = useState(0);
  const increaseState = () =>{setCount(count+1)}
  const decreaseState = () =>{setCount(count-1)}
  return(
    <div>
      <h2>Present State: {count}</h2>
      <button onClick={increaseState} className='btn btn-outline-success'>Increasing</button>
      <button onClick={decreaseState} className='btn btn-outline-success'>Decreasing</button>
    </div>
  )
}
// ==================================================================================================================================


// function FriendsList (){
//   return(
//     <div>
//       <div className="col-sm-6">
//         <div className="card">
//           <div className="card-body">
//           <h3 className="card-title"></h3>
//             <p className="card-text"></p>
//               <div className="btn btn-primary">Details</div> 
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default App;
