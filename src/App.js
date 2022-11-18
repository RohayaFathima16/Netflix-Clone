import './App.css'    
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios' ;
// importing the css file
// JUST CREATE A FUNCTION
 axios.defaults.baseURL ='https://api.themoviedb.org/3';
 axios.defaults.params = {
    api_key : '170f8a2d856cbc9877a12fbf8c31b787' ,
 };
const App =() =>{

  return(

    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  ); 

};

export default App; // export the function