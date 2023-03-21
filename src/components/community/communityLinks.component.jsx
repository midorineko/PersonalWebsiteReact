const openLink = (link) => {
    console.log(link)
    window.open(link,'_blank');
}

const CommunityLinks = ({communities}) => {
    return (
        <>
            {
                communities.map((community, communityInd) => {
                    let image = community.location;
                    let name = community.name;
                    let link = community.link;
                    return(
                        <div className="communityLinks" key={`community ${communityInd}`}>
                            <div className="communityNameAndImage">
                                <h3 className="centerText">{name}</h3>
                                <img className="communityImage" onClick={()=>openLink(link)} src={require(`../../assets/images/${name.toLowerCase()}.png`)} alt={name} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CommunityLinks;