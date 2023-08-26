-- Active: 1687989462596@@127.0.0.1@3306

-- Práticas

CREATE TABLE
    if NOT EXISTS users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT(DATETIME()) NOT NULL
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
    ), (
        'u003',
        'Fulano',
        'fulano@gmail.com',
        '123'
    );

SELECT * FROM users;

DROP TABLE users;

CREATE TABLE
    if NOT EXISTS follows (
        follower_id TEXT NOT NULL,
        followed_id TEXT NOT NULL,
        FOREIGN KEY (follower_id) REFERENCES users(id),
        FOREIGN KEY (followed_id) REFERENCES users(id)
    );

INSERT INTO
    follows (follower_id, followed_id)
VALUES ('u001', 'u002'), ('u001', 'u003'), ('u002', 'u001');

SELECT
    users.id,
    users.name,
    users.email,
    users.password,
    users.created_at,
    follows.follower_id
FROM users
    INNER JOIN follows ON users.id = follows.follower_id;

SELECT
    users.id AS userId,
    users.name AS userName,
    users.email AS userEmail,
    users.password AS userPassword,
    users.created_at AS createdAt,
    follows.follower_id AS followerId,
    usersFollowed.name AS followedName
FROM users
    LEFT JOIN follows ON users.id = follows.follower_id
    INNER JOIN users AS usersFollowed ON usersFollowed.id = follows.followed_id;

DROP TABLE follows;

-- EXERCÍCIO DE FIXAÇÃO

CREATE TABLE
    if NOT EXISTS users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT(DATETIME()) NOT NULL
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
    ), (
        'u003',
        'Fulano',
        'fulano@gmail.com',
        '123'
    );

SELECT * FROM users;

DROP TABLE users;

CREATE TABLE
    if NOT EXISTS follows (
        follower_id TEXT NOT NULL,
        followed_id TEXT NOT NULL,
        FOREIGN KEY (follower_id) REFERENCES users(id),
        FOREIGN KEY (followed_id) REFERENCES users(id)
    );

INSERT INTO
    follows (follower_id, followed_id)
VALUES ('u001', 'u002'), ('u001', 'u003'), ('u002', 'u001');

SELECT *
FROM users
    INNER JOIN follows ON users.id = follows.follower_id;

SELECT *
FROM users
    LEFT JOIN follows ON users.id = follows.follower_id;

DROP TABLE follows;