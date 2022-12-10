import CProgressBar from "./CProgressBar"

export default function Skills(props) {

    return(
        <div id="skills" className={props.darkMode ? "skills-dark": "skills"}>
            <h3>Skills</h3>
            <div className={props.darkMode ? "skills--grid-dark": "skills--grid"}>

                <div className="skills--grid--item">
                {/* Java */}
                <CProgressBar 
                    startValue={0} 
                    endValue={95} 
                    speed={20} 
                    text="Java" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/java/java1.png"
                    imgSrc2="../images/java/java2.gif"
                    imgSrc3="../images/java/java3.png"
                    imgSrc4="../images/java/java4.png"/>
                {/* Python */}
                <CProgressBar 
                    startValue={0} 
                    endValue={93} 
                    speed={20} 
                    text="Python" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/python/python1.png"
                    imgSrc2="../images/python/python3.png"
                    imgSrc3="../images/python/python2.png"
                    imgSrc4="../images/python/python3.png"/>
                </div>

                <div className="skills--grid--item">
                {/* JS */}
                <CProgressBar 
                    startValue={0} 
                    endValue={85}
                    speed={20}
                    text="JavaScript" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/javascript/javascript1.png"
                    imgSrc2="../images/javascript/javascript3.png"
                    imgSrc3="../images/javascript/javascript2.png"
                    imgSrc4="../images/javascript/javascript3.png"
                    />
                {/* HTML */}
                <CProgressBar 
                    startValue={0} 
                    endValue={85} 
                    speed={20} 
                    text="HTML" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/html/html1.png"
                    imgSrc2="../images/html/html3.png"
                    imgSrc3="../images/html/html2.png"
                    imgSrc4="../images/html/html3.png"
                    />                    
                </div>

                <div className="skills--grid--item">
                {/* CSS */}
                <CProgressBar 
                    startValue={0} 
                    endValue={85} 
                    speed={20} 
                    text="CSS" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/css/css1.png"
                    imgSrc2="../images/css/css3.png"
                    imgSrc3="../images/css/css2.png"
                    imgSrc4="../images/css/css3.png"
                    />
                {/* React */}
                <CProgressBar 
                    startValue={0} 
                    endValue={85} 
                    speed={20} 
                    text="React.js" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/react/react1.png"
                    imgSrc2="../images/react/react3.png"
                    imgSrc3="../images/react/react2.png"
                    imgSrc4="../images/react/react3.png"
                    />
                </div>

                <div className="skills--grid--item">
                {/* Selenium */}
                <CProgressBar 
                    startValue={0} 
                    endValue={75} 
                    speed={20} 
                    text="Selenium" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/selenium/sele1.png"
                    imgSrc2="../images/selenium/sele3.png"
                    imgSrc3="../images/selenium/sele2.png"
                    imgSrc4="../images/selenium/sele3.png"
                    />
                {/* Pandas */}
                <CProgressBar 
                    startValue={0} 
                    endValue={75} 
                    speed={20} 
                    text="Pandas" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/pandas/pandas1.png"
                    imgSrc2="../images/pandas/pandas3.png"
                    imgSrc3="../images/pandas/pandas2.png"
                    imgSrc4="../images/pandas/pandas3.png"
                    />
                </div>

                <div className="skills--grid--item">
                {/* Numpy */}
                <CProgressBar 
                    startValue={0} 
                    endValue={65} 
                    speed={20} 
                    text="NumPy" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/numpy/numpy1.png"
                    imgSrc2="../images/numpy/numpy3.png"
                    imgSrc3="../images/numpy/numpy2.png"
                    imgSrc4="../images/numpy/numpy3.png"
                    />
                {/* Mysql */}
                <CProgressBar 
                    startValue={0} 
                    endValue={65} 
                    speed={20} 
                    text="MySQL" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/mysql/mysql1.png"
                    imgSrc2="../images/mysql/mysql3.png"
                    imgSrc3="../images/mysql/mysql2.png"
                    imgSrc4="../images/mysql/mysql3.png"
                    />             
                </div>

                <div className="skills--grid--item">
                {/* matplotlib */}
                <CProgressBar 
                    startValue={0} 
                    endValue={70} 
                    speed={20} 
                    text="Matplotlib" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/git/git1.png"
                    imgSrc2="../images/git/git3.png"
                    imgSrc3="../images/git/git2.png"
                    imgSrc4="../images/git/git3.png"
                    />
                {/* git */}
                <CProgressBar 
                    startValue={0} 
                    endValue={80} 
                    speed={20} 
                    text="Git" 
                    darkMode={props.darkMode} 
                    imgSrc1="../images/github/github1.png"
                    imgSrc2="../images/github/github3.png"
                    imgSrc3="../images/github/github2.png"
                    imgSrc4="../images/github/github3.png"
                    />
                </div>
            </div>
        </div>
    )
}