import React, { Fragment,  useState, useRef } from 'react';
import resume from "../assets/resume.pdf"
import prof from '../assets/images/prof.png'
import icon from '../assets/images/icon.png';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const gifs = importAll(require.context("../assets/images/gif/", false, /\.(gif)/));


const gif= {
	profile: prof,
	cat: 'cat.gif', //'http://gph.is/1oXJHnO',
	steph: 'steph.gif', //'https://gph.is/g/Z7NoV2a',
	wsp: 'wsp.gif',  //'https://gph.is/2NvEjcD',
	boba: 'boba.gif', //'https://gph.is/2Ri14mr'
}



export default function About(props){

	const[image, setImage] = useState(gif['profile']);

	const toggleHover = (event) =>{
		let aboveElem = document.getElementById(event.target.id); 
		setImage(gifs[gif[aboveElem.id]]);
	}

	const restoreDefault =() =>{
		setImage(gif['profile']);
	}

	
	return(

		<Fragment >
		<img  src ={image} alt='profile' height='40%' width='25%' style={{padding:'15px'}}></img>

		<section style={{width:'40%', height:'70%', padding:'10px',  textAlign: 'justify',
  textJustify: 'inter-word'}}>

		<article>
		<h1> Hi, I'm Howard!</h1>
		<p>  I am a 
		<b id="cat" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}> software developer </b> 
		and a <b id="steph" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}>San Francisco Bay Area-native</b>. 
		After pursuing my undergraduate degree at <b id="wsp" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}>
		New York University</b>, studying web development and politics, 
		I went on to study at the Emory University School of Law. 
		My passion lies computer science through the lens of law and politics. 
		In my spare time, I enjoy hiking and doing yoga, and my drink of choice is 
		<b id="boba" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}> a classic milk tea with pearls, no ice and 30% sugar</b>.

	</p>
	<p><a href= {resume} >Check out my resume!</a></p>
	

	<h1> Skills and tools:</h1>
	<p> I enjoy learning and experimenting with new tools and technology. They include:</p>
		
		<img  src ={icon} alt='icon' width='90%'></img>
		</article>

	</section>
	</Fragment>

	)

}



