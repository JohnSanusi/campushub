"use client";

// Types
export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  role: string;
  level: number;
  xp: number;
  followers: number;
  following: number;
  posts: number;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  timestamp: number;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  likes: number;
  comments: number; // Count
  timestamp: number;
}

// Seed Data
const SEED_USERS: User[] = [
  {
    id: "user_1",
    name: "Malik Williams",
    handle: "@malik_w",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
    bio: "Computer Science Major 💻 | Future Tech CEO 🚀",
    role: "Student",
    level: 12,
    xp: 2450,
    followers: 1240,
    following: 350,
    posts: 42,
  },
  {
    id: "user_2",
    name: "Nia James",
    handle: "@nia_j",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    bio: "Psychology & Art 🎨 | VP of Black Student Union",
    role: "Student",
    level: 15,
    xp: 3200,
    followers: 2800,
    following: 500,
    posts: 128,
  },
  {
    id: "user_3",
    name: "Trevon Washington",
    handle: "@tre_wash",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    bio: "Varsity Basketball 🏀 | Engineering",
    role: "Student",
    level: 8,
    xp: 1100,
    followers: 4300,
    following: 120,
    posts: 15,
  },
  {
    id: "user_4",
    name: "Keisha Robinson",
    handle: "@keisha_r",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    bio: "Med School Hopeful 🩺 | Study hard, play hard",
    role: "Student",
    level: 22,
    xp: 5600,
    followers: 890,
    following: 200,
    posts: 260,
  },
];

const SEED_POSTS: Post[] = [
  {
    id: "post_1",
    userId: "user_2",
    content:
      "Big shoutout to everyone who came to the BSU mixer last night! The energy was unmatched. 🔥✊🏾 #Community #CampusLife",
    likes: 342,
    comments: 2,
    timestamp: Date.now() - 3600000 * 2,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
  {
    id: "post_2",
    userId: "user_3",
    content:
      "Game day tomorrow! We need the whole squad in the stands. Let's get this W. 🦅🏀",
    likes: 890,
    comments: 0,
    timestamp: Date.now() - 3600000 * 5,
  },
  {
    id: "post_3",
    userId: "user_4",
    content:
      "Late night study session at the library. Coffee is my only friend right now. ☕️📚",
    likes: 56,
    comments: 0,
    timestamp: Date.now() - 3600000 * 12,
  },
];

const SEED_COMMENTS: Comment[] = [
  {
    id: "c1",
    postId: "post_1",
    userId: "user_1",
    content: "It was amazing! Cant wait for the next one.",
    timestamp: Date.now() - 3500000,
  },
  {
    id: "c2",
    postId: "post_1",
    userId: "user_3",
    content: "Def pulling up next time.",
    timestamp: Date.now() - 3400000,
  },
];

// DB Service
export const db = {
  init: () => {
    if (typeof window === "undefined") return;

    // Always ensure users are seeded if missing
    if (
      !localStorage.getItem("users") ||
      JSON.parse(localStorage.getItem("users") || "[]").length === 0
    ) {
      localStorage.setItem("users", JSON.stringify(SEED_USERS));
    }

    if (!localStorage.getItem("posts")) {
      localStorage.setItem("posts", JSON.stringify(SEED_POSTS));
    }

    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", JSON.stringify(SEED_COMMENTS));
    }

    // Force default session if none exists to prevent redirect loops for demo
    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify(SEED_USERS[0]));
    }
  },

  // Users
  getUsers: (): User[] => {
    if (typeof window === "undefined") return SEED_USERS;
    return JSON.parse(localStorage.getItem("users") || "[]");
  },

  getUser: (id: string): User | undefined => {
    const users = db.getUsers();
    return users.find((u) => u.id === id);
  },

  getCurrentUser: (): User | null => {
    if (typeof window === "undefined") return null;
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  },

  // Simple auto-login helper
  login: (email: string): User => {
    const users = db.getUsers();
    // In a real app check email, here just default to Malik if generic
    const user = users[0];
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  },

  signup: (name: string, email: string): User => {
    const newUser: User = {
      id: `user_${Date.now()}`,
      name,
      handle: `@${name.toLowerCase().replace(/\s/g, "_")}`,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=random`,
      bio: "New to CampusHub! 👋",
      role: "Student",
      level: 1,
      xp: 0,
      followers: 0,
      following: 0,
      posts: 0,
    };

    const users = db.getUsers();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return newUser;
  },

  logout: () => {
    localStorage.removeItem("currentUser");
  },

  // Posts
  getPosts: (): (Post & { user: User })[] => {
    if (typeof window === "undefined") return [];

    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const users = db.getUsers();

    return posts
      .map((post) => ({
        ...post,
        user: users.find((u) => u.id === post.userId) || SEED_USERS[0],
      }))
      .sort((a, b) => b.timestamp - a.timestamp);
  },

  getUserPosts: (userId: string): Post[] => {
    if (typeof window === "undefined") return [];
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    return posts
      .filter((p) => p.userId === userId)
      .sort((a, b) => b.timestamp - a.timestamp);
  },

  createPost: (content: string, image?: string) => {
    const currentUser = db.getCurrentUser();
    if (!currentUser) return;

    const newPost: Post = {
      id: `post_${Date.now()}`,
      userId: currentUser.id,
      content,
      image,
      likes: 0,
      comments: 0,
      timestamp: Date.now(),
    };

    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Update user stats
    const users = db.getUsers();
    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex].posts += 1;
      users[userIndex].xp += 50;
      localStorage.setItem("users", JSON.stringify(users));
      // Update session if it's the current user
      if (currentUser.id === users[userIndex].id) {
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
      }
    }
  },

  likePost: (postId: string) => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.likes += 1;
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  },

  // Comments
  getComments: (postId: string): (Comment & { user: User })[] => {
    if (typeof window === "undefined") return [];
    const comments: Comment[] = JSON.parse(
      localStorage.getItem("comments") || "[]"
    );
    const users = db.getUsers();

    return comments
      .filter((c) => c.postId === postId)
      .map((c) => ({
        ...c,
        user: users.find((u) => u.id === c.userId) || SEED_USERS[0],
      }))
      .sort((a, b) => a.timestamp - b.timestamp);
  },

  addComment: (postId: string, content: string) => {
    const currentUser = db.getCurrentUser();
    if (!currentUser) return;

    const newComment: Comment = {
      id: `c_${Date.now()}`,
      postId,
      userId: currentUser.id,
      content,
      timestamp: Date.now(),
    };

    const comments: Comment[] = JSON.parse(
      localStorage.getItem("comments") || "[]"
    );
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));

    // Update post comment count
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments += 1;
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  },
};
