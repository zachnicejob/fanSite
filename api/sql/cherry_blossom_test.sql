drop database if exists cherry_blossom_test;
create database cherry_blossom_test;
use cherry_blossom_test;

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


delimiter //
create procedure set_known_good_state()
begin

set sql_safe_updates = 0;

delete from post;
alter table post auto_increment = 1;
delete from `type`;
alter table `type` auto_increment = 1;

insert into `type` (`type`) values
	('event'),
    ('general');

insert into post (type_id, title, post_date, text_body, image_link)
	values
    (1, 'First Event!', '2022-04-25', 'This is the first event post', 'http://pm1.narvii.com/6162/3b1affdff1083383b3a97256a1cf22caa1e8da8a_00.jpg'),
    (1, 'Second Event!', '2022-04-25', 'Just in case...', 'https://animedrawn.com/wp-content/uploads/2020/05/Chopper-683x1024.png'),
    (2, 'First Post!', '2022-04-25', 'An explanation', 'https://static.wikia.nocookie.net/onepiece/images/e/e6/Tony_Tony_Chopper_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20160207143020'),
    (2, 'And another post', '2022-04-25', 'I hate images', null),
    (2, 'And another post2', '2022-04-25', 'type some stuff out', null);
    
set sql_safe_updates = 1;
end //
delimiter ;