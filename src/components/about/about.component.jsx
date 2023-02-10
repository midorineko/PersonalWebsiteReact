import './about.styles.scss'

const About = () => {
    return (
        <div className='aboutContainer'>
            <div>
                <h1 className='aboutTitle'>About Me</h1>
            </div>
            <div className='aboutParagraphContainer'>
                <p>
                    Over the years, my views on programming have remained the same. 
                    I still believe that programming is a beautiful overlap of analytics and art, 
                    yet I have grown as a person. I discovered my passion for mentorship, finding 
                    intrinsic rewards in helping other people reach their fullest potential. I strive 
                    to lead by example in both programming and my personal life. I actively contribute 
                    to global learning communities by creating open-source 3D models for home printing, 
                    moderating forums, and providing teachable content. My thirst for knowledge is 
                    stronger than ever before. Currently, I am seeking to expand into a new field that 
                    aligns with my values and supports team-wide development.
                </p>
            </div>
        </div>
    )
}
export default About;