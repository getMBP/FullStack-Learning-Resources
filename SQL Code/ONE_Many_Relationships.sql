create database ONE_Many_Relationships

use ONE_Many_Relationships

//BOOK CAN HAVE MANY AUTHORS
//https://www.tech-recipes.com/rx/56738/one-to-one-one-to-many-table-relationships-in-sql-server/

CREATE TABLE Book
(
Pk_Book_Id INT PRIMARY KEY,
Name VARCHAR(255),
ISBN VARCHAR(255)
);

CREATE TABLE Author
(
Pk_Author_Id INT PRIMARY KEY,
FullName     VARCHAR(255),
MobileNo     CHAR(10),
Fk_Book_Id   INT ,
FOREIGN KEY (Fk_Book_Id) REFERENCES Book(Pk_Book_Id)
);

INSERT INTO Book(Pk_Book_Id,Name,ISBN) VALUES (1, 'Let is Snow', 'ISBN3030303');
INSERT INTO Book(Pk_Book_Id,Name,ISBN)  VALUES (2, 'Three Cups of Tea','ISBN638242');


INSERT INTO Author(Pk_Author_Id,FullName,MobileNo,Fk_Book_Id) VALUES(100,'John Green','30303',1);
INSERT INTO Author(Pk_Author_Id,FullName,MobileNo,Fk_Book_Id)  VALUES(101,'Maureen Johnson','4343',1);
INSERT INTO Author(Pk_Author_Id,FullName,MobileNo,Fk_Book_Id)  VALUES(102,'Lauren Myracle','76665',1);
INSERT INTO Author(Pk_Author_Id,FullName,MobileNo,Fk_Book_Id)  VALUES(103,'Greg Mortenson','6434',2);
INSERT INTO Author(Pk_Author_Id,FullName,MobileNo,Fk_Book_Id)  VALUES(104,'David Oliver Relin','72322',2);

