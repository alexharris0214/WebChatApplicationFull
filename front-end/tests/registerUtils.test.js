import { describe, it, expect, vi, beforeEach, afterEach} from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { validateRegisterInputs, registerUser } from '../src/utils/RegisterUtils'
import { API_URL } from '../src/constants'; // Adjust the path to your constants file

describe('validateRegisterInputs', () => {
  it('should return true if all inputs are filled', () => {
    const result = validateRegisterInputs('John', 'Doe', 'john.doe@example.com', 'password123');
    expect(result).toBe(true);
  });

  it('should return false if any input is empty', () => {
    const result = validateRegisterInputs('John', '', 'john.doe@example.com', 'password123');
    expect(result).toBe(false);
  });
});

describe('registerUser', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    mock.restore();
    vi.restoreAllMocks();
  });

  it('should alert if inputs are not valid', async () => {
    const userId = await registerUser('', 'Doe', 'john.doe@example.com', 'password123');
    expect(window.alert).toHaveBeenCalledWith('Not all fields are filled');
    expect(userId).toBeUndefined();
  });

  it('should return userId if registration is successful', async () => {
    const mockResponse = { userId: 123 };
    mock.onPost(`${API_URL}/api/users/register`).reply(200, mockResponse);

    const userId = await registerUser('John', 'Doe', 'john.doe@example.com', 'password123');
    
    expect(userId).toBe(123);
  });

  it('should return -1 if registration fails', async () => {
    mock.onPost(`${API_URL}/api/users/register`).reply(500);

    const userId = await registerUser('John', 'Doe', 'john.doe@example.com', 'password123');

    expect(userId).toBe(-1);
  });
});
