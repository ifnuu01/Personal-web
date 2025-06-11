import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../blogData";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    setPosts(blogData);
  }, []);

  const filteredPost = posts.filter((posts) =>
    posts.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPage = Math.ceil(filteredPost.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPost.slice(
    startIndex,
    startIndex + postsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <>
      <div className="w-full px-5 mt-4 flex justify-center items-center flex-col">
        <input
          type="text"
          placeholder="Cari blog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-2xl py-2 px-4 w-full lg:w-[40%] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
        />
        <div className="w-full flex flex-col items-center gap-4">
          {paginatedPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl w-full px-4 py-5 lg:w-[40%] mx-auto"
            >
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-secondary">{post.title}</h1>
                <span className="text-gray-500 text-xs">{post.date}</span>
              </div>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Link
                to={post.link}
                className="text-white hover:underline mt-4 flex justify-self-end p-2 bg-blue-300 w-fit rounded-lg"
              >
                Baca Selengkapnya
              </Link>
            </div>
          ))}
        </div>
        {/* pagination */}

        <div className="flex gap-2 mt-4 lg:justify-end w-full lg:w-[40%] mx-auto">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-300 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
            disabled={currentPage === totalPage}
            className="bg-blue-300 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogList;
