import React, {useEffect, useState} from 'react';
import logo from  './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: "Dr. Mahfuz",
  //   job:"SInger"
  // }
  // var person2 = {
  //   name: "Eva Rahman",
  //   job:"Kokil Kondi"
  // }
  // var style ={
  //   color: 'red',
  //   backgroundColor:'yellow'
  // }
  const nayoks = ['Razzak .....',   'Salman .....','Sakib .....','Shuvo .....' ]
  const products=[
    {name: 'photoshop .....', price: '$90.99'},
    {name: 'Illustrator .....', price: '$60.99'},
    {name: 'PDF Reader .....', price: '6.99'},
    {name: 'Premiere EI .....', price: '249.99'}


]
const friends=[
  {name: 'Nehon/Murgi .....', age: '45'},
  {name: 'Shuvo/Nuscha .....', age: '45.-1'},
  {name: 'Roni/Modna .....', age: '7'},
  {name: 'Koushik/Dadu .....', age: '23'}


]



 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
          friends.map(friend => <li>{friend.name}</li>)

          }
         </ul>
         {
           products.map(pd =><Product product={pd}></Product> )
         }
         {
           friends.map(fn=><Friend friend={fn}></Friend>)
         }

        <Person name = 'Munna .....' job='football .....'></Person>
        <Person name = 'Masum .....' job = 'Dorshok .....'></Person>
        <Person name = 'Koushik Adhikari KD .....' job = 'Bekar Student .....'></Person>
      </header>
    </div>
  );
}


function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float:'left'
  }
  const{name,price} = props.product;
 console.log(name,price)
 
   
 
  return(
    <div style={productStyle}>
      <h5>{name}</h5>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Friend(props) {
  const friendStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float:'left'
  }
  const{name,age} = props.friend;
 console.log(name,age)
 
   
 
  return(
    <div style={friendStyle}>
      <h5>{name}</h5>
      <h3>{age}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  
  return (
    <div style = {{border:"2px solid gold", width:"400px"}}>
      <h3>My Name:{props.Product}  </h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
  
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{

     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data =>setUsers(data))       

  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
  
}
function Counter() {
  const [count,setcount] = useState(10);
  const handleIncrease =() => setcount(count + 1);
  
  return(
    <div>
      <h1>Count:{count}</h1>
     
      <button onMouseMove={() =>setcount(count-1)}>Decrease</button>
      <button onClick={() => setcount(count + 1)}>Increase</button>
    </div>
  )
}



export default App;


































{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done22 <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>my heading:{person.name +" "+ person.job}</h1>
        <h3 style={{backgroundColor:'cyan',color:'yellow'}}>Singer: {person2.name+" "+ person2.job}</h3>
       <p>My first react paragraph</p> */}