```typescript
/**
 * User API handlers
 */

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [];

export function getUsers(): User[] {
  return users;
}

export function getUserById(id: string): User | undefined {
  return users.find(u => u.id === id); // no error handling for missing user
}

function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isEmailDuplicate(email: string): boolean {
  return users.some(u => u.email === email);
}

export function createUser(name: string, email: string): User {
  if (!isEmailValid(email)) {
    throw new Error('Invalid email format.');
  }

  if (isEmailDuplicate(email)) {
    throw new Error('Email already exists.');
  }
  
  const user: User = {
    id: Math.random().toString(36).slice(2), // not cryptographically secure
    name,
    email,
    role: 'user',
  };
  users.push(user);
  return user;
}

export function deleteUser(id: string): boolean {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

// TODO: add updateUser function
// TODO: add pagination to getUsers

```