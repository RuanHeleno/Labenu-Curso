-- Active: 1687133673296@@127.0.0.1@3306

CREATE TABLE if NOT EXISTS
    books (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        author TEXT NOT NULL,
        page_count INTEGER,
        price REAL NOT NULL
    );

INSERT INTO
    books (
        id,
        name,
        author,
        page_count,
        price
    )
VALUES (
        '8503012928',
        'O Quinze',
        'Rachel de Queiroz',
        208,
        24.95
    ), (
        '8578887239',
        'Dom Casmurro',
        'Machado de Assis',
        NULL,
        46.77
    );

SELECT * FROM books;

UPDATE books SET page_count = 463 WHERE id = "8578887239";

DELETE FROM books WHERE id = '8503012928';

DROP TABLE books;

CREATE TABLE
    tasks (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL
    );

INSERT INTO
    tasks (id, name, description)
VALUES (
        't001',
        'Estudar',
        'Estudar na Labenu'
    ), (
        't002',
        'Jogar',
        'Jogar um pouco no celular'
    ), (
        't003',
        'Candidatar para as vagas',
        'Candidatar quase todo dia para vagas de emprego na área'
    );

SELECT * FROM tasks;

UPDATE tasks SET description = "Jogar no celular" WHERE id = "t002";

DELETE FROM tasks WHERE id = 't002';

DROP TABLE tasks;