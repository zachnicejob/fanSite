import { useEffect, useState } from "react";
import { getRandomChopper } from "../services/giphyApi";


function Homepage() {

  const [gif, setGif] = useState(null);

  useEffect(() => {
    getRandomChopper()
      .then((data) => {setGif(data[0].embed_url)});
  }, [])
   

  return (
  <>
  <div className="hero min-h-[50%] py-16">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-metal">Welcome</h1>
      </div>
    </div>
  </div>
  <div className="max-w-md mx-auto">
        <p className="py-4 text-metal text-center">To Project Cherry Blossom</p>
        <p className="py-4 text-metal">A noice little fansite dedicated to the One Piece character and doctor of the Straw Hat Pirate Crew: Tony Tony Chopper. It's built on top of a couple of cool technologies.</p>
        <p className="py-4 text-metal">Namely: Java, Spring, MySQL, React, the GIPHY REST api, and our blood, sweat, and tears.</p>
        <p className="py-4 text-metal">Enjoy!</p>
  </div>
  <div className="container mx-auto max-w-md text-center py-16">
    <iframe title="main-chopper" src={gif ? `${gif}/` : "blank"} width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    <p><a href="https://giphy.com/gifs/one-piece-chopper-13Uqp5IGFpmDle" className="text-metal">via GIPHY</a></p>
  </div>
  </>
 )
}

export default Homepage;