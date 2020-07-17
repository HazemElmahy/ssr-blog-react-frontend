import React,{Component} from 'react';

// class ManageApp extends Component{
//   state= {showForm: false}

const Signin = () =>{
    return(
           <form className='cont'>
          <div className=' constainer'>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Username:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" />
            </div>
        <div className="form-group">
          <label  htmlFor="exampleInputPassword1">Password:</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className='center'>
        <button type="submit" className="btn black center">Sign in</button>
        <br/>
        <a className="blue-text" href="#">Don't have an account ?</a>
        </div>
        </div>
  </form>
    )
  }

export default Signin