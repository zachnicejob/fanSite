drop database if exists cherry_blossom;
create database cherry_blossom;
use cherry_blossom;

create table post (
    post_id int primary key auto_increment,
    type_id int not null,
	title varchar(50) not null,
    date_posted date not null,
    text_body varchar(10000),
    image varchar(200)
);


-- auth


insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, password_hash, disabled)
    values
    ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0),
    ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0);

insert into app_user_role
    values
    (1, 2),
    (2, 1);