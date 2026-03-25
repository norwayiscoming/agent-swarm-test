/**
 * Post API handlers
 */

interface Post {
  id: string;
  title: string;
  body: string;
  authorId: string;
  createdAt: Date;
  tags: string[];
}

const posts: Post[] = [];

export function getPosts(limit?: number): Post[] {
  if (limit) return posts.slice(0, limit);
  return posts; // returns reference to internal array - mutation risk
}

export function createPost(title: string, body: string, authorId: string, tags: string[] = []): Post {
  // no input validation
  const post: Post = {
    id: Date.now().toString(), // collision risk under load
    title,
    body,
    authorId,
    createdAt: new Date(),
    tags,
  };
  posts.push(post);
  return post;
}

export function searchPosts(query: string): Post[] {
  // TODO: implement full-text search
  return posts.filter(p =>
    p.title.includes(query) || p.body.includes(query) // case-sensitive search
  );
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(p => p.tags.includes(tag));
}
