import React from 'react'


const Post = props =>{
  return(

<div className="ui post card ">
  <div className="content">
          <div className="right floated meta">14h</div>
          <img className="ui avatar image" src={props.avatar}/> Elliot
  </div>
        <div className="image">
          <img src={props.image} />
        </div>
        <div className="content">
          <div className="header">{props.header}</div>
          <div className="meta"><span className="date">Joined in 2015</span></div>
          <div className="description">Matthew is a musician living in Nashville.</div>
        </div>
        <div className="extra content">
          <a>
            
            {props.children}
          </a>
        </div>
</div>
)};

export default Post;