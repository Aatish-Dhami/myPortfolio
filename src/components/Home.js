import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Home(props) {
    const srcImg = `../images/${props.darkMode ? "ad_checks_w.png" : "ad_checks_w.png"}`

    return (
        <main className={props.darkMode ? "dark": ""}>
            <div className='main--content'>
                <p>Hello! I'm</p>
                <h1>
                    <TypeWriterEffect 
                        text="Aatish Dhami"
                        hideCursorAfterText = "true"
                    />
                </h1>
                <p>
                    <TypeWriterEffect 
                        textStyle={{
                            fontWeight: 500,
                            fontSize: '1.5em',
                        }}
                        startDelay={3000}
                        multiText={[
                            'Software Developer',
                            'Full Stack Developer',
                            'Web Developer',
                            'Self Learner',
                        ]}
                        multiTextLoop="true"
                    />
                </p>
            </div>

            <img src={srcImg} className='main--image'/>
        </main>
    )
}