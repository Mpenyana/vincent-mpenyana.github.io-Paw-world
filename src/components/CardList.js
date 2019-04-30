import React from 'react';
import Card from './Card';

const CardList = (props) =>{
	return(
		<div>
			{
		 		props.cats.map(cat => {
					return(
						<div className='dib ma2'>
							<Card
							key={cat.id}
							name={cat.name} 
							email={cat.email} 
							id={cat.id}
							/>
						</div>
					)
				})
			}
		</div>
	)
}

export default CardList;