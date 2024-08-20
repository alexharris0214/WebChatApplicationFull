import { describe, it, expect } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginUser } from '../src/utils/LoginUtils'

describe('loginUser', () => {
  it('should return user data on successful login', async () => {
    const mock = new MockAdapter(axios);
    const email = 'test@example.com';
    const password = 'password123';
    const mockResponse = { id: 1, name: 'John Doe' };

    mock.onPost('http://localhost:3000/api/users/login').reply(200, mockResponse);

    const result = await loginUser(email, password);
    
    expect(result).toEqual(mockResponse);
  });

  it('should return -1 on login failure', async () => {
    const mock = new MockAdapter(axios);
    const email = 'test@example.com';
    const password = 'password123';

    mock.onPost('http://localhost:3000/api/users/login').reply(500);

    const result = await loginUser(email, password);
    
    expect(result).toBe(-1);
  });
});