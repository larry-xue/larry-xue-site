import "./blog.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="my-12 w-full mdx-container">{children}</div>
}
