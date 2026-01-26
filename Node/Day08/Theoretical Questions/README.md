1. What is a database? What are the types of databases?

ANS-> A database is an organized collection of data that can be stored, retrieved, updated, and managed efficiently.
There are mainly 2 type of databases 
a. Relational (SQL) –> MySQL, PostgreSQL, Oracle
b. NoSQL -> Document-based (MongoDB), Key–Value (Redis)



2. What is the difference between SQL and NoSQL databases?

ANS -> SQL databases are also known as relational database, it have fixed schema, it uses tables format and ACID compliant while NoSQL databases are known as non- relational database, it have flexible schema, it uses documents, key-value, graphs like format and BASE compliant.



3. When would you choose SQL over NoSQL and vice versa?

ANS -> When data relationships are complex, Strong consistency is required and Transactions are critical (banking, payments) then we choose SQL.
When Schema changes frequently, having large-scale distributed systems and needed high read/write performance then we choose NoSQL.



4. What is ACID in databases? Explain each property.

ANS-> ACID is a set of properties that ensure reliable, consistent, and safe transactions in a database system. It guarantees that database transactions are processed correctly, even in case of failures.

ACID stands for Atomicity, Consistency, Isolation, Durability 
-> Atomicity means a transaction is treated as a single unit either all operations succeed, or none are applied.
-> Consistency means a transaction moves the database from one valid state to another.
-> Isolation (Concurrent Transactions) means multiple transactions can run simultaneously.
-> Durability means once a transaction is committed, it stays committed.



5. What is BASE in NoSQL databases?

ANS-> BASE is a set of principles followed by many NoSQL databases to achieve high availability and scalability, often by relaxing strict consistency.



6. What is database normalization? Explain 1NF, 2NF, 3NF.

ANS-> Database normalization is the process of organizing data in a database to reduce data redundancy and improve data integrity.

7. What is denormalization? When would you denormalize data?

ANS-> Denormalization is the process of adding redundancy to improve read performance.
When to Denormalize...
a. Read-heavy applications
b. Performance is more important than storage
c. Data is rarely updated



8. What are database indexes? How do they improve performance?

ANS-> An index is a data structure that improves the speed of data retrieval.
They improve performance by -:
-> Reduce full table scans
-> Enable faster searches
-> Improve query performance



9. What are the trade-offs of using indexes?

ANS-> Indexes improve read/query performance but come with trade-offs:
a. Slower writes (INSERT, UPDATE, DELETE need index updates)
b. Extra storage usage
c. Maintenance overhead
d. Poor performance if overused or used on low-selectivity columns



10. What is a primary key? What is a foreign key?

ANS-> A primary key uniquely identifies each record in a table. It cannot be NULL and must be unique.
A foreign key is a field in one table that references the primary key of another table, used to maintain relationships and referential integrity between tables.