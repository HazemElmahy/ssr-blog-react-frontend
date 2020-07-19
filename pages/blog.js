import Navbar from '../components/Navbar'
import Comment from '../components/Blog/Comment'
import Post from '../components/Blog/Post'
import ApprovalCard from '../components/Blog/ApprovalCard'
import faker from 'faker'
import PostFooter from '../components/Blog/PostFooter'
import SearchBar from '../components/Blog/SearchBar'

function Blog() {
    return (
		<div>
			
			<div className='container'>
				<Navbar>
					<SearchBar />
				</Navbar>
				<h1>Posts:</h1>
				<div className='container posts' >
					<li className='post new-post center'>
						<button className='ui button large white'>
							<img src="/plus-solid.svg" alt=""/>
						</button>
					</li>
					<li className='post'>
						<Post header="Cat" avatar={faker.image.avatar()} image={faker.image.avatar()}>
							<ApprovalCard />
						</Post>
					
					</li>
					<li className='post'>
					<Post header='Animal' avatar={faker.image.avatar()} image={faker.image.avatar()}>
						<PostFooter />
					</Post>
					</li>
					

				</div>
				<div className='comment-section'>
				<h2>comments:</h2>
				<Comment />
				<Comment />
				<ApprovalCard>
					<Comment /> 
				</ApprovalCard>
				</div>
			</div>
		</div>
    )
}

export default Blog