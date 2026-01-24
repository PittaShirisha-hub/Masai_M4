# Database Relationships

## 1. What is a Database Relationship?

A **database relationship** defines how data in one table is connected to data in another table.  
Relationships are created using **primary keys (PK)** and **foreign keys (FK)** to maintain **data integrity**, **avoid duplication**, and **represent real-world connections** between entities.

In relational databases, relationships help organize data efficiently and allow meaningful queries across multiple tables.

---

## 2. Types of Database Relationships

There are **three main types of database relationships**:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

Each type is explained below with **e-commerce examples**.

---

## 3. One-to-One Relationship (1:1)

### Definition  
In a **one-to-one relationship**, each record in one table is associated with **exactly one record** in another table.

### E-commerce Example  
**User ↔ UserProfile**

- Each user has one profile.
- Each profile belongs to one user.

### Tables Example

**users**
| user_id (PK) | email |
|-------------|-------|

**user_profiles**
| profile_id (PK) | user_id (FK) | address | phone |

### Diagram

Users ──────── UserProfiles
1 ↔ 1


### Use Case  
Used when optional or sensitive data is separated from the main table for **security or performance** reasons.

---

## 4. One-to-Many Relationship (1:N)

### Definition  
In a **one-to-many relationship**, one record in a table can be associated with **multiple records** in another table.

### E-commerce Example  
**Customer → Orders**

- One customer can place many orders.
- Each order belongs to one customer.

### Tables Example

**customers**
| customer_id (PK) | name |

**orders**
| order_id (PK) | customer_id (FK) | order_date |

### Diagram

Customer ─────── Orders
1 → N


### Use Case  
This is the **most common relationship** in e-commerce systems.

---

## 5. Many-to-Many Relationship (M:N)

### Definition  
In a **many-to-many relationship**, multiple records in one table can be related to **multiple records** in another table.

This requires a **junction table**.

### E-commerce Example  
**Orders ↔ Products**

- One order can contain many products.
- One product can appear in many orders.

### Tables Example

**orders**
| order_id (PK) |

**products**
| product_id (PK) | name |

**order_items** (junction table)
| order_id (FK) | product_id (FK) | quantity |

### Diagram

Orders ─── Order_Items ─── Products
M ↔ N


### Use Case  
Used when relationships themselves carry extra information (like quantity, price, etc.).

---

## 6. Summary Table

| Relationship Type | Description | E-commerce Example |
|------------------|-------------|-------------------|
| One-to-One | One record maps to one record | User → Profile |
| One-to-Many | One record maps to many records | Customer → Orders |
| Many-to-Many | Many records map to many records | Orders ↔ Products |

---

## 7. Conclusion

Database relationships are fundamental to designing **scalable and normalized databases**.  
In e-commerce applications, relationships help represent real-world business logic such as customers placing orders and purchasing products. Choosing the correct relationship type ensures **data consistency**, **efficient queries**, and **easy maintenance**.

