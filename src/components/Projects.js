import Cards from "./Cards"

export default function Projects(props) {
    return(
        <div id="projects" className={props.darkMode ? "projects-dark" : "projects"}>
            <h3>Projects</h3>
            <div className={props.darkMode ? "projects--grid-dark": "projects--grid"}>
                <div className="projects--grid--item">
                <Cards 
                    darkMode={props.darkMode} 
                    src="../images/notes.png"
                    url="https://notes-ad.netlify.app/"
                    title="Notes App"
                    desc="Built a notes app using react. Click to write some quick notes :)"
                />
                </div>
                <div className="projects--grid--item">
                <Cards 
                    darkMode={props.darkMode} 
                    src="../images/search.png"
                    url="https://github.com/Aatish-Dhami/MySearchEngine"
                    title="Search Engine"
                    desc="Built a search engine using positional inverted Index with numerous 
                    features such as Boolean Queries, Special Queries, Variant tf-idf formulas 
                    (Default, tf-idf, Okapi BM25, Wacky), DSP Index, Soundex Algorithm, On-Disk Data, 
                    and many more."
                />
                </div>
                <div className="projects--grid--item">
                <Cards 
                    darkMode={props.darkMode} 
                    src="../images/tenzies.png"
                    url="https://tenzies-ad.netlify.app/"
                    title="Tenzies"
                    desc="Built a Tenzies game using React.Js
                    Click to Play :)"
                />
                </div>
            </div>

        </div>
    )
}