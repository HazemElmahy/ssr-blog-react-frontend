// import 'tachyons'
import './index.css'
// import 'materialize-css/dist/css/materialize.min.css'; 

export default function MyApp({ Component, pageProps }){
	return (
		<div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
			
			<Component {...pageProps} />
		</div>
	)
}

