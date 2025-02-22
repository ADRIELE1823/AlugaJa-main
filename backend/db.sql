
drop schema if exists alugaja;
CREATE DATABASE if not exists alugaja;
USE alugaja;

CREATE TABLE if not exists clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE  if not exists imoveis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('Casa', 'Apartamento', 'Kitnet', 'Sobrado') NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    quartos INT NOT NULL,
    banheiros INT NOT NULL,
    garagem ENUM('Sim', 'Não') NOT NULL,
    valor_aluguel DECIMAL(10, 2) NOT NULL,
    descricao TEXT,
    corretor_id INT NOT NULL,
    disponivel ENUM('Sim', 'Não') NOT NULL DEFAULT 'Sim',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE if not exists preferencias_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    tipo_imovel ENUM('Casa', 'Apartamento', 'Kitnet', 'Sobrado'),
    localizacao VARCHAR(255),
    quartos_minimos INT,
    banheiros_minimos INT,
    valor_maximo DECIMAL(10, 2),
    outras_preferencias TEXT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

CREATE TABLE if not exists contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('Telefone', 'WhatsApp', 'Email') NOT NULL,
    valor VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE if not exists recuperacao_senha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    expiracao DATETIME NOT NULL,
    usado ENUM('Sim', 'Não') NOT NULL DEFAULT 'Não',
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

INSERT INTO clientes (nome, email, senha, telefone) VALUES
('João Silva', 'joao.silva@example.com', 'senha123', '(11) 98765-4321'),
('Maria Souza', 'maria.souza@example.com', 'senha456', '(21) 99999-8888'),
('Pedro Almeida', 'pedro.almeida@example.com', 'senha789', '(31) 91234-5678'),
('Ana Oliveira', 'ana.oliveira@example.com', 'senhaabc', '(41) 98765-1234'),
('Carlos Mendes', 'carlos.mendes@example.com', 'senhadef', '(51) 95555-6666'),
('Juliana Costa', 'juliana.costa@example.com', 'senha1234', '(61) 94444-3333'),
('Rafael Santos', 'rafael.santos@example.com', 'senha5678', '(71) 93333-2222'),
('Fernanda Lima', 'fernanda.lima@example.com', 'senha9101', '(81) 92222-1111'),
('Lucas Pereira', 'lucas.pereira@example.com', 'senha1121', '(91) 91111-0000'),
('Camila Rodrigues', 'camila.rodrigues@example.com', 'senha3141', '(12) 90000-9999');


INSERT INTO preferencias_clientes (cliente_id, tipo_imovel, localizacao, quartos_minimos, banheiros_minimos, valor_maximo, outras_preferencias) VALUES
(1, 'Casa', 'Centro', 3, 2, 2000.00, 'Proximidade de escolas.'),
(2, 'Apartamento', 'Jardim', 2, 1, 1500.00, 'Mobília inclusa.'),
(3, 'Kitnet', 'Centro', 1, 1, 1000.00, 'Próximo ao trabalho.'),
(4, 'Sobrado', 'Bairro Alto', 4, 3, 3000.00, 'Com varanda.'),
(5, 'Casa', 'Periferia', 2, 1, 1200.00, 'Espaço para animais.'),
(6, 'Apartamento', 'Centro', 3, 2, 2000.00, 'Vista panorâmica.'),
(7, 'Kitnet', 'Centro', 1, 1, 900.00, 'Compacta e barata.'),
(8, 'Sobrado', 'Jardim', 5, 4, 2500.00, 'Grande e espaçoso.'),
(9, 'Casa', 'Bairro Novo', 4, 3, 2200.00, 'Com piscina.'),
(10, 'Apartamento', 'Centro', 2, 1, 1300.00, 'Compacto e moderno.');


INSERT INTO contatos (tipo, valor) VALUES
('Telefone', '(11) 98765-4321'),
('WhatsApp', '(21) 99999-8888'),
('Email', 'maria.souza@example.com'),
('Telefone', '(31) 91234-5678'),
('WhatsApp', '(41) 98765-1234'),
('Email', 'carlos.mendes@example.com'),
('Telefone', '(51) 95555-6666'),
('WhatsApp', '(61) 94444-3333'),
('Email', 'fernanda.lima@example.com'),
('Telefone', '(71) 93333-2222');

INSERT INTO recuperacao_senha (cliente_id, token, expiracao, usado) VALUES
(1, 'token123456', '2023-12-01 12:00:00', 'Não'),
(2, 'token789012', '2023-12-02 12:00:00', 'Não'),
(3, 'token345678', '2023-12-03 12:00:00', 'Sim'),
(4, 'token901234', '2023-12-04 12:00:00', 'Não'),
(5, 'token567890', '2023-12-05 12:00:00', 'Sim'),
(6, 'token234567', '2023-12-06 12:00:00', 'Não'),
(7, 'token890123', '2023-12-07 12:00:00', 'Sim'),
(8, 'token456789', '2023-12-08 12:00:00', 'Não'),
(9, 'token012345', '2023-12-09 12:00:00', 'Sim'),
(10, 'token678901', '2023-12-10 12:00:00', 'Não');

INSERT INTO imoveis (tipo, localizacao, quartos, banheiros, garagem, valor_aluguel, descricao, corretor_id, disponivel) VALUES
('Casa', 'Rua A, 123 - Centro', 3, 2, 'Sim', 1500.00, 'Casa espaçosa com quintal.', 1, 'Sim'),
('Apartamento', 'Av. B, 456 - Jardim', 2, 1, 'Não', 1200.00, 'Apartamento moderno.', 2, 'Sim'),
('Kitnet', 'Rua C, 789 - Centro', 1, 1, 'Não', 800.00, 'Kitnet compacta.', 3, 'Sim'),
('Sobrado', 'Rua D, 101 - Bairro Alto', 4, 3, 'Sim', 2000.00, 'Sobrado com varanda.', 1, 'Sim'),
('Casa', 'Rua E, 202 - Periferia', 2, 1, 'Sim', 1000.00, 'Casa simples.', 2, 'Sim'),
('Apartamento', 'Av. F, 303 - Centro', 3, 2, 'Sim', 1800.00, 'Apartamento com vista.', 3, 'Sim'),
('Kitnet', 'Rua G, 404 - Centro', 1, 1, 'Não', 900.00, 'Kitnet mobiliada.', 1, 'Sim'),
('Sobrado', 'Rua H, 505 - Jardim', 5, 4, 'Sim', 2500.00, 'Sobrado grande.', 2, 'Sim'),
('Casa', 'Rua I, 606 - Bairro Novo', 4, 3, 'Sim', 2200.00, 'Casa com piscina.', 3, 'Sim'),
('Apartamento', 'Av. J, 707 - Centro', 2, 1, 'Não', 1300.00, 'Apartamento compacto.', 1, 'Sim');