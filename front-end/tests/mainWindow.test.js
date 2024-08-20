import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { generateWindowHeadingFromConversation, generateMessagesFromConversation } from '../src/utils/MainWindowUtils'; // Adjust the path to your file
import { MessageComponent } from '../src/components/MessageComponent';

describe('generateWindowHeadingFromConversation', () => {
  it('should return the correct heading', () => {
    const conversation = {
      userModels: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };

    const heading = generateWindowHeadingFromConversation(conversation);
    
    expect(heading).toBe('John Doe');
  });
});

describe('generateMessagesFromConversation', () => {
  it('should generate the correct message components', () => {
    const conversation = {
      messages: [
        { text: 'Hello', timeStamp: '10:00', senderId: 1 },
        { text: 'Hi', timeStamp: '10:01', senderId: 2 },
      ]
    };
    const userId = 1;

    const { container } = render(generateMessagesFromConversation(conversation, userId));

    expect(container.textContent).toContain('Hello');
    expect(container.textContent).toContain('Hi');
  });
});
