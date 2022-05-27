import { useState, useEffect } from 'react';
import { getChopperById } from "../services/giphyApi";

function NotFound() {

    const [gif, setGif] = useState(null);

    useEffect(() => {
        getChopperById('j1AeED5w0xmVy')
        .then((data) => {
            setGif(data[0].embed_url)
        });
    }, [])


    return(<>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">404 - Not found</h1>
            </div>
            </div>
        </div>
        <div className="container mx-auto max-w-md text-center py-16">
            <iframe title="main-chopper" src={gif ? `${gif}/` : "blank"} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com" className="text-metal" target="_blank" rel="noopener noreferrer">via GIPHY</a></p>
        </div>
        <div className="text-xl max-w-md mx-auto text-center pb-32">
            <p className="font-bold text-metal">We couldn't find that page, maybe try another?</p>
        </div>
        </>)
}

export default NotFound;