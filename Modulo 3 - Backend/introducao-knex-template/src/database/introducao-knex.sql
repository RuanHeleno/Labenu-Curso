-- Active: 1688422669598@@127.0.0.1@3306

-- Tabelas já foram criadas
CREATE TABLE if NOT EXISTS bands (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL
);

SELECT * FROM bands;

DROP TABLE bands;

CREATE TABLE if NOT EXISTS songs (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    band_id TEXT NOT NULL,
    FOREIGN KEY (band_id) REFERENCES bands (id)
);

SELECT * FROM songs;

DROP TABLE songs;