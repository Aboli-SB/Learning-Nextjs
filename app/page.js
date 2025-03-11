"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Demo from "../components/ui/demo";
import React, { useEffect } from "react";
import { CountProvider, useCount } from "../components/ui/context";
import Link from "next/link";
import { useRouter } from "next/navigation";

function HomeComponent() {
  // Use context instead of useState directly
  const { count, setCount } = useCount();

  // Effect runs on every render
  useEffect(() => {
    console.log("Effect ran!");
  });

  return (
    <div className={styles.page}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Demo />
    </div>
  );
}

export default function Home() {
  const posts = [
    { id: 1, title: "React Basics", slug: "react-basics" },
    { id: 2, title: "Next.js Tips", slug: "nextjs-tips" },
    { id: 3, title: "Understanding Slugs", slug: "understanding-slugs" },
  ];
  const router = useRouter();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1>Home Page</h1>
      <p>Welcome to the blog homepage!!!</p>
      <button onClick={() => router.push("/blog")}>Visit Blog</button>
   
   
    <CountProvider>
      <HomeComponent />
    </CountProvider>  </div>
  );
}


// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Demo from "../components/ui/demo";
// import React, { useState, useEffect } from 'react';

// export default function Home() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Effect ran!");
//   }); // No dependency array



//   return (
//     <div className={styles.page}>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Demo />
//     </div>
//   );
// }

