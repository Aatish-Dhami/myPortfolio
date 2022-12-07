import React from "react";
import { useInView } from 'react-intersection-observer'

export default function CProgressBar(props) {
    const { ref: myRef, inView: isVisible } = useInView()
    // props: startValue, endValue, speed, text

    const [counter, setCounter] = React.useState(props.startValue);
    const [isRunning, setIsRunning] = React.useState(false);
    const myInterval = React.useRef();
    const dark = props.darkMode ? "white": "black"

    const progressValueStyles = {
        // textContent: props.text,
        color: dark
    }

    const circularProgressStyles = {
        background: `conic-gradient(aquamarine ${counter * 3.6}deg, #ededed 0deg)`
    }

    React.useEffect(() => {
      return () => clearInterval(myInterval.current);
    }, []);
  
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
    }, [isRunning]);

    React.useEffect(() => {
        if(counter === props.endValue) {
            clearInterval(myInterval.current)
        }
    })

    React.useEffect(() => {
        if(isVisible){
            setIsRunning(true)
        }else{
            setIsRunning(false)
        }
    }, [isVisible])


    return (
        <div ref={myRef} className="circular-progress" style={circularProgressStyles}>
            <span style={progressValueStyles} className="progress-value">{props.text}</span>
        </div>
    )
}