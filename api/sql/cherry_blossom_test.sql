drop database if exists cherry_blossom;
create database cherry_blossom;
use cherry_blossom;

create table post (
    post_id int primary key auto_increment,
    type_id int not null,
	title varchar(50) not null,
    date_posted date not null,
    text_body varchar(10000),
    image_link varchar(200)
);

insert into post (post_id, type_id, title, date_posted, text_body, image_link)
values