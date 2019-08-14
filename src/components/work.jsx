import React from 'react';
import {works} from '../assets/data';

const workStyle={

  	list:{
    	display:'flex',
    	flexWrap: 'wrap',
    	flexDirection:'row',
    },
    
    li:{
    	padding:'4%',
    	listStyle: 'none',
    },

    hover:{
    	fontWeight:'bolder',
    	fontSize: '25px'
    }
}


function importAll(r) {
  let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context("../assets/images/project/", false, /\.(png|svg|jpe?g)/));

class Work extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			hover: false,
		};

	}

	toggleHover = () =>{
		this.setState({
			hover: !this.state.hover
		});
		

		console.log('youre hovering!!');

	}


	render(){

		const projectDisplay = works.map((work, key)=>(
			<li key={key} style={workStyle.li} 
			onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>

			<h4 > 
			{work.title}
			</h4>
			
			<a href={work.url}>
			<img src={images[work.image]} alt="work"  ></img>
			</a>
			<a href={work.github}><p>Github</p></a>
			<p>{work.description}</p>
			</li>
			));


		return(
			<div style={{textAlign:'center'}}>
				<h1> Some samples of my work </h1>
				<h2> Stay tuned for more content</h2>
				<ul style={workStyle.list}>
				{projectDisplay}
				</ul>

			</div>

			)
	}

}


export default Work;