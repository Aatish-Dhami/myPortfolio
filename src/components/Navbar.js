export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>

            <div className="title">

                <h1>AVD.</h1>
            </div>   

            <div className="nav--menu">
                <div className="nav--elements">
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    {/* <a href="#contact">Contact</a> */}
                </div>

                <div className="toggler" >

                    <p className="toggler--light"></p>
                    <div 
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark"></p>
                </div>
            </div>

        </nav>
    )
}