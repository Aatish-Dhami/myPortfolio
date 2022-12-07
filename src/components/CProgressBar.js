import React from "react";

export default function CProgressBar() {
    const [counter, setCounter] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(true);
    const myInterval = React.useRef();

    const progressValueStyles = {
        textContent: counter
    }

    const circularProgressStyles = {
        background: `conic-gradient(#7d2ae8 ${counter * 3.6}deg, #ededed 0deg)`
    }

    React.useEffect(() => {
      return () => clearInterval(myInterval.current);
    }, []);
  
    // useEffect that start/stop interval on flag change
    React.useEffect(() => {
      if (isRunning) {
        myInterval.current = setInterval(
          () => setCounter((counter) => counter + 1),
          20
        );
      } else {
        clearInterval(myInterval.current);
        myInterval.current = null;
      }
    }, [isRunning]);

    React.useEffect(() => {
        if(counter === 90) {
            clearInterval(myInterval.current)
        }
    })

    return (
        <div className="container">
            <div className="circular-progress" style={circularProgressStyles}>
                <span style={progressValueStyles} className="progress-value">{counter}</span>
            </div>

        <span className="text">HTML & CSS</span>
        </div>
    )
}