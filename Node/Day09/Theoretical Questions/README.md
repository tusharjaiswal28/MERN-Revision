1. What is database scaling? Explain vertical vs horizontal scaling.

ANS-> Database scaling is the process of increasing a database’s capacity to handle more data or traffic.

Vertical Scaling (Scale Up): Increase power of one machine by adding more CPU, RAM, or storage to a single server, it is simple to implement and limited by hardware.

Horizontal Scaling (Scale Out): Add more database nodes, distributes load and More complex but highly scalable.



2. What is database replication? Explain master-slave replication.

ANS-> Replication is copying data from one database to others to improve availability and read performance. Master–slave replication has one master database for writes and multiple slave databases that copy its data. Slaves handle read requests to improve performance and scalability.



3. What is database sharding? How does it work?

ANS-> Sharding is splitting a database into smaller independent pieces (shards), each storing a subset of data.
It works in these ways...
-> Data is distributed using a shard key (e.g., userId).
-> Each shard stores different rows.
-> Queries are routed to the correct shard.



4. What are the challenges of sharding?

ANS-> The major challenges of sharding are:
1. Complex queries across shards
2. Data rebalancing
3. Transaction management
4. Increased operational complexity
5. Hotspot shards



5. What is database partitioning? How does it differ from sharding?

ANS-> Database partitioning means splitting a table within the same database. Database partitioning splits data into parts within the same database/server while sharding splits data across multiple databases/servers to scale horizontally.



6. What is a connection pool? Why is it important?

ANS-> A connection pool maintains a set of open database connections reused across requests.
It is important because it reduces connection overhead, improves performance and prevents connection exhaustion.



7. What are N+1 queries? How do you solve this problem?

ANS-> N+1 queries happen when one query fetches N records and then N additional queries are executed for related data.
They are solved using joins, eager loading, or batch fetching to reduce queries to one or few.



8. What is caching? Explain different caching strategies (cache-aside, write-through, write-back).

ANS-> Caching stores frequently accessed data in fast storage.
Caching Strategies...
Cache-Aside: It the most common strategies in which Application manages cache
Write-Through: Data is written to cache and database at the same time.
Write-Back: Data is written to cache first and later synced to the database asynchronously.



9. What is the CAP theorem?

ANS-> The CAP theorem states that a distributed system can guarantee only two of three properties at the same time:
Consistency, Availability, and Partition tolerance.



10. What are database transactions? What is the MVCC (Multi-Version Concurrency Control)?

ANS-> A transaction is a sequence of operations executed as a unit. Which ensures Atomicity, Consistency, Isolation, Durability. MVCC allows multiple versions of data, Readers don’t block writers and Improves concurrency.