import React from 'react';
import StylePost from './posts.module.css';

/*
По умолчанию в React в качестве параметров в функции модуля 
мы прописваем props. Так же по умолчанию в параметры функции всегда
что то передаётся, даже если при использовании тега/функции мы 
не передаём никаких значений
*/

const Post = (props) => {
	return (
		<div className={StylePost.item}>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDQs6nN1ci5A7ck9cWrvdxf0yyx0vJ4jIdgzAVItWVA&s"/>
			{/*
			В props.massage мы вставляем значения которые получили
			при вызове тега <Post />
			*/}
			<p>{props.message}</p>
			<div>
				<span>like {props.quantity}</span>
			</div>
		</div>

	);
}

export default Post