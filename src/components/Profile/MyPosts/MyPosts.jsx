import React from 'react';
import myPosts from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={myPosts.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea></textarea>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={myPosts.posts}>
				<Post message="First post" quantity="10" />
				<Post message="Second post" quantity="20" />
			</div>
		</div>
	);
}

export default MyPosts