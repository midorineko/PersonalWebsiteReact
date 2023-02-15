import './community.styles.scss'

const Community = () => {
    let communities = [
        {name: 'Thingiverse', link: 'https://www.thingiverse.com/mrcatnaps/designs', description: '3D Models and Designs'},
        {name: 'Youtube', link: 'https://www.youtube.com/watch?v=BQ5fnELhFeI&t', description: 'Builds and Gaming'},
        {name: 'Reddit', link: 'https://www.reddit.com/r/battlestations/', description: 'Lead Mod Battlestations'},
        {name: 'Github', link: 'https://github.com/midorineko?tab=repositories', description: 'Public Code Drops'},
    ]
    return (
        <div className='communityContainer'>
            <div>
                <h1 className='communityTitle'>Community</h1>
            </div>
            <div className='communityParagraphContainer'>
                <p>
                    Here are a few communities I am active in.
                </p>
            </div>
        </div>
    )
}
export default Community;