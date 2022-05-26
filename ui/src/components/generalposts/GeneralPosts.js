import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { findByType } from '../../services/postApi';

function GeneralPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        findByType(2)
            .then(data => {
                setPosts(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return(<>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">General posts</h1>
            </div>
            </div>
        </div>
        <div className="container flex flex-col max-w-xl mx-auto mb-32">
        {posts.length === 0 ? 
        <div className="text-xl max-w-md mx-auto text-center">
            <p className="font-bold text-metal">There aren't any posts to display at the moment! Sorry about that! </p>
        </div>
        : posts.map(post => {
                return(
                    <Link to={`/generalPosts/${post.id}`}className="bg-rose-900 container p-4 m-4 rounded-md outline outline-offset-2 outline-1 outline-rose-800 hover:shadow-xl hover:bg-rose-800 transition duration-150" key={`post-${post.id}`}>
                        <h2 className="text-2xl font-bold text-silver">{post.title}</h2>
                        <p className="text-silver">{post.content}</p>
                    </Link>)
            })}
        </div>
        </>)
}

export default GeneralPosts;