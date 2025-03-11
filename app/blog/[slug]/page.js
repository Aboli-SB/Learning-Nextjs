"use client";
import { useRouter, useParams } from "next/navigation";

export default function Post() {
  const { slug } = useParams();
  const router = useRouter();

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This is the content of the blog post titled "{slug}".</p>
      <button onClick={() => router.push("/blog")}>Back to Blog</button>
    </div>
  );
}
