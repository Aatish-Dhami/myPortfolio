import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Home(props) {
    const srcImg = `../images/${props.darkMode ? "ad_checks_b.png" : "ad_checks_w.JPEG"}`

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
                            // fontFamily: 'Red Hat Display',
                            // color: '#3F3D56',
                            fontWeight: 500,
                            fontSize: '1.5em',
                        }}
                        startDelay={4000}
                        multiText={[
                            'Software Developer',
                            'Full Stack Developer',
                            'Web Developer',
                            'Self Learner',
                        ]}
                        multiTextLoop="true"
                        // hideCursorAfterText = "true"
                    />
                </p>
            </div>

            <img src={srcImg} className='main--image'/>
        </main>
    )
}