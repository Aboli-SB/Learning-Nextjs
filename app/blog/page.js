"use client";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  const posts = [
    { id: 1, title: "React Basics", slug: "react-basics" },
    { id: 2, title: "Next.js Tips", slug: "nextjs-tips" },
    { id: 3, title: "Understanding Slugs", slug: "understanding-slugs" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button onClick={()=>router.push(`/blog/${post.slug}`)}>{post.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
