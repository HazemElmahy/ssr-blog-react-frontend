import React from 'react';

const ApprovalCard = (props) =>{
return(
	 <div className="ui card" >
	 <div className="content">{props.children}<div/>
    <div className="extra content">
      <div className="ui two buttons">
        <button className="ui button light-red lighten-1 btn approval">Approve</button>
        <button className="ui black button approval">Decline</button>
    </div>
     </div>
     </div>
     </div>
)};

export default ApprovalCard