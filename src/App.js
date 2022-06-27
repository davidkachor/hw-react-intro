import s from './App.module.css'

import Header from './components/Header/Header'
import Main from "./components/Main/Main,";
import Section from "./components/Section/Section";


function App() {
    return (
        <>
            <Header/>
            <div className={s.wrapper}>
                <Section/>
                <Main/>
            </div>
        </>
    )
}

export default App;
