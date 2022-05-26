import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { findAllPosts } from '../../services/postApi';

const TEMP_POSTS = [
    {
        id: 0,
        title: 'one',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam non urna viverra vestibulum eu a ligula.'
    },
    {
        id: 1,
        title: 'two',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam non urna viverra vestibulum eu a ligula.'
    },
    {
        id: 2,
        title: 'three',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam non urna viverra vestibulum eu a ligula.'
    },
    {
        id: 3,
        title: 'four',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam non urna viverra vestibulum eu a ligula.'
    }
]

function GeneralPosts() {

    const [posts, setPosts] = useState([...TEMP_POSTS]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        findAllPosts()
            .then(data => {
                setPosts(data);
            })
            .catch(err => console.log(err));
    }

    return(<>
        <div className="hero min-h-[50%] py-16">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-metal">A bunch of posts</h1>
            </div>
            </div>
        </div>
        <div className="container flex flex-col max-w-xl mx-auto mb-32">
        {
            posts.map(post => {
                return(
                    <Link to={`/generalPosts/${post.id}`}className="bg-rose-900 container p-4 m-4 rounded-md outline outline-offset-2 outline-1 outline-rose-800 hover:shadow-xl hover:bg-rose-800 transition duration-150" key={`post-${post.id}`}>
                        <h2 className="text-2xl font-bold text-silver">{post.title}</h2>
                        <p className="text-silver">{post.content}</p>
                    </Link>)
            })
        }
        </div>
        </>)
}

export default GeneralPosts;