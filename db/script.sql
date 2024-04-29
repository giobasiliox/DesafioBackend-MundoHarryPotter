CREATE TABLE bruxos (
    id SERIAL  PRIMARY KEY ,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    casahogwarts VARCHAR(100) NOT NULL,
    habilidades VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(100) NOT NULL,
    patrono VARCHAR(100)
);


CREATE TABLE varinhas (
    id SERIAL  PRIMARY KEY ,
    material VARCHAR(100) NOT NULL,
    comprimento DECIMAL(10,2) NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    data_fabricacao DATE NOT NULL
);

"INSERT INTO bruxo (nome, idade, casahogwarts, habilidades, status_sangue, patrono) VALUES ('Harry Potter', 17, 'Grifinória', 'Voo', 'Mestiço', 'Cervo')"


-- Bruxos

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

"nome": "Draco Malfoy",
"idade": 17,
"casahogwarts": "Sonserina",
"habilidades": "Poções",
"status_sangue": "Puro",
"patrono": "Serpente"

"nome": "Luna Lovegood",
"idade": 17,
"casahogwarts": "Corvinal",
"habilidades": "Adivinhação",
"status_sangue": "Puro",
"patrono": "Lebre"


-- Varinhas
"material": "Madeira de Teixo",
"comprimento": 11.5,
"nucleo": "Pena de Fênix",
"data_fabricacao": "1991-07-31"

"material": "Videira",
"comprimento": 10.75,
"nucleo": "Pelo de Unicórnio",
"data_fabricacao": "1991-09-01"

"material": "Salgueiro",
"comprimento": 14,
"nucleo": "Pelo de Rabo-Córneo Húngaro",
"data_fabricacao": "1991-08-04"


"material": "Espinheiro Negro",
"comprimento": 10,
"nucleo": "Pelo de Coração de Dragão",
"data_fabricacao": "1991-06-24"

"material": "Choupo",
"comprimento": 12,
"nucleo": "Cabelo de Veela",
"data_fabricacao": "1991-08-05"

      






"INSERT INTO varinha (material, compimento, nucleo, data_fabricacao) VALUES ('Madeira de Teixo', 30.0, 'Pena de Fênix', '1991-07-31')"


