DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS color;
DROP TABLE IF EXISTS habitat;
DROP TABLE IF EXISTS shape;
DROP TABLE IF EXISTS species;

CREATE TABLE pokemon (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  poke_name TEXT NOT NULL,
  url_ TEXT NOT NULL
);

CREATE TABLE color (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  color TEXT NOT NULL,
  url_ TEXT NOT NULL
);

CREATE TABLE habitat (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  url_ TEXT NOT NULL
);

CREATE TABLE shape (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  url_ TEXT NOT NULL
);

CREATE TABLE species (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  url_ TEXT NOT NULL
);