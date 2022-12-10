import React from "react";
import { useInView } from 'react-intersection-observer'

export default function CProgressBar(props) {
    const { ref: myRef, inView: isVisible } = useInView()
    // props: startValue, endValue, speed, text

    const [counter, setCounter] = React.useState(props.startValue);
    const [isRunning, setIsRunning] = React.useState(false);
    const myInterval = React.useRef();
    const dark = props.darkMode ? "white": "black"

    // const progressValueStyles = {
    //     // textContent: props.text,
    //     paddingRight: 1, 
    //     paddingTop: 1,
    //     display : 'inline-block',
    //     // color: dark
    // }

    const imageStyles = {
        height: "60px"

    }

    const circularProgressStyles = {
        background: `conic-gradient(rgb(197, 156, 252), aqua, rgb(156, 252, 209) 
        ${counter * 3.6}deg, ${props.darkMode? '#000000' : '#ffffff'} 0deg)`
    }

    // React.useEffect(() => {
    //   return () => clearInterval(myInterval.current);
    // }, []);
  
    // useEffect that start/stop interval on flag change
    React.useEffect(() => {
      if (isRunning) {
        myInterval.current = setInterval(
          () => setCounter((counter) => counter + 1),
          props.speed
        );
      } else {
        clearInterval(myInterval.current);
        myInterval.current = null;
      }
    }, [isRunning, props.speed]);

    React.useEffect(() => {
        if(counter === props.endValue) {
            clearInterval(myInterval.current)
        }
    }, )

    React.useEffect(() => {
        if(isVisible){
            setIsRunning(true)
        }
    }, [isVisible])


    return (
        <div 
            ref={myRef} 
            className="circular-progress" 
            style={circularProgressStyles} 
            // onMouseOver={e => {
            //     return (
            //         e.currentTarget.style={background: `conic-gradient(rgb(127, 255, 170) ${counter * 3.6}deg, #ededed 0deg)`}
            //     )
            // }}
            >

            <img 
                    className="skills-image progress-value" 
                    style={imageStyles}
                    src={props.darkMode? props.imgSrc3 : props.imgSrc1}
                    onMouseOver={e => {
                        return (
                            e.currentTarget.src = props.darkMode? props.imgSrc4 : props.imgSrc2,
                            e.currentTarget.style = {height: "100px"}
                        )
                    }}
                    onMouseOut={e => {
                        return(
                            e.currentTarget.src = props.darkMode? props.imgSrc3 : props.imgSrc1,
                            e.currentTarget.style = {height: "50px"}    
                        )
                    }}
                        
                        
                />
            {/* <span  className="progress-value">
                <img 
                    className="skills-image" 
                    style={imageStyles}
                    src={props.darkMode? props.imgSrc3 : props.imgSrc1}
                    onMouseOver={e => {
                        return (
                            e.currentTarget.src = props.darkMode? props.imgSrc4 : props.imgSrc2,
                            e.currentTarget.style = {height: "100px"}
                        )
                    }}
                    onMouseOut={e => {
                        return(
                            e.currentTarget.src = props.darkMode? props.imgSrc3 : props.imgSrc1,
                            e.currentTarget.style = {height: "50px"}    
                        )
                    }}
                        
                        
                />
            </span> */}

            {/* <span style={progressValueStyles} className="progress-value">{props.text}</span> */}
        </div>
    )
}