// import React from 'react';
import ReactDOM from 'react-dom';
import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
// import App from './App';// import React from 'react';
// import ReactDOM from 'react-dom';
// import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
import EmployeeForm from './App.js';

function Home(){
  return(
    <div>
      <EmployeeForm/>
    </div>  
  )
}
ReactDOM.render(<EmployeeForm/>,document.getElementById("root"));



















































































































































































































































































































// import Counter from './Counter';
// import reportWebVitals from './reportWebVitals';
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment =()=> {
//     setCount(count + 1);
//   };

//   const decrement =()=> {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div class="box">
//       <h2>Counter: <span><button onClick={decrement}> - </button></span>  {count} <span><button onClick={increment}> + </button></span></h2>
    
//     </div>
//   );
// }

// ReactDOM.render(<Counter/>,document.getElementById("root"));

// function Employee({user}){
//   let meassage;
//   switch(user){
//     case "John":
//       meassage = "Hello John";
//       break;
//     case "Jane":
//       meassage = "Hello Jane";
//       break;
//     case "Black":
//       meassage = "Hello Black";
//       break;
//     default:
//       meassage = "Hello User";
//   }
//   return (
//     <div>
//       <h1>{meassage}</h1>
//     </div>
//     );
// }
// ReactDOM.render(<Employee user={"Jane"}/>,document.getElementById("root"));

// function Clickbutton({isCollegeopen}){
//   return(
//     <div>
//       <button>{isCollegeopen?"collegeopen":"click here to visit college"}</button>
//     </div>
//   );
// }
// ReactDOM.render(<Clickbutton isCollegeopen={true}/>,document.getElementById("root"));

// function Examplerender({isCollegeopen}){
//   if(isCollegeopen){
//     return<h2>welcome to college</h2>
//   }
//   else{
//     return<h2>click here to visit college</h2>
//   }
// }
// ReactDOM.render(<Examplerender/>,document.getElementById("root"));

// function Examplerender({Welcomemessage}){
//   return(
//     <div>
//      <h1> welcome to college</h1>
//      {Welcomemessage.length>0 && <h2>you have {Welcomemessage.length} Welcome to my college</h2>}
//     </div>
//   )
// }
// ReactDOM.render(<Examplerender Welcomemessage={["welcome","to","college"]}/>,document.getElementById("root"))


// function Examplerender(){
//   const [number,setNumber] =useState(0);


// function SquareNum(num){
//   return Math.pow(num,3)
// }
// const result =useMemo(()=>SquareNum(number),[number]);


// return(
//   <div>
//     <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
//     <h1>Square tof the number : {result}</h1>
//   </div>
// );
// }
// ReactDOM.render(<Examplerender/>,document.getElementById("root")); 



// function Example(){
//   const [count, setCount] = useState(5000);

//   useEffect(()=>{
//   setTimeout(()=>{
//     if(count<5010){
//     setCount(count + 1);
//     }
// },2000);
// },);
// return (
//   <h1>Website counting details {count} Times</h1>
// )
// }
// ReactDOM.render(<Example/>,document.getElementById("root"));

// function Userdemo(){
//   const [users,setUsers]=useState([]);
//   const [loading,setLoading]=useState(true);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data=>{
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(error=>{
//         console.error("if it is not loaading,will be error meassage");
//         setLoading(false);
//       });
//       },[]);

//       if(loading){
//         return <div>Loading...</div>
//       }
//       return (
//         <div>
//           <h1>List out the usernames in API</h1>
//           <ul>
//             {users.map(user=>(
//               <li key={user.id}>{user.username}</li>
//             ))}
//           </ul>
//         </div>
//         );
//   }
//   ReactDOM.render(<Userdemo/>,document.getElementById("root"));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Counter />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

  // State single value

  // class Reactstate extends React.Component{
  //   constructor(){
  //     super();
  //       this.state={content:"Welcome All"}
  //       }
  //       render(){
  //         return(
  //           <div>
  //             <h1>{this.state.content}</h1>
  //             </div>
  //         )};
  // }
  // ReactDOM.render(<Reactstate/>,document.getElementById('root'));

    // multiple value

  //   const webstyle={
  //     textAlign: "center",
  //     backgroundColor: "purple",
  //     color: "white",
  //     borderRadius: "10px",
      
  //   };

  //   class Reactstate extends React.Component{
  //     constructor(){
  //       super();
  //       this.state={content:"Welcome to my website",mysite:"DK Shop"}
  //     }
  //     render(){
  //       return(
  //         <div style={webstyle}>
  //           <h1>{this.state.content}</h1>
  //           <h2>{this.state.mysite}</h2>
  //         </div>
  //       )};
  //     }
  // ReactDOM.render(<Reactstate/>,document.getElementById("root"));  
  
  // set state

  // class Reactstate extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = { Myweb: "welcome All", Mycontent: "you can do it" };
  //   }
  
  //   changethevalue = () => {
  //     this.setState({ Myweb: "This is my site" });
  //   };
  
  //   render() {
  //     return (
  //       <div>
  //         <h1>
  //           {this.state.Myweb}, {this.state.Mycontent}
  //         </h1>
  //         <button type="button" onClick={this.changethevalue}>
  //           Change the content
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  
  // ReactDOM.render(<Reactstate />, document.getElementById('root'));

  // React list
  
//   const Mywebsite=["Home","About us","Services","Products","Contactus"];
//   const websitemenu=Mywebsite.map((Mywebsite)=>{
//   return <h2>{Mywebsite}</h2>
//   });
// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById("root"));

// class Reactprops extends React.Component{
//     render(){
//       return<h1>Welcome{this.props.Myweb}</h1>
//     }
// }
// ReactDOM.render(<Reactprops Myweb="All,you did a great job"/>,document.getElementById("root"));

// function Reactstate(props){
//   return(
   
//       <h2>We having lots of items in my shop{props.myweb}</h2>
//   )
// }
// function Reactsta(props){
//   return(
   
//       <h2>We having lots of items in my shop{props.myweb}</h2>
//   )
// }
// function Reactstat(props){
//   return(
   
//       <h2>We having lots of items in my shop{props.myweb}</h2>
//   )
// }
// function Reactstae(props){
//   return(
   
//      <div>
//       <Reactstate/>
//       <Reactsta/>
//       <Reactstat/>
//      </div>
//   )
// }
// ReactDOM.render(<Reactstae/>,document.getElementById("root"));