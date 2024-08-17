import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
        </ul>
      </nav>
        <table>
           <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
           </tr>
           <tr>
            <td>John</td>
            <td>Doe</td>
            <td>25</td>
           </tr>
           <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>30</td>
           </tr>
        </table>

      </header>
    </div>
  );
}

export default App;
// import React from 'react';
// function Welcome(props){
//   return (
//   <div>
//   <h1>Hello, {props.name}</h1>;
//   <h2>Welcome</h2>
//   <h3>home</h3>
//   </div>)
// }
// export default Welcome; 