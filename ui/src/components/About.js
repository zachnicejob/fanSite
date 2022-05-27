
function About() {

    return(<>
    <div className="hero min-h-[50%] py-16">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">About Us</h1>
            </div>
        </div>
    </div>
    <div className="max-w-md mx-auto">
        <p className="py-4 text-metal">We, the creators of this site, made this project as an exercise in building a web application. We also happen to really like Tony Tony Chopper from One piece, so there's that.</p>
        <p className="py-4 text-metal">You can find a bit more about us below!</p>
    </div>
    <div className="max-w-large flex flex-row justify-center p-32 gap-x-16">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={require("../images/ege-kula.jpg")} alt="Ege Kula" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Ege Kula </h2>
                <p>A naturally cool person, and definitely the initiator for this project. Ege shamelessly loves One Piece, Tony Tony Chopper, and taking long strolls on the beach</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Weeb</div> 
                <div className="badge badge-outline">Cool person</div>
                <div className="badge badge-outline">Hackerman</div>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={require("../images/jared-guzman.jpg")} alt="Jared Guzman" /></figure>
            <div className="card-body">
                <h2 className="card-title">Jared Guzman</h2>
                <p>Aspiring professional dork, Jared was excited to build out the look of this webapp. He believes that those reading this shouldn't take too close of a look at the content, or else they might find secrets.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Artist</div> 
                <div className="badge badge-outline">Dork</div>
                <div className="badge badge-outline">Making things look pretty</div>
                </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={require("../images/zach-nicely.jpg")} alt="Jared Guzman" /></figure>
            <div className="card-body">
                <h2 className="card-title">Zach Nicely</h2>
                <p>Multi-instrumentalist hailing from smack-dab in the middle of The Big Apple, Zach is wide known for his soothing online streaming voice and for being wicked good at math. We should all be a bit more like Zach.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Musician</div> 
                <div className="badge badge-outline">Mathematician</div>
                <div className="badge badge-outline">Elden Ring</div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default About;