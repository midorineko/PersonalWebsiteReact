import  RedditImg  from '../../assets/images/reddit.png';
import  ThingiverseImg  from '../../assets/images/thingiverse.png';
import  GithubImg  from '../../assets/images/github.png';
import  YoutubeImg  from '../../assets/images/youtube.png';



const CommunityLinks = ({communities}) => {
    return (
        <>
            {
                communities.map((community, communityInd) => {
                    let image = community.location;
                    let name = community.name
                    return(
                        <div key={communityInd} style={{width: '15vw', marginRight: '2vw'}}>
                            <div >
                                <h3 style={{marginBottom: '0px'}}>{name}</h3>
                                <img style={{width: '100%', borderRadius: '10%'}} src={require(`../../assets/images/${name.toLowerCase()}.png`)} alt={name} />
                                <div>{community.description}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CommunityLinks;