import React,{Component} from 'react';

// class ManageApp extends Component{
//   state= {showForm: false}

const Signup = () =>{
    return(
           <form className='cont' style={{width: "18rem" }}>
          <div className=' constainer asd'>
        <div className="form-group ">
          <label forname="exampleInputEmail1">Email address:</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          
        </div>
        <div className="form-group ">
          <label forname="exampleInputUsername1">Username:</label>
          <input type="email" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Enter email" />
          
        </div>
        <div className="form-group">
          <label  forname="exampleInputPassword1">Password:</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
         
        </div>
        <div className='center'>
        <button type="submit" className="btn black center">Sign up</button>
        <br/>
        <a className="blue-text" href="#">Already have an account ?</a>
        </div>
        </div>
  </form>
    )
  }

export default Signup
