CREATE TABLE bruxo (
    id SERIAL  PRIMARY KEY ,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    casahogwarts VARCHAR(100) NOT NULL,
    habilidades VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(100) NOT NULL,
    patrono VARCHAR(100)
);

CREATE TABLE varinha (
    id SERIAL  PRIMARY KEY ,
    material VARCHAR(100) NOT NULL,
    compimento DECIMAL(10,2) NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    data_fabricacao DATE NOT NULL
);

"INSERT INTO bruxo (nome, idade, casahogwarts, habilidades, status_sangue, patrono) VALUES ('Harry Potter', 17, 'Grifinória', 'Voo', 'Mestiço', 'Cervo')"

"nome": "Harry Potter",
"idade": 17,
"casahogwarts": "Grifinória",
"habilidades": "Voo",
"status_sangue": "Mestiço",
"patrono": "Cervo"

"nome": "Hermione Granger",
"idade": 17,
"casahogwarts": "Grifinória",
"habilidades": "Inteligência",
"status_sangue": "Trouxa",
"patrono": "Lontra"

"nome": "Ronald Weasley",
"idade": 17,
"casahogwarts": "Grifinória",
"habilidades": "Xadrez",
"status_sangue": "Puro",
"patrono": "Jack Russel"

"INSERT INTO varinha (material, compimento, nucleo, data_fabricacao) VALUES ('Madeira de Teixo', 30.0, 'Pena de Fênix', '1991-07-31')"


