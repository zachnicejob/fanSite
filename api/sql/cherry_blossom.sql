drop database if exists cherry_blossom;
create database cherry_blossom;
use cherry_blossom;

create table `type` (
	type_id int primary key auto_increment,
    `type` varchar(20) not null
);

create table post (
    post_id int primary key auto_increment,
    type_id int not null,
	title varchar(50) not null,
    post_date date not null,
    text_body varchar(10000),
    image_link varchar(200),
    constraint fk_post_type_id
		foreign key (type_id)
        references `type`(type_id)
);
-- test data
insert into `type` (`type`) values
	('event'),
    ('general');

insert into post (type_id, title, post_date, text_body, image_link)
	values
    (1, 'First Encounter!', '2022-04-25', 'A young reindeer on a snowcapped mountaintop in the middle of an island under a white blanket, trods up to a red stain in the snow. Our captain Luffy, who had worked his nails to the bone scaling the mountain, was lying exhausted in the snow. He had hoped to find a doctor at the top to tend to his crewmates Nami and Sanji who were sick and injured respectively. Chopper and his teacher Kureha were doctors so they tended to all three of them while Chopper couldnt help but admire Luffy for his willingness to risk his life for his friends.', 'https://i.ytimg.com/vi/WUyxUCx9oxs/maxresdefault.jpg'),
    (1, 'Two Mentors!', '2022-04-25', 'While Kureha tends to Sanji and Nami she explains where Chopper came from. Chopper was a reindeer outcast from his pack because of his blue nose. One day, all by his lonesome, he stumbled upon the human-human devil fruit and turned into a half human half reindeer. Chopper crossed path with a few local humans who confused him with a monster and shot at him, scaring him off and lodging some bullets in his back. Luckily, Chopper stumbled upon Dr. Hiriluk, a quack doctor who tries to heal the people of the island, but usually makes a mess of things. After removing the bullets from Chopper he inspired Chopper to become a doctor and began teaching Chopper his practice. ', 'https://i.pinimg.com/736x/8c/56/85/8c5685e1c211fc794c876d5f7aa7bf3d--chopper-one-piece.jpg'),
    (2, 'An explanation', '2022-04-25', 'An explanation', 'https://i.pinimg.com/originals/52/6f/97/526f971390296b6ce1d4b8575131fa4b.jpg'),
    (2, 'Chopper Romance!', '2022-04-25', 'Chopper is adorable, innocent, and friendly to the highest degree, he even takes on a older brother role when the mink (minks are half human half animal creatures from Zou) bunny Carrot joins the crew. The human women on the ship always show him plenty of affection on account of how cute he is, but he has no interest in any human women and the crew have never come across any reindeer for Chopper to chat with. However, on while on Zou Chopper laid eyes upon what a reindeer mink which he seems to consider to be beautiful based on his reaction below. After years of being the lovable mascot doctor of the crew Chopper has stumbled upon a potential love interest to pursue after the task of crowning Luffy of the pirate king is complete. In this fanfiction I will...', 'https://pbs.twimg.com/media/DmHRzn3W0AAIBUY.jpg'),
    (2, 'dancing chopper', '2022-5-27', 'no explanation needed', 'https://c.tenor.com/DX9o8Spwg5wAAAAM/chopper-tonytony.gif');

    
-- auth


-- insert into app_role (`name`) values
--     ('USER'),
--     ('ADMIN');

-- -- passwords are set to "P@ssw0rd!"
-- insert into app_user (username, password_hash, disabled)
--     values
--     ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0),
--     ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0);

-- insert into app_user_role
--     values
--     (1, 2),
--     (2, 1);