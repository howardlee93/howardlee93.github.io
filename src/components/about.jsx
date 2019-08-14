import React, { Fragment,  useState, useRef } from 'react';
import resume from "../assets/resume.pdf"
import prof from '../assets/images/prof.png'


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context("../assets/images/icon/", false, /\.(png|svg)/));


const icons = [

	"js.png",
	
	"rails.png",
	
	"post.png",
	
	"java.png",
	
	"python.png",

	"redux.png",
	
	"css3.png",

	"html5.png",

	"logo.svg",

	"ruby.png",

	"swift.svg",

	"aws.png"
	 ];


const gif= {
	profile: prof,
	cat:'http://gph.is/1oXJHnO',
	steph: 'https://gph.is/g/Z7NoV2a',
	wsp:'https://gph.is/2NvEjcD',
	boba:'https://gph.is/2Ri14mr'
}



export default function About(props){

	const[image, toggleImage] = useState(gif['profile']);
	const [hover, toggleHover] = useState(false);


	const iconDisplay = icons.map((icon, key)=>(
				 	<img src={images[icon]} key={key} alt="icon" />
				 	));

	return(

		<Fragment >

		<img  src ={image} alt='profile' height='40%' width='25%' style={{padding:'15px'}}></img>

		<section style={{width:'40%', height:'70%', padding:'10px',  textAlign: 'justify',
  textJustify: 'inter-word'}}>

		<article>
		<h1> Hi, I'm Howard!</h1>
		<p>  I am a 
		software developer
		and a 
		San Francisco Bay Area-native. 
		After pursuing my undergraduate degree at 
		New York University.
		, studying web development and politics, 
		I went on to study at the Emory University School of Law. 
		My passion lies computer science through the lens of law and politics. 
		In my spare time, I enjoy hiking and doing yoga, and my drink of choice is 
		a classic milk tea with pearls, no ice and 30% sugar.

	</p>
	<p><a href= {resume} >Check out my resume!</a></p>
	

	<h1> Skills and tools:</h1>
	<p> I enjoy learning and experimenting with new tools and technology, including:</p>
		
	{iconDisplay}
		</article>

	</section>
	</Fragment>

	)

}



