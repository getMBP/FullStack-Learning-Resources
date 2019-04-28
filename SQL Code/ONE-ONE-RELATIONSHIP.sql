create database ONE_ONE_Relationships

use ONE_ONE_Relationships

CREATE TABLE Person
(
 Person_ID int AUTO_INCREMENT,
 Name VARCHAR(255),
 EmailId VARCHAR(255),
 PRIMARY KEY (Person_ID)
);

CREATE TABLE PassportDetails
(
PassportDetails_ID int AUTO_INCREMENT,
Passport_Number VARCHAR(255),
Fk_Person_Id int UNIQUE,
PRIMARY KEY (PassportDetails_ID),
FOREIGN KEY (Fk_Person_Id) REFERENCES Person(Person_ID)
);

//add unique keyword for one-one relationship

CREATE TABLE PassportDetails
(
PassportDetails_ID int AUTO_INCREMENT,
Passport_Number VARCHAR(255),
Fk_Person_Id int UNIQUE,
PRIMARY KEY (PassportDetails_ID),
FOREIGN KEY (Fk_Person_Id) REFERENCES Person(Person_ID)
);




INSERT INTO Person(Name,EmailId) VALUES ('Niraj','v.a@emails.com');
INSERT INTO Person(Name,EmailId) VALUES ('Vishwanath','v.v@emails.com');
INSERT INTO Person(Name,EmailId) VALUES ('Chetan','c.v@emails.com');


INSERT INTO PassportDetails(PassportDetails_ID,Passport_Number,Fk_Person_Id) VALUES (101, 'C3031R33', 1);
INSERT INTO PassportDetails(PassportDetails_ID,Passport_Number,Fk_Person_Id) VALUES (102, 'VRDK5695', 2);
INSERT INTO PassportDetails(PassportDetails_ID,Passport_Number,Fk_Person_Id) VALUES (103, 'A4DEK33D', 3);

//TEST
INSERT INTO PassportDetails(PassportDetails_ID,Passport_Number,Fk_Person_Id) VALUES (104, 'C3031R35', 1);

SELECT * FROM learning_relationships.person;
SELECT * FROM learning_relationships.PassportDetails;