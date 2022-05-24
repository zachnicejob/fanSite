drop database if exists cherry_blossom_test;
create database cherry_blossom_test;
use cherry_blossom_test;

create table post (
    post_id int primary key auto_increment,
    type_id int not null,
	title varchar(50) not null,
    date_posted date not null,
    text_body varchar(10000),
    image_link varchar(200),
    constraint fk_post_type_id
		foreign key (type_id)
        references `type`(type_id)
);

create table `type` (
	type_id int primary key auto_increment,
    `type` varchar(20) not null
);

-- insert into post (post_id, type_id, title, date_posted, text_body, image_link)
-- values