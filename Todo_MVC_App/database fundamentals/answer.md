# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

A `db.json` file is useful only for learning and small demos, but it is not suitable for real-world applications due to several limitations.

### Limitations of file-based storage:

**Performance**
- Every read or write operation requires reading or rewriting the entire file.
- Performance degrades significantly as data size increases.
- Not optimized for frequent queries.

**Scalability**
- Cannot handle large volumes of data efficiently.
- Not suitable for applications with many users or high traffic.
- No support for distributed systems or horizontal scaling.

**Concurrency**
- Multiple users accessing the file simultaneously can cause data corruption.
- No built-in locking or transaction support.

**Reliability**
- File corruption can occur if the server crashes during a write operation.
- No automatic backup or recovery mechanism.

Because of these issues, `db.json` is not reliable, scalable, or efficient for production-level applications.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

An ideal database system provides much more than simple data storage. Some key characteristics include:

### Performance
- Fast data retrieval and insertion.
- Optimized indexing and query execution.

### Concurrency
- Allows multiple users to read and write data simultaneously.
- Prevents data inconsistency using locks and transactions.

### Reliability
- Ensures data is not lost due to crashes or failures.
- Provides backup and recovery mechanisms.

### Data Integrity
- Maintains accuracy and consistency of data.
- Uses constraints like primary keys, foreign keys, and validations.

### Scalability
- Handles increasing data volume and user traffic efficiently.
- Supports vertical and horizontal scaling.

### Fault Tolerance
- Continues functioning even if part of the system fails.
- Replication and failover mechanisms ensure high availability.

---

## 3. How many types of databases are there? What are their use cases?

Databases are broadly classified into two main types:

### 1. Relational Databases (SQL)

**Description**
- Data is stored in structured tables with rows and columns.
- Uses SQL (Structured Query Language).

**Examples**
- MySQL
- PostgreSQL
- Oracle
- SQL Server

**Use Cases**
- Banking systems
- E-commerce applications
- Enterprise applications
- Applications requiring strong data consistency

---

### 2. Non-Relational Databases (NoSQL)

**Description**
- Data is stored in flexible formats such as documents, key-value pairs, or graphs.
- Schema-less or semi-structured.

**Examples**
- MongoDB (Document-based)
- Redis (Key-value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

**Use Cases**
- Social media platforms
- Real-time analytics
- Big data applications
- Applications requiring high scalability and flexibility

---

## Conclusion

While `db.json` is helpful for learning purposes, real-world applications require robust database systems that offer performance, scalability, reliability, and data integrity. Choosing the right type of database depends on the application requirements.
