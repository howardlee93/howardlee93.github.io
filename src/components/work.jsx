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

function Work(){

		
		const projectDisplay = works.map((work, key)=>(
			<li key={key} style={workStyle.li}>
			<h4 > 
			{work.title}
			</h4>
			<a href={work.url}>
				<img src={images[work.image]} alt="work">				
				</img>
			</a>

			<a href={work.github}><p>Github</p></a>
			<p>{work.description}</p>
			</li>

			));

		return(
			<div style={{textAlign:'center', width:'75%'}}>
				<h1> Some samples of my work </h1>
				<h2> Stay tuned for more content</h2>
				<ul style={workStyle.list}>
				{projectDisplay}
				</ul>

			</div>

			)

}


export default Work;