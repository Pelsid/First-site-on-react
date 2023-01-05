import React from 'react';
//для манипуляций с именами классов обязательно использовать в название файла css слово module.
import profileInfo from './profileInfo.module.css';


/*			
			Здесь мы использумем имя переменной из 3 строчки и подставляем имя класса из 
			файла profile.module.css что бы получить стили и у элемента в который мы вставили 
			forContent.content было своё уникальное имя класса. Вложенные стили такие как content img так же
			будут присваивать ситил элементам
*/
const ProfileInfo = () => {
	return (
		<div className={profileInfo.profile}>
			<img src="https://t4.ftcdn.net/jpg/04/74/44/85/360_F_474448512_w2NP8jcwfKKX9rIballVuxSqQK4rNRbE.jpg" />
		</div>
	);
}

export default ProfileInfo