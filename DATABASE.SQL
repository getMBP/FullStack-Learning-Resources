book reference 
https://www.amazon.in/Database-Systems-Concepts-Sixth-Silberschatz/dp/0071325220

.................

JOINS

1) LEFT JOIN

USE test //DB

CREATE TABLE RS (
    ID int 
);

CREATE TABLE LS (
    ID int 
);


INSERT INTO LS (ID)
VALUES (2);

INSERT INTO RS (ID)
VALUES (1);

SELECT * FROM LS ;
SELECT * FROM RS ;


SELECT * FROM LS
SELECT * FROM RS

SELECT *
from LS 
LEFT JOIN RS
ON LS.ID = RS.ID

SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID


.................................................


USE test

CREATE TABLE RS (
    ID int ,
    COL2 VARCHAR(12)
);

CREATE TABLE LS (
    ID int ,
    COL4 VARCHAR(12)
);


INSERT INTO LS (ID ,COL4)
VALUES (1 ,'AAA');

INSERT INTO RS (ID ,COL2)
VALUES (2 ,'DDD');

SELECT * FROM LS ;
SELECT * FROM RS ;



SELECT *
from LS 
LEFT JOIN RS
ON LS.ID = RS.ID







