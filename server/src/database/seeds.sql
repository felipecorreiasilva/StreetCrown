-- Limpa as tabelas caso queira reiniciar os dados (opcional)
-- TRUNCATE TABLE users, products RESTART IDENTITY CASCADE;

-- Inserção do usuário Administrador da StreetCrown com CPF de 11 dígitos
INSERT INTO users (
    name, 
    email, 
    password_hash, 
    role, 
    cpf, 
    phone, 
    cep, 
    city, 
    state, 
    neighborhood, 
    address, 
    number, 
    complement
) VALUES (
    'Administrador',
    'admin@streetcrown.com',
    -- Hash bcrypt exato correspondente à senha "12345678"
    '$2b$10$7h3pvq9oW3GAIQR6kwAY/OmUli/9spQmtVSTKEgJlWklygzF91H3y', 
    'admin',
    '01234567900',
    '75983446135',
    '38413675',
    'Uberlândia',
    'MG',
    'Panorama',
    'Rua do Calistemon',
    '363',
    'Apartamento 312 Bloco C'
);

-- Inserção de produtos iniciais para a StreetCrown com o caminho /uploads/products/
INSERT INTO products (name, category, description, price, image_url, is_available, weight, width, height, length) VALUES 
(
    'Boné StreetCrown Velvet Blue', 
    'Acessórios', 
    'Boné aba curva confeccionado em veludo de alta qualidade, com bordado frontal exclusivo StreetCrown e regulagem traseira strapback.', 
    129.90, 
    '/uploads/products/bone-blue.png', 
    TRUE, 
    0.250, 18.00, 12.00, 22.00
),
(
    'Boné StreetCrown Velvet Black', 
    'Acessórios', 
    'Boné aba curva em veludo premium na cor preta, com detalhes bordados em alta definição e acabamento interno reforçado.', 
    129.90, 
    '/uploads/products/bone-black.png', 
    TRUE, 
    0.250, 18.00, 12.00, 22.00
),
(
    'Boné StreetCrown Velvet Red', 
    'Acessórios', 
    'Edição limitada na cor vermelha. Estilo urbano marcante com toque aveludado e coroa estruturada.', 
    129.90, 
    '/uploads/products/bone-red.png', 
    TRUE, 
    0.250, 18.00, 12.00, 22.00
),
(
    'Camiseta StreetCrown Oversized Classic Black', 
    'Vestuário', 
    'Camiseta modelagem oversized em algodão penteado 100% premium, gramatura pesada e estampa minimalista no peito.', 
    159.90, 
    '/uploads/products/camiseta-black.png', 
    TRUE, 
    0.350, 25.00, 3.00, 35.00
),
(
    'Camiseta StreetCrown Oversized Red', 
    'Vestuário', 
    'Conforto absoluto e atitude urbana. Modelagem streetwear ampla, gola canelada grossa e tecido de toque macio.', 
    159.90, 
    '/uploads/products/camiseta-red.png', 
    TRUE, 
    0.350, 25.00, 3.00, 35.00
),
(
    'Camiseta StreetCrown Oversized Classic Blue', 
    'Vestuário', 
    'Camiseta modelagem oversized em algodão penteado 100% premium, gramatura pesada e estampa minimalista no peito.', 
    159.90, 
    '/uploads/products/camiseta-blue.png', 
    TRUE, 
    0.350, 25.00, 3.00, 35.00
);