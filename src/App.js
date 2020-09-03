import React,{Component} from 'react';
import './App.css';
// eslint-disable-next-line
import{route, Route, Link} from 'react-router-dom';
// eslint-disable-next-line
import Engineer from './pages/Engineer/Engineer.js';
// eslint-disable-next-line
import Home from './pages/Home/Home.js';
import Routing from './routes';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <nav className="navbar is-light"
          role="navigation"
          aria-label="main navigation">
           <div className="container">
             <div className="navbar-brand">
               <Link className="navbar-item" href="/">
               <img
                  src={process.env.PUBLIC_URL + '/image/ff7.PNG'}
                  alt="FF7 LOGO"
                  width="90"
                  height="50"
                />
               </Link>
             </div>
             <div className="navbar-menu">
               <div  className="navbar-end">
               <Link  to="/" className="a-1">
                   Home      
                 </Link> 
                 <Link  to="/Engineer" className="a-1">
                   Engineer      
                 </Link> 
                 <Link to="/Science" className="a-1">
                   Science
                 </Link>
                 <Link to="/IT" className="a-1">
                   IT
                 </Link>
                
               </div>
             </div>
           </div>


        </nav>
                <Routing />
                
      </div>
    )
  }
}
export default App
