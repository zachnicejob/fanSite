import { useEffect, useState } from "react";
import { getChopperById } from "../../services/giphyApi";

function GeneralPost() {
    
    const [gif, setGif] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getChopperById('8gGtbSUkCCJvq')
        .then((data) => {setGif(data[0].embed_url)});
    }, [])

    return(
        <>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">A single post</h1>
                <p className="text-metal">ID: {id}</p>
            </div>
            </div>
        </div>
        <div className="max-w-md mx-auto">
            <p className="py-4 text-metal text-center"><i>"This is an example post - maybe we can whip up a little opinion writing on chopper and put it here?"</i></p>
        </div>
        <div className="container mx-auto max-w-md text-center py-16">
            <iframe title="main-chopper" src={gif ? `${gif}/` : "blank"} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com" className="text-metal" target="_blank" rel="noopener noreferrer">via GIPHY</a></p>
        </div>
        <div className="container mx-auto max-w-lg py-8 text-justify">
        <p className="py-4 text-metal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam non urna viverra vestibulum eu a ligula. Quisque nec interdum eros. Suspendisse consequat enim et risus pellentesque condimentum. Nulla massa nunc, porttitor sit amet neque et, accumsan porttitor tellus. Pellentesque tincidunt lacus lorem, a gravida nulla faucibus eu. Fusce vulputate eget dolor eget tempus. Aenean sollicitudin dui id risus cursus posuere. Aenean dapibus, metus at pellentesque malesuada, erat nisi elementum massa, at tempus tellus augue in massa. Proin vitae iaculis purus. Duis ultricies augue quis posuere tempor. Nulla pretium augue turpis, ac porttitor nisl pharetra sit amet. Donec venenatis massa dui, vel finibus massa tempor quis.
        </p>
        <p className="py-4 text-metal">
            Praesent vulputate vitae sem nec convallis. Vivamus aliquet quam nisl, id varius erat rutrum sed. Mauris ultricies malesuada sem a cursus. Cras ac vehicula nunc, sit amet feugiat dolor. Ut dictum vel sem pellentesque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum, sapien venenatis vehicula sollicitudin, odio eros gravida felis, non efficitur dui felis in dui. Proin vitae mollis ante, vel lobortis sem. Praesent commodo, nisi eget bibendum commodo, sapien massa ultricies leo, eu auctor libero lacus non ligula. Curabitur pharetra imperdiet ipsum, non semper diam facilisis quis. Praesent laoreet ligula enim, in tristique orci facilisis condimentum. In non auctor massa. Aenean vulputate enim id nibh eleifend, eu bibendum libero dignissim.
        </p>
        </div>
        </>
    )
}

export default GeneralPost;