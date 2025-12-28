"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { db, Post, User, Comment } from "@/lib/db";
import { useAuth } from "@/context/AuthContext";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const { user, isLoading } = useAuth();
  const [posts, setPosts] = useState<(Post & { user: User })[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [comments, setComments] = useState<(Comment & { user: User })[]>([]);
  const [newComment, setNewComment] = useState("");

  // Need to force refresh often in mock env
  const loadPosts = () => {
    setPosts(db.getPosts());
  };

  useEffect(() => {
    if (!isLoading && !user) {
      // Double check if DB has a user we can auto-login
      const fallback = db.getCurrentUser();
      if (!fallback) {
        redirect("/login");
      }
    }
  }, [user, isLoading]);

  useEffect(() => {
    loadPosts();
  }, []);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    db.createPost(newPostContent);
    setNewPostContent("");
    loadPosts();
  };

  const handleLike = (postId: string) => {
    db.likePost(postId);
    loadPosts(); // Re-fetch to update UI
  };

  const toggleComments = (postId: string) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
      setComments(db.getComments(postId));
    }
  };

  const handleAddComment = (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    db.addComment(postId, newComment);
    setNewComment("");
    setComments(db.getComments(postId)); // Refresh comments
    loadPosts(); // Refresh post comment count
  };

  const stories = [
    {
      id: "s1",
      img: user?.avatar || "https://i.pravatar.cc/150",
      user: "You",
      isUser: true,
    },
    {
      id: "s2",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
      user: "Nia",
    },
    {
      id: "s3",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      user: "Trevon",
    },
    {
      id: "s4",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      user: "Keisha",
    },
  ];

  if (isLoading) return null; // Wait for Auth
  if (!user) return null; // Should redirect

  return (
    <AppLayout>
      {/* Stories Rail */}
      <div className="w-full overflow-x-auto hide-scrollbar pt-4 pb-2 px-4 border-b border-border bg-background">
        <div className="flex gap-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center space-y-1 min-w-[64px]"
            >
              <div
                className={`p-[3px] rounded-full ${
                  story.isUser ? "bg-muted" : "bg-primary"
                }`}
              >
                <div className="p-[2px] bg-background rounded-full">
                  <img
                    src={story.img}
                    alt={story.user}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-foreground">
                {story.user}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post Input */}
      <div className="p-4 border-b border-border bg-background">
        <form className="flex gap-3" onSubmit={handleCreatePost}>
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <Input
              placeholder="What's happening on campus?"
              className="border-none bg-muted/50 rounded-full px-4 h-10 focus-visible:ring-0"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
          </div>
          {newPostContent.trim() && (
            <Button
              size="icon"
              className="rounded-full w-10 h-10 shrink-0"
              type="submit"
            >
              <Send size={18} />
            </Button>
          )}
        </form>
      </div>

      {/* Feed */}
      <div className="pb-24">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-b border-border/50 pb-4 mb-4 bg-background animate-fade-in"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full bg-muted object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">{post.user.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {post.user.handle} •{" "}
                    {new Date(post.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <button className="text-muted-foreground">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-4 space-y-3">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
              {post.image && (
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between px-4 pt-4 mt-2">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 text-foreground group"
                >
                  <Heart
                    size={22}
                    className="group-hover:text-destructive group-active:scale-125 transition-all"
                  />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center gap-2 text-foreground group"
                >
                  <MessageCircle
                    size={22}
                    className={`group-hover:text-primary transition-colors ${
                      expandedPostId === post.id
                        ? "text-primary fill-primary/10"
                        : ""
                    }`}
                  />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="text-foreground hover:text-primary transition-colors">
                  <Send size={22} />
                </button>
              </div>
              <button className="text-foreground hover:text-primary transition-colors">
                <Share2 size={22} />
              </button>
            </div>

            {/* Comments Section */}
            {expandedPostId === post.id && (
              <div className="mt-4 px-4 pt-4 border-t border-border/50 bg-muted/20 pb-4">
                <div className="space-y-4 mb-4">
                  {comments.length === 0 ? (
                    <p className="text-sm text-center text-muted-foreground py-2">
                      No comments yet. Be the first!
                    </p>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3 text-sm">
                        <img
                          src={comment.user.avatar}
                          className="w-8 h-8 rounded-full object-cover shrink-0"
                        />
                        <div className="bg-muted px-3 py-2 rounded-2xl rounded-tl-none">
                          <p className="font-semibold text-xs mb-0.5">
                            {comment.user.name}
                          </p>
                          <p>{comment.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form
                  className="flex gap-2"
                  onSubmit={(e) => handleAddComment(e, post.id)}
                >
                  <Input
                    placeholder="Write a comment..."
                    className="h-9 rounded-full"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button size="sm" type="submit" className="rounded-full">
                    Post
                  </Button>
                </form>
              </div>
            )}
          </article>
        ))}
      </div>
    </AppLayout>
  );
}
