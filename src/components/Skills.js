import CProgressBar from "./CProgressBar"
import { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Skills(props) {
    const myRef = useRef();
    const [myState, setMyState] = useState()

    return(
        <div className={props.darkMode ? "skills-dark": "skills"}>
            <h1>Skills</h1>
            <div className="skills--grid" ref={myRef}>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={95} speed={20} text="Java" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={93} speed={20} text="Python" darkMode={props.darkMode}/>
                </div>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={85} speed={20} text="JavaScript" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={80} speed={20} text="HTML" darkMode={props.darkMode}/>                    
                </div>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={75} speed={20} text="CSS" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={70} speed={20} text="React.js" darkMode={props.darkMode}/>
                </div>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={65} speed={20} text="Selenium" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={60} speed={20} text="Pandas" darkMode={props.darkMode}/>
                </div>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={65} speed={20} text="NumPy" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={65} speed={20} text="MySQL" darkMode={props.darkMode}/>             
                </div>

                <div className="grid--item">
                <CProgressBar startValue={0} endValue={65} speed={20} text="Matplotlib" darkMode={props.darkMode}/>
                <CProgressBar startValue={0} endValue={65} speed={20} text="Git" darkMode={props.darkMode}/>
                </div>

            </div>
        </div>
    )
}