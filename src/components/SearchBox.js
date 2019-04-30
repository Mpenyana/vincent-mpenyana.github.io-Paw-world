import React from 'react';


const SearchBox = (props) => {
	return <input 
	className='pa3 bg-lightest-blue br3 bn' 
	type='search' 
	placeholder='search cats'
	onChange = {props.onSearchChange} 
	/>
}


export default SearchBox;