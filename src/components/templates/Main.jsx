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
    <div className="flex flex-col w-full pr-4 pl-4">
      <h3 className="m-5">آخرین آگهی ها</h3>
      <hr className="mb-5" />
      <div className="flex flex-wrap w-full justify-start">
        {data?.data.posts.map((item) => (
          <div key={item._id} className="flex w-full lg:w-1/2 xl:w-1/3 p-2">
            <div className="flex justify-between w-full shadow-[rgba(0,_0,_0,_0.24)_0px_1px_2px] rounded">
              <div className="p-2 overflow-hidden">
                <p>{item.options?.title}</p>
                <div>
                  <p>{sp(item.amount)} تومان</p>
                  <span>{item.options?.city}</span>
                </div>
              </div>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
                className="w-1/3 h-full rounded-tl rounded-bl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
