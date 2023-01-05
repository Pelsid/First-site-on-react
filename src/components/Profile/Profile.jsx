import React from 'react';
import MyPosts from './MyPosts/MyPosts';
//для манипуляций с именами классов обязательно использовать в название файла css слово module.
import forContent from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


/*			
			Здесь мы использумем имя переменной из 3 строчки и подставляем имя класса из 
			файла profile.module.css что бы получить стили и у элемента в который мы вставили 
			forContent.content было своё уникальное имя класса. Вложенные стили такие как content img так же
			будут присваивать ситил элементам
*/
const Profile = () => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts/>
		</div>
	);
}

export default Profile