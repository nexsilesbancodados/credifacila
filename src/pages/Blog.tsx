import { useSeo } from "@/hooks/useSeo";

const Blog = () => {
  useSeo({ title: "Blog Credifácil | Educação Financeira" });
  return <div className="min-h-screen pt-20 px-5 text-white">Blog em construção...</div>;
};
export default Blog;