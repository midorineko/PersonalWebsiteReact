import CommunityLinks from './communityLinks.component'
import './community.styles.scss'
import  RedditImg  from '../../assets/images/reddit.png';
import  ThingiverseImg  from '../../assets/images/thingiverse.png';
import  GithubImg  from '../../assets/images/github.png';
import  YoutubeImg  from '../../assets/images/youtube.png';
const Community = () => {
    let communities = [
        {location:'../../assets/images/thingiverse.png', name: 'Thingiverse', link: 'https://www.thingiverse.com/mrcatnaps/designs', description: '3D Models and Designs'},
        {location:'../../assets/images/youtube.png',name: 'Youtube', link: 'https://www.youtube.com/watch?v=BQ5fnELhFeI&t', description: 'Builds and Gaming'},
        {location:'../../assets/images/reddit.png',name: 'Reddit', link: 'https://www.reddit.com/r/battlestations/', description: 'Lead Mod Bthinattlestations'},
        {location:'../../assets/images/github.png',name: 'Github', link: 'https://github.com/midorineko?tab=repositories', description: 'Public Code Drops'},
    ]
    return (
        <div className='communityContainer'>
            <div>
                <h1 className='communityTitle'>Communities</h1>
            </div>
            <div className='communityLinksContainer' style={{width: '40vw', marginLeft: '20px', textAlign: 'center'}}>
                <CommunityLinks communities={communities}></CommunityLinks>
            </div>
        </div>
    )
}
export default Community;