# Schema Design Fundamentals – Relational Databases

## 1. What is Schema Design and What Does a Database Schema Represent?

**Schema design** is the process of planning and defining how data is structured, stored, and related inside a relational database.  
A **database schema** represents the blueprint of the database. It defines:

- Tables
- Columns
- Data types
- Relationships
- Constraints (rules)

For example, in an e-commerce database, the schema defines tables like `users`, `orders`, and `products`, and how they are connected.

A well-designed schema ensures that data is organized logically and stored efficiently.

---

## 2. Why Schema Design Is Required Before Writing Backend Code

Schema design must be done **before backend development** because the backend depends on how data is stored and accessed.

Reasons:
- Backend APIs read and write data based on table structure
- Poor schema leads to complex queries and bugs
- Changing schema later can break existing backend code

For example, if an `orders` table is not properly related to `users`, backend code cannot easily fetch a user's orders.

Good schema design provides a **stable foundation** for backend logic.

---

## 3. Impact of Poor Schema Design

Poor schema design causes several problems:

### Data Consistency Issues
- Duplicate data appears in multiple tables
- Updates in one place may not reflect elsewhere

### Maintenance Problems
- Difficult to modify tables without affecting other parts
- Queries become complex and error-prone

### Scalability Issues
- Database slows down as data grows
- Adding new features becomes difficult

Example:  
Storing user details inside every order record leads to duplication and inconsistency when user data changes.

---

## 4. Validations in Schema Design and Why Databases Enforce Them

**Validations** are rules applied at the database level to ensure data correctness.

Common validations include:

- **NOT NULL** – prevents empty values  
- **UNIQUE** – avoids duplicate values  
- **DEFAULT** – assigns a default value  
- **PRIMARY KEY** – uniquely identifies each record  

Example:
```sql
email TEXT UNIQUE NOT NULL

5. Difference Between Database Schema and Database Table
Database Schema	Database Table
Logical blueprint of the database	Actual structure that stores data
Contains tables, relationships, rules	Contains rows and columns
High-level design	Low-level data storage

A schema is like a building plan, while a table is like a room inside the building.

6. Why a Table Should Represent Only One Entity

Each table should represent one real-world entity to follow normalization principles.

Benefits:

Avoids data duplication

Simplifies updates

Improves clarity

Example:

users table → user details only

orders table → order details only

Mixing multiple entities in one table leads to confusion and redundancy.

7. Why Redundant or Derived Data Should Be Avoided

Redundant data is repeated data.
Derived data can be calculated from existing data.

Problems caused:

Inconsistencies when one copy is updated

Extra storage usage

Maintenance complexity

Example:

Storing total_price when it can be calculated from quantity × price

Derived data should be calculated when needed, not stored permanently.

8. Importance of Choosing Correct Data Types

Choosing the correct data type:

Saves storage

Improves performance

Prevents invalid data

Examples:

INTEGER for age

TIMESTAMP for dates

BOOLEAN for true/false values

Using incorrect data types (like storing numbers as text) leads to slow queries and validation issues.