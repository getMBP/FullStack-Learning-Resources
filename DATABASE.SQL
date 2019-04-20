

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



