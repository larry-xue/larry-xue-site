import React from "react";
import { getPostsMetadata } from "@/utils/posts";
import { Card, CardBody, CardFooter, Chip, Image, Link } from "@nextui-org/react";

export default function Blog() {
  const posts = getPostsMetadata();

  return <div className="w-full">
    <div
      className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] text-center font-black tracking-[-0.2rem] transition-all duration-300">
      Blog & Notes</div>

    {posts.map((post) => (
      <Card
        key={post.id}
        shadow="sm"
        className="mb-10"
      >
        <CardBody className="text-center transition-all duration-300 hover:text-shadow-3">
          <Image
            shadow="sm"
            isZoomed
            radius="lg"
            width="100%"
            alt={post.title}
            className="w-full object-cover h-[140px]"
            src={post.ogImage}
          />
          <h4
            className="mt-1 font-serif font-heading text-3xl transition-all duration-300">
            {post.title}</h4>
          <p
            className="text-lg font-mono transition-all duration-300">
            {post.description}</p>
        </CardBody>
        <CardFooter className="flex justify-between text-xs text-gray-500 transition-all duration-300">
          <Chip variant="light" color="secondary">{post.date}</Chip>
          <Link href={post.id} className="hover:text-shadow-3" color="primary">
            Read More
          </Link>
        </CardFooter>
      </Card>
    ))}
  </div >;
}
