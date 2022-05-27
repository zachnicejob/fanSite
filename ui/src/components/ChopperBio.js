import { useEffect, useState } from "react";
import { getChopperById } from "../services/giphyApi";

function ChopperBio() {

    const [gif, setGif] = useState(null);

    useEffect(() => {
        getChopperById('2lSNErRCiZPck')
        .then((data) => {setGif(data[0].embed_url)});
    }, [])

    return(<>
    <div className="hero min-h-[50%] py-16">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">Tony Tony Chopper</h1>
            </div>
        </div>
    </div>
    <div className="max-w-md mx-auto">
        <p className="py-4 text-metal text-center"><i>"I'll become a doctor who can cure any disease! Because... because there's no disease in this world that can't be cured!"</i></p>
    </div>
    <div className="container mx-auto max-w-md text-center py-16">
        <iframe title="main-chopper" src={gif ? `${gif}/` : "blank"} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com" className="text-metal" target="_blank" rel="noopener noreferrer">via GIPHY</a></p>
    </div>
    <div className="container mx-auto max-w-lg pb-32 text-justify">
        <p className="py-4 text-metal">
        Dr. Chopper is the 3008 to Rudolph the red-nosed reindeers 2000 and late. Can Rudolph cure any disease on the battlefield with his immense knowledge of medicine? Chopper can. Is Rudolph a pirate sailing the seas in search of a cure-all medicine? Chopper is. Would Rudolph put his life on the line to support the dreams of his captain, crewmates, and friends? Chopper would.
        </p>
    </div>
    </>)
}

export default ChopperBio;