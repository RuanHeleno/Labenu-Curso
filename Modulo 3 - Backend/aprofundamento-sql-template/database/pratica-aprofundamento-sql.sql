-- Active: 1687385661937@@127.0.0.1@3306
-- Conecte o arquivo pratica-aprofundamento-sql.db com a extensão MySQL e ative a conexão aqui

-- Deletar tabela
DROP TABLE pokemons;

-- Criar tabela
CREATE TABLE if NOT EXISTS pokemons (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    special_attack INTEGER NOT NULL,
    special_defense INTEGER NOT NULL,
    speed INTEGER NOT NULL
);

-- Popular tabela
INSERT INTO pokemons (
    id,
    name,
    type,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed
)
VALUES 
    (1, "bulbasaur", "grass", 45, 49, 49, 65, 65, 45),
    (2, "ivysaur", "grass", 60, 62, 63, 80, 80, 60),
    (3, "venusaur", "grass", 80, 82, 83, 100, 100, 80),
    (4, "charmander", "fire", 39, 52, 43, 60, 50, 65),
    (5, "charmeleon", "fire", 58, 64, 58, 80, 65, 80),
    (6, "charizard", "fire", 78, 84, 78, 109, 85, 100),
    (7, "squirtle", "water", 44, 48, 65, 50, 64, 43),
    (8, "wartortle", "water", 59, 63, 80, 65, 80, 58),
    (9, "blastoise", "water", 79, 83, 100, 85, 105, 78);

-- Buscar todos os pokemons
SELECT * FROM pokemons;

-- Práticas
-- Buscar pokemons que tenham speed > 60
SELECT name, speed FROM pokemons AS speedMaiorQue60 WHERE speed > 60;

--Buscar pokemons que tenham attack e special_attack maiores ou iguais a 60
SELECT name, attack, special_attack FROM pokemons AS attackSpecialAttack WHERE attack >= 60 AND special_attack >= 60;

--Buscar pokemons que tenham na coluna NAME o termo "saur" no final do nome
SELECT name FROM pokemons AS buscaFinalSaur WHERE name LIKE "%saur";

--Buscar a media simples da coluna HP
SELECT avg(hp) AS "Media Simples do HP" FROM pokemons;

--Buscar o numero de linhas da tabela pokemons
SELECT count(*) AS linhasTotal FROM pokemons;

--Buscar todos os pokemons e ordene-os baseado na coluna defense em ordem decrescente
SELECT name, defense FROM pokemons ORDER BY defense DESC;

--Buscar todos os pokemons e agrupe-os baseado na coluna TYPE
SELECT name, type, count(*) FROM pokemons GROUP BY type;

--Buscar todos os pokemons e limite o resultado a 3 linhas iniciando a partir da quinta linha
SELECT id, name FROM pokemons LIMIT 3 OFFSET 4;

SELECT name, type FROM pokemons WHERE type = "fire" OR type = "grass";

SELECT name, attack FROM pokemons ORDER BY attack ASC;

SELECT id, name FROM pokemons LIMIT 3 OFFSET 2;

--SELECT name, attack, type FROM pokemons WHERE type = "fire" OR type = "grass" ORDER BY attack ASC LIMIT 3 OFFSET 2;