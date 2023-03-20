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
                        <div className="communityLinks" key={`community ${communityInd}`}>
                            <div className="communityNameAndImage">
                                <h3>{name}</h3>
                                <img className="communityImage" src={require(`../../assets/images/${name.toLowerCase()}.png`)} alt={name} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CommunityLinks;