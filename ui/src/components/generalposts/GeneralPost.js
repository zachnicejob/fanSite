import { useEffect, useState } from "react";
import { getRandomChopper } from "../../services/giphyApi";

function GeneralPost() {
    const [gif, setGif] = useState(null);

    useEffect(() => {
        getRandomChopper()
        .then((data) => {setGif(data[0].embed_url)});
    }, [])

    return(
        <>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">Welcome</h1>
            </div>
            </div>
        </div>
        </>
    )
}

export default GeneralPost;