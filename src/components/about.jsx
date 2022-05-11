import React, { Fragment,  useState } from 'react';
import prof from '../assets/images/prof.png'
import Contact from './contact';

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

		<section style={{width:'40%', height:'70%', padding:'10px',  textAlign: 'justify', textJustify: 'inter-word'}}>

		<article>
		<h1> Hi, I'm Howard!</h1>
		<p>  I am a 
		<b id="cat" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}> software developer </b> 
		and a <b id="steph" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}>San Francisco Bay Area-native</b>. 
		After pursuing my undergraduate degree at <b id="wsp" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}>
		New York University</b>, studying web development and politics,
		I went on to study at the Emory University School of Law. In addition, I have a computer programming certificate from UCSC Santa Clara Extension.
		My passion lies computer science through the lens of law and politics. 
		In my spare time, I enjoy hiking and doing yoga, and my drink of choice is 
		<b id="boba" onMouseEnter={toggleHover} onMouseLeave={restoreDefault}> a classic milk tea with pearls, no ice and 30% sugar</b>.

	</p>

	<h1> Learn more about me:</h1>
		<p> I enjoy meeting new people! If you find yourself in the SF Bay Area and want to meet up or you just want to chat virtually, send me an
		email or follow me at the bellow links!</p>
		<Contact/>
	</article>

	</section>
	</Fragment>

	)

}



