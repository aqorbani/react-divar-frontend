import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "src/services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/numbers";

const MyPostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["myposts"],
    queryFn: getMyPosts,
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      <h3 className="w-1/2 text-2xl font-bold mb-3 mt-6">آگهی های من</h3>
      {data.data.posts.map((item) => (
        <div
          key={item._id}
          className="w-full flex justify-between items-center p-2 shadow-md m-2 rounded"
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
            className="w-24 h-24"
          />
          <div>
            <p>{item.options.title}</p>
            <span>{item.options.content}</span>
          </div>
          <div>
            <p>{new Date(item.createdAt).toLocaleDateString("fa-IR")}</p>
            <span>{sp(item.amount)}تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostList;
