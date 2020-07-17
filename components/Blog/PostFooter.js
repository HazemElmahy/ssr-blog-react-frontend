import React from 'react';

const PostFooter = () => {
	return(
		<div>
		<div className="content">
		    <span className="right floated">
		      <i className="heart outline like icon"></i>
		      17 likes
		    </span>
		    <i className="comment icon"></i>
		    3 comments
		</div>
		<div className="extra content">
		    <div className="ui large transparent left icon input">
		      <i className="heart outline icon"></i>
		      <input type="text" placeholder="Add Comment..."/>
		    </div>
  		</div>
  		</div>
	)
}

export default PostFooter