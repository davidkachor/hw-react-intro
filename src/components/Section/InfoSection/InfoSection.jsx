import React from 'react'
import s from './InfoSection.module.css'

function InfoSection(props) {
	return (
		<div className={s.section}>
			<h3>{props.title}</h3>
			{props.children}
		</div>
	)
}

export default InfoSection
