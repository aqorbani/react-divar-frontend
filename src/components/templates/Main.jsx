import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/numbers";

const Main = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["postslist"],
    queryFn: getAllPosts,
  });
  if (isLoading) return <Loader />;
  console.log(data);
  return (
    <div className="flex flex-wrap w-full md:w-3/4 lg:w-5/6">
      {data.data.posts.map((item) => (
        <div
          key={item._id}
          className="flex w-full md:w-2/5 lg:w-1/4 p-2 m-2 shadow-md rounded"
        >
          <div>
            <p>{item.options.title}</p>
            <div>
              <p>{sp(item.amount)}تومان</p>
              <span>{item.options.city}</span>
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
            className="w-32 h-32"
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
