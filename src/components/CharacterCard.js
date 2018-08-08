import React, { Component } from 'react';
import './CharacterCard.css';

class CharacterCard extends Component {
	render() { 
		const characterList = this.props.characterList;
		return ( 
			characterList.map(function (character, index) {
				character.id = index
				console.log('character', character)
				return (
					<li
						key={index}
						className='Character'>Card
						<h1 className='Character__name' >
							{character.name}
						</h1>
						<img
							src={character.image}
							alt={character.name}
							className='Character__img' />
						<span
							className='Character__house' >
							{character.house}
						</span>
					</li>
				)
			}
			)
		 );
	}
}
 
export default CharacterCard;