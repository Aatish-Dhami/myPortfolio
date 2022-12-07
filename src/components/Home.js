import TypeWriterEffect from 'react-typewriter-effect';

export default function Home(props) {

    return (
        <main id='#home' className={props.darkMode ? "dark": ""}>
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

        </main>
    )
}