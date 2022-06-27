import React from 'react'
import Article from './Article/Article'
import s from './Main.module.css'
import PetProjectArticle from './PetProjectArticle/PetProjectArticle'

function Main(props) {
	return (
		<main className={s.main}>
			<Article title={'SUMMARY'}>
				<p>
					I am a focused and quick-learning frontend developer with good
					knowledge of English. I'm interested in developing frontend
					applications. I have practical experience working on pet projects. I
					don`t have any commercial experience but I am eager to learn and fast
					on the uptake. Also I have well developed team work skills since I
					study psychology.
				</p>
			</Article>
			<Article title={'SKILLS'}>
				<p>
					JavaScript, React.js, TypeScript, HTML, CSS, SCSS, Redux, Webpack,
					JQuery, semantic markup, responsive web design, basic OOP knowledge,
					frontend optimization, GIT, ajax, design patterns.
				</p>
			</Article>
			<Article title={'NON-COMMERCIAL PROJECTS'}>
				<PetProjectArticle
					name={'Bank Loan Calculator'}
					href={'https://profound-smakager-e9fa27.netlify.app/'}
				>
					Simple loan calculator, created by using React.js, Redux, responsive
					design and SCSS technologies.
				</PetProjectArticle>
				<PetProjectArticle
					name={'Rock Paper Scissors'}
					href={'https://thriving-pastelito-08e336.netlify.app/'}
				>
					Digitalized hand game, usually played between two people, using React
					framework and Redux, responsive design technologies and deployment
				</PetProjectArticle>
				<PetProjectArticle
					name={'Date Picker'}
					href={'https://stellar-cuchufli-fa0cdf.netlify.app/'}
				>
					Simple datepicker for input with theme switcher, using React framework
					and Redux.
				</PetProjectArticle>
				<p className={s.ending}>And many others...</p>
			</Article>
		</main>
	)
}

export default Main
