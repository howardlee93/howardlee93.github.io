import React from 'react';
import './App.css';

import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';


import {
  Route,
 	NavLink,
 	Switch
} from 'react-router-dom';


const header ={

head: {
  textAlign:'center',
   fontSize:'50px', 
   color:'white', 
   padding:'0', 
   margin:'0', 
},

sub:{
  textAlign:'center',
  fontSize:'30px', 
  color:'white', 
  padding:'0', 
  margin:'0',
},

}


class App extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			year: new Date().getFullYear(),

		}
    this.handleScroll = this.handleScroll.bind(this)
	}

  handleScroll(){
    this.setState({
      scroll: window.scrollY
    });
    console.log(this.state.top + "is top");
    console.log(this.state.scroll + 'is scroll');


  }

  componentDidMount(){
    const header = document.getElementById("header");
    this.setState({
      top: header.offsetTop,
      height: header.offsetHeight,
    });

    window.addEventListener('scroll',this.handleScroll);

  }


render(){

const sticky = {
  position: '-webkit-sticky',
  position: 'fixed',
  top: '0',
  width: '100%',
  background: '#D99484', 

}

const notSticky ={
  top: '0',
  width: '100%',
  background: '#D99484', 

}

	return(

		<div>

        
          <div id ='header' style ={this.state.scroll > this.state.top ? sticky : notSticky}>
           <h1 style={header.head}> HOWARD LEE</h1>
           <h6 style={header.sub}>software engineer in the bay area</h6>

            <div className="navBar">
          		<NavLink to='/' className="link">About </NavLink>
          		<NavLink to='/Work' className="link">Work</NavLink>
          		<NavLink to='/Contact' className="link">Contact</NavLink>
            </div>
          </div>
              
          	 <div className="tabs" style={{display:'flex', justifyContent:'center'}}>
          	 	 <Switch>
          	 	 	<Route exact path='/' component ={About}/>
          	 	 	<Route path='/Work' component={Work}/>
          	 	 	<Route path='/Contact'  component ={Contact}/>
          	 	</Switch>

          	 </div>
             <footer style={{display:'flex', justifyContent:'center'}}>
              <p> Copyright Howard Lee {this.state.year}</p>
             </footer>

		</div>

		)
	}

}


export default App;

