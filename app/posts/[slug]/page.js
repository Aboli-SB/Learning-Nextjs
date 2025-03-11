"use client";
import { useParams } from "next/navigation";

export default function Post() {
  const { slug } = useParams(); // Extract the slug from the URL

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This page is dynamically generated based on the slug: <b>{slug}</b></p>
    </div>
  );
}
