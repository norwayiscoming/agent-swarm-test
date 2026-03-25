/**
 * Main entry point
 */

import { config } from './config';
import { getUsers, createUser } from './api/users';
import { getPosts, createPost } from './api/posts';

console.log(`Starting server on ${config.host}:${config.port}`);

// Seed some data
createUser('Alice', 'alice@example.com');
createUser('Bob', 'bob@example.com');

createPost('Hello World', 'This is a test post', 'user-1');
createPost('Getting Started', 'A guide for beginners', 'user-2', ['tutorial', 'guide']);

console.log(`Users: ${getUsers().length}`);
console.log(`Posts: ${getPosts().length}`);
