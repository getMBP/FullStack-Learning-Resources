
create database university_database;

use university_database

create table department(
dept varchar (20),
building varchar (15),
budget numeric (12,2),
primary key (dept));

create table course(
course_id varchar (7),
title varchar (50),
dept  varchar (20),
credits numeric (2,0),
primary key (course_id),
foreign key (dept) references department(dept));

create table instructor(
ID varchar (5),
name varchar (20) not null,
dept  varchar (20),
salary numeric (8,2),
primary key (ID),
foreign key (dept) references department(dept));

create table section(
course_id varchar (8),
sec_id varchar (8),
semester varchar (6),
year numeric (4,0),
building varchar (15),
room varchar (7),
time_slot_id varchar(12),
primary key (course_id, sec_id, semester, year),
foreign key (course_id) references course(course_id));

create table teaches(
ID varchar (5),
course_id varchar (8),
sec_id varchar (8),
semester varchar (6),
year numeric (4,0),
primary key (ID, course_id, sec_id, semester, year),
foreign key (course_id, sec_id, semester, year) references section(course_id,sec_id,semester,year),
foreign key (ID) references instructor(ID));

                                       
                                       
  https://www.dofactory.com/sql/having
                                       
                                       
                                       
