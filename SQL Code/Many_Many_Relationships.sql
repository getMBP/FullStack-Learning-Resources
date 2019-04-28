//Many_Many_Relationships
//https://gist.github.com/anonymous/79c2eed2a634777b16ff
//https://www.youtube.com/watch?v=GJbtDTGmOGY&list=PL_c9BZzLwBRK0Pc28IdvPQizD2mJlgoID&index=19

student: student_id, first_name, last_name
classes: class_id, name, teacher_id
student_classes: class_id, student_id     # the junction table

create database Many_Many_Relationships

use Many_Many_Relationships

CREATE TABLE Student
(
Student_ID INT PRIMARY KEY,
First_Name VARCHAR(255),
Last_Name VARCHAR(255)
);

CREATE TABLE Classes
(
Class_ID INT PRIMARY KEY,
Name  VARCHAR(255),
Teacher_ID INT
);

student_classes: class_id, student_id     # the junction table

CREATE TABLE Student_Classes
(
Class_ID INT,
Student_ID  INT(255),
UNIQUE (Class_ID,Student_ID),
FOREIGN KEY (Student_ID) 
   REFERENCES Student(Student_ID),
FOREIGN KEY (Class_ID) 
    REFERENCES Classes(Class_ID)
);

INSERT INTO Student(Student_ID,First_Name,Last_Name) VALUES (1, 'deen', 'john');

INSERT INTO Student(Student_ID,First_Name,Last_Name) VALUES (2, 'mary', 'jane');

INSERT INTO Student(Student_ID,First_Name,Last_Name) VALUES (3, 'jon', 'snow');


INSERT INTO Classes(Class_ID,Name,Teacher_ID) VALUES (1, 'biology', 1);
INSERT INTO Classes(Class_ID,Name,Teacher_ID) VALUES (2, 'physics', 2);
INSERT INTO Classes(Class_ID,Name,Teacher_ID) VALUES (3, 'geography', 77);

INSERT INTO Student_Classes(Student_ID,Class_ID) VALUES (1, 2);
INSERT INTO Student_Classes(Student_ID,Class_ID) VALUES (1, 1);

INSERT INTO Student_Classes(Student_ID,Class_ID) VALUES (2, 2);
INSERT INTO Student_Classes(Student_ID,Class_ID) VALUES (2, 3);

INSERT INTO Student_Classes(Student_ID,Class_ID) VALUES (3, 1);



