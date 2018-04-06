import React from 'react';

const person = (props) =>{
	return	(
	<div>
	<p> My name is {props.name} This is an other lecture and I am {props.age} year old</p>
	<p> {props.children}</p>
	</div>
	)
};
export default person;