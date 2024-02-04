import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "src/services/user";
import Loader from "../modules/Loader";

const MyPostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["myposts"],
    queryFn: getMyPosts,
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      <h3>آگهی های من</h3>
      {data.data.posts.map((item) => (
        <div key={item._id}>
          <img src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`} />
          <div>
            <p>{item.options.title}</p>
            <span>{item.options.content}</span>
          </div>
          <div>
            <p>{item.createdAt}</p>
            <span>{item.amount}تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostList;
