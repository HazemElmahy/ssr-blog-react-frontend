import React from 'react';
import faker from 'faker'

const Comment = () =>{
	return(
		<div className='ui container comments'>
					<span className='comment comment1'>
						<a href="#" className='avatar'><img  src={faker.image.avatar()} alt="avatar"/></a>
						<div className='content'>
							<a href="#" className='author'>hazem</a>
							<div className='metadata'><span className='date'>Today at 6:00am</span></div>
							<div className='text'>Nice Blog post!</div>
						</div>
					</span>
				</div>
	)
}

export default Comment