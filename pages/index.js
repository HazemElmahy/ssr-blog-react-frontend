import Head from 'next/head'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div className="container">
    	<Navbar />
    	<span><h1 className='red-text center'>WELCOME</h1></span>
    	
     </div>
  )
}
