import React from 'react';
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import email from '../assets/images/email.jpeg'
import medium from '../assets/images/medium.png'

const labelStyle ={

	body:{
		width:'40%', 
		height:'70%', 
		padding:'10px', 
		textAlign:'center'
	},

  	list:{
    	display:'flex',
    	flexDirection:'row',
    	flexWrap:'nowrap',
    },
    
    li:{
    	padding:'10px',
    	listStyle: 'none',
    	display: "block",
  		marginLeft: "auto",
  		marginRight: "auto",
  		width: "50%",

    }
  }

const contacts = [

	{url: 'https://github.com/howardlee93',
	img:github,	
	text:'github',
	caption: 'Github'
	},

	{url: 'https://www.linkedin.com/in/leehoward93',
	img: linkedin,	
	text:'linkedin',
	caption: 'Linkedlin'
	},
	{url: "mailto:howardlee93@gmail.com?Subject=Hello%20again" ,
	img: email,	
	text:'email',
	caption: 'Email'
	},
	{url:'https://howardlee93.medium.com/',
	img: medium,
	text:'medium',
	caption:'Medium'
	}

	]


export default function Contact(props){

	const contactList = contacts.map((contact, key)=>(
		<li key={key} style={labelStyle.li}>
		<a href = {contact.url}> <img src={contact.img} alt = {contact.key}/> 
		<figcaption> {contact.caption}</figcaption>
		</a>
		</li>
		));

	return(

		<div style={labelStyle.body}>
			<ul style={labelStyle.list}>
			{contactList}
			</ul>
		</div>

		)
	
}