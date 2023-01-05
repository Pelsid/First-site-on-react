import React from 'react';
import { NavLink } from 'react-router-dom';
import StyleDialogs from './dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id

	return (
		<div className={StyleDialogs.dialog}>
			<NavLink to={path} className = { navData => navData.isActive ? StyleDialogs.active : StyleDialogs.dialog }>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={StyleDialogs.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={StyleDialogs.dialogs}>
			<div className={StyleDialogs.dialogsItems}>
				<DialogItem name="Dima" id="1" />
				<DialogItem name="Andrei" id="2" />
				<DialogItem name="Sveta" id="3" />
				<DialogItem name="Viktor" id="4" />
			</div>
			<div className={StyleDialogs.messages}>
				<Message message="Hello" />
				<Message message="How are you?" />
				<Message message="Hi" />
				<Message message="Yo" />
			</div>
		</div>
	)
}

export default Dialogs;