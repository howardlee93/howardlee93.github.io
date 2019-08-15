import React from 'react';
import {works} from '../assets/data';

const workStyle={

  	list:{
    	display:'flex',
    	flexWrap: 'wrap',
    	flexDirection:'row',
    	justifyContent: 'space-between'
    },
    
    li:{
    	listStyle: 'none',
    },
   
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
			opacity: '0',
		};

	}

	toggleHover = () =>{
		this.setState({
			hover: !this.state.hover
		});
		
		console.log('youre hovering!!');

		if(this.state.hover){
			this.setState({
				opacity: '0'
			});
		}else{
			this.setState({
				opacity: '1',
			})
		};
	}


	render(){


		const hovered ={
    		text:{
    			opacity: this.state.opacity,
    		    textAlign:' center',
    		    transition: '.5s ease',
    			position: 'absolute',
    		  	transform: 'translate(-50%, -50%)',
    		  	background:'#D99484',
    		  	height:'10%',
    		  	width:'10%',
    		  	},

    		 image:{
    		 	opacity:'0'

    		 }
    	}


		
		const projectDisplay = works.map((work, key)=>(
			<li key={key} style={workStyle.li}>
			<h4 > 
			{work.title}
			</h4>
			
			<a href={work.url}>
				<img src={images[work.image]} alt="work" 
				onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
				</img>
				<p style={hovered.text}>Link</p>
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