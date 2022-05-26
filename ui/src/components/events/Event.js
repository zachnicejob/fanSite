import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChopperById } from "../../services/giphyApi";
import { findByPostId } from "../../services/postApi";

function Event() {

    const [gif, setGif] = useState(null);
    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        getChopperById('8gGtbSUkCCJvq')
        .then((data) => {
            setGif(data[0].embed_url)
        });

        fetchPost(id);
    }, [])

    function fetchPost(fetchId) {
        findByPostId(fetchId)
            .then(data => {
                setPost(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

return(
    <>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold text-metal">{post.title}</h1>
                <p className="text-metal">ID: {id}</p>
            </div>
            </div>
        </div>
        <div className="max-w-md mx-auto">
            <p className="py-4 text-metal text-center"><i>SPOILS: EPISODES 156, 299, 505</i></p>
        </div>
        <div className="container mx-auto max-w-md text-center py-16">
            <iframe title="main-chopper" src={gif ? `${gif}/` : `${id}`} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com" className="text-metal" target="_blank" rel="noopener noreferrer">via GIPHY</a></p>
        </div>
        <div className="container mx-auto max-w-lg py-8 text-justify">
        <p className="py-4 text-metal">
            {post.textBody}
        </p>
        </div>
        <div className="container mx-auto max-w-md text-center py-16">
            <img src={post.imageLink} />
        </div>
        </>
)
}

export default Event;