import React from 'react';

const ApprovalCard = (props) =>{
	console.log(props.chilred)
return(
	 <div className="ui card" >
	 <div className="content">{props.children}<div/>
    <div className="extra content">
      <div className="ui two buttons">
        <button className="ui basic red lighten-1 btn approval">Approve</button>
        <button className="ui basic black btn approval">Decline</button>
    </div>
     </div>
     </div>
     </div>
)};

export default ApprovalCard