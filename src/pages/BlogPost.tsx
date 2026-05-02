import { useParams } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";

const BlogPost = () => {
  const { slug } = useParams();
  useSeo({ title: `Artigo ${slug}` });
  return <div className="min-h-screen pt-20 px-5 text-white">Artigo: {slug}</div>;
};
export default BlogPost;