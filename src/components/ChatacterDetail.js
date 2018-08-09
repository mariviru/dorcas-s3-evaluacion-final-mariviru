import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetail.css';

class CharacterDetail extends Component {
	render() { 
		const {characterList} = this.props;
		console.log('que hay en detail', characterList)
		const detail = characterList[this.props.match.params.id]
		console.log('detail', detail)
				return (
					<section className='Character__detail.main' >
					<Link to='/'>
						<button>Volver</button>
					</Link>
					<div
						className='Character__detail'>
						<img 
							className='Character__detail-image'
							src={detail.image} alt={detail.name}/>
						<div
							className='Character__detail-data'>
							<h1 className='Character__detail-name' >
								{detail.name}
							</h1>
							<p className='Character__detail-house' >
								Casa: {detail.house}
							</p>
							<p className='Character__detail-birth' >
								Nacimiento: {detail.yearOfBirth}
							</p>
							<p className='Character__detail-patronus' >
								Patronus: {detail.patronus}
							</p>
							<p className='Character__detail-alive' >
								Estado: {detail.alive}
							</p>
						</div>
					</div>
					</section>
				)
			
	}
}
 
export default CharacterDetail;