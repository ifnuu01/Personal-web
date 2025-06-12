import { useParams } from "react-router-dom";
import blogData from "../blogData";
import Layout from "../layouts/Layout";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogData.find((item) => item.slug === slug);

  if (!post)
    return (
      <Layout>
        <div className="w-full px-5 mt-4 flex justify-center items-center flex-col">
          <div className="w-full bg-white lg:w-[40%] p-4 rounded-lg text-center shadow-lg">
            <span className="text-primary">Blog tidak ditemukan 😭</span>
          </div>
        </div>
      </Layout>
    );

  const PostComponent = post.component;

  return (
    <Layout>
      <div className="w-full px-3 mt-4 flex justify-center items-center flex-col">
        <div className="w-full lg:w-[40%] rounded-lg">
          {PostComponent ? <PostComponent /> : <div>Tidak ada konten.</div>}
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetail;
