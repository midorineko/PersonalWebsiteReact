import { Outlet } from 'react-router-dom'
import './about.styles.scss'

const About = () => {

    let links = [
        {icon: 'fa-brands fa-linkedin fa-icons', link: 'https://www.linkedin.com/in/sinouye/'},
        {icon: 'fa-regular fa-envelope fa-icons', link: 'mailto: Steven.Inouye91@gmail.com'},
    ]

    return (
        <>
            <div className='aboutContainer' id="aboutContainer">
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
                        <br></br>
                        <br></br>
                        I love programming because it isn't about memorization, but being able to understand 
                        what to look for. With time I have built the knowledge needed to decipher search results 
                        and apply complex theory to my code. I have applied this philosophy to many projects 
                        ranging from personal to corporate applications at scale. It has allowed me to program 
                        in a variety of languages professionally including Ruby on Rails, Java, NodeJS, and 
                        ReactJS. The main program I built at Amazon was TopOff, a staffing application that 
                        provides headcount for more than 800 stores and produces over a billion dollars annually. 
                        My premier side project is a home LED system. I’ve been working on it for my entire 
                        career due to my passion for lighting and the lack of affordable options. Utilizing 
                        AWS Amplify, AppSync, GraphQL, DynamoDB, and NodeJS Lambda I am upgrading the application 
                        to modern standards. Currently, looking for work please reach out if you are in need 
                        of a tenacious engineer who is always thirsty to learn. 
                    </p>
                    <div className="linksContainer">
                        {
                            links.map((element, eleInd) => {
                                    return(<a key={eleInd} className='aboutLinks' href={element.link}><i className={element.icon}></i></a>)
                            })
                        }
    
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default About;