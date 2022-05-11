import React, { useEffect, useState } from 'react';
import {works} from '../assets/data';
import axios from 'axios';

const workStyle={

  	list:{
    	display:'flex',
    	flexWrap: 'wrap',
    	flexDirection:'row',
    	justifyContent: 'space-between',
		
    },
    
    li:{
    	listStyle: 'none',
		border:'1px',
		borderStyle: 'solid'
    },
   
}

function importAll(r) {
  let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context("../assets/images/project/", false, /\.(png|svg|jpe?g)/));

function Work(){
		
	const [data, setData] = React.useState([]);

	const [term, setTerm] = useState("")

	useEffect(()=>{
		axios.get('https://api.github.com/users/howardlee93/repos')
		.then( res => setData(res.data));

	},[data]);

	const handleChange = (e) =>{
		e.preventDefault();

	};
	
	// const filterItem = (curcat) => {
	// 	const newItem = data.filter((term) => {
	// 		return newVal.category === curcat;
	// 	  });
	// 	setData(newItem);
	  
	// };




		const projectDisplay = data.slice(0,6).map((work)=>(
			<li key={work.id} style={workStyle.li}>
			<h4 > 
			{work.name}
			</h4>
			<a href={work.homepage}> { work.homepage ? (<p>See more</p>) : ("")}</a>

			<a href={work.html_url}><p>Github</p></a>
			<p>{work.description}</p>
			<p>{work.language}</p>
			</li>

			));

		return(
			<div style={{textAlign:'center', width:'75%'}}>
				<h1> Some samples of my work </h1>
				<h2> Stay tuned for more content</h2>
				<input type='text' onChange={handleChange}/>
				<ul style={workStyle.list}>
				{projectDisplay}
				</ul>

			</div>

			)

}


export default Work;