-- Insert users with UUIDs cast correctly
INSERT INTO users (id, first_name, last_name, email, password)
VALUES 
    ('66a908ee-e597-1a94-7669-868266a908ee'::UUID, 'Alex', 'Harris', 'alex@example.com', 'password1'),
    ('66a908ee-e597-1a94-7669-868266a908e4'::UUID, 'Sam', 'Smith', 'sam@example.com', 'password2');

-- Insert conversations with UUIDs cast correctly
INSERT INTO conversations (id)
VALUES 
    ('66a908ee-e597-1a94-7669-868266a908e3'::UUID);

-- Link users to the conversation using correctly cast UUIDs
INSERT INTO user_conversations (user_id, conversation_id)
VALUES 
    ('66a908ee-e597-1a94-7669-868266a908ee'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID),
    ('66a908ee-e597-1a94-7669-868266a908e4'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID);

-- Insert messages into the conversation with UUIDs cast correctly
INSERT INTO messages (id, conversation_id, sender_id, text, timestamp)
VALUES 
    ('66a908ee-e597-1a94-7669-868266a908e5'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID, '66a908ee-e597-1a94-7669-868266a908ee'::UUID, 'This is a message that I am sending', '2024-07-30 15:35:32-04'),
    ('66aba82f-42cf-0afc-d300-73ec66aba82f'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID, '66a908ee-e597-1a94-7669-868266a908ee'::UUID, 'hi', '2024-08-01 11:22:23-04'),
    ('66abae8b-42cf-0afc-d300-746566abae8b'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID, '66a908ee-e597-1a94-7669-868266a908ee'::UUID, 'fdssfd', '2024-08-01 11:49:31-04'),
    ('66ad2731-36ef-8f2f-a15c-85a366ad2731'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID, '66a908ee-e597-1a94-7669-868266a908e4'::UUID, 'Alex... please stop texting me', '2024-08-02 14:36:33-04'),
    ('66ad273d-36ef-8f2f-a15c-85b466ad273d'::UUID, '66a908ee-e597-1a94-7669-868266a908e3'::UUID, '66a908ee-e597-1a94-7669-868266a908ee'::UUID, 'no', '2024-08-02 14:36:45-04');
