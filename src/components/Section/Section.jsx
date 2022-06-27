import React from 'react'
import img from './photo.jpg'
import s from './Section.module.css'
import InfoSection from './InfoSection/InfoSection'

function Section(props) {
	return (
		<section className={s.section}>
			<img className={s.img} src={img} alt="my face" width={350} />
			<InfoSection title={'EDUCATION'}>
				<p>
					Lviv Polytechnic National University, IPPO, psychology 2019 - present
				</p>
				<p>EPAM University Program 21.11.2021 - 16.02.2022</p>
			</InfoSection>
			<InfoSection title={'CONTACTS'}>
				<p>Lviv, Ukraine</p>
				<p>E-mail: example.david@example.com</p>
				<p>Phone number: +380 93 86 622 96</p>
				<a href="https://t.me/davyd_kaczor">Telegram</a>
				<a href="https://github.com/davidkachor">GitHub</a>
				<a href="https://www.linkedin.com/in/davyd-kachor/">LinkedIn</a>
			</InfoSection>
		</section>
	)
}

export default Section
