// post_id int primary key auto_increment,
// type_id int not null,
// title varchar(50) not null,
// date_posted date not null,
// text_body varchar(10000),
// image_link varchar(200)

// /post/typeId
// /post/2
// /2
const url = 'http://localhost:8080/api';


export async function findAllPosts() {
    const response = await fetch(`${url}/post`);

    if(response.status === 200) {
        return await response.json();
    } else {
        return Promise.reject(['Unable to fetch posts']);
    }
}

export async function findByType(typeId) {
    const response = await fetch(`${url}/${typeId}`);

    if(response.status === 200 ) {
        return await response.json();
    } else {
        return Promise.reject(['Unable to fetch posts by typeId']);
    }
}