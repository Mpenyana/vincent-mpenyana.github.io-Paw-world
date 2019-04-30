import React from 'react';
import './Card.css';

const Card = (props) =>{
	return(
		<div>
			<article className="br2 ba bg-washed-green dark-gray b--black-10 grow mv2 pa3">
				<img src={`https://robohash.org/${props.id}/?set=set4`} alt={`cat`}/>
			<div>
				<h1>{props.name}</h1>
				<p>{props.email}</p>
			</div>
			</article>
		</div>
	)
}

export default Card;