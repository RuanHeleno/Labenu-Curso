-- Active: 1689532340680@@127.0.0.1@3306

CREATE TABLE if NOT EXISTS videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    titulo TEXT UNIQUE NOT NULL,
    duracao_em_segundos NUMBER NOT NULL,
    data_de_upload TEXT NOT NULL
);

INSERT INTO videos
VALUES
	("v001", "Pantera Negra", 7200, "20/04/2018"),
	("v002", "Pantera Negra 2", 7800, "16/05/2023");

SELECT * FROM videos;

DROP TABLE videos;