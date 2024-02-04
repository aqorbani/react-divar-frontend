import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/services/user";
import Loader from "../modules/Loader";

const Main = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["postslist"],
    queryFn: getAllPosts,
  });
  if (isLoading) return <Loader />;
  console.log(data);
  return <div>ll</div>;
};

export default Main;
