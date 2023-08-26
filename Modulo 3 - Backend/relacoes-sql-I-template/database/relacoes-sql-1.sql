-- Active: 1687812217956@@127.0.0.1@3306

-- Práticas

CREATE TABLE
    if NOT EXISTS licenses (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        register_number TEXT UNIQUE NOT NULL,
        category TEXT NOT NULL
    );

INSERT INTO
    licenses (id, register_number, category)
VALUES ('01', 'rn01', 'A'), ('02', 'rn02', 'B');

DROP TABLE licenses;

CREATE TABLE
    if NOT EXISTS drivers (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        license_id TEXT UNIQUE NOT NULL,
        FOREIGN KEY (license_id) REFERENCES licenses(id)
    );

INSERT INTO
    drivers (
        id,
        name,
        email,
        password,
        license_id
    )
VALUES (
        'd01',
        'Ruan',
        'ruan@gmail.com',
        '123',
        '01'
    ), (
        'd02',
        'Sida',
        'sida@gmail.com',
        '123',
        '02'
    );

DROP TABLE drivers;

SELECT *
FROM licenses
    INNER JOIN drivers ON licenses.id = drivers.license_id;

CREATE TABLE
    if NOT EXISTS users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

INSERT INTO
    users (id, name, email, password)
VALUES (
        'u001',
        'Ruan',
        'ruan@gmail.com',
        '123'
    ), (
        'u002',
        'Sida',
        'sida@gmail.com',
        '123'
    );

DROP TABLE users;

CREATE TABLE
    if NOT EXISTS phones (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        phone_number TEXT UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

INSERT INTO
    phones (id, phone_number, user_id)
VALUES ('ph01', '1111-1111', 'u001'), ('ph02', '2222-2222', 'u002'), ('ph03', '3333-3333', 'u002');

DROP TABLE phones;

SELECT *
FROM users
    INNER JOIN phones ON users.id = phones.user_id;
  
CREATE TABLE
    if NOT EXISTS owner (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL
    );

INSERT INTO
    owner (id, name)
VALUES (
        'o001',
        'Ruan'
    ), (
        'o002',
        'Sida'
    );

CREATE TABLE
    if NOT EXISTS cars (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        placa TEXT UNIQUE NOT NULL,
        owner_id TEXT NOT NULL,
        FOREIGN KEY (owner_id) REFERENCES owner(id)
    );

INSERT INTO
    cars (id, placa, owner_id)
VALUES (
        'c001',
        'A0H777S',
        'o001'
    ), (
        'c002',
        'A0H777Z',
        'o002'
    ), (
        'c003',
        'A0H776Z',
        'o001'
    );


DROP TABLE cars;

SELECT *
FROM owner
    INNER JOIN cars ON owner.id = cars.owner_id;