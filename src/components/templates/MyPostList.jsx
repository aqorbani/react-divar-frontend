import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "src/services/user";

const MyPostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["myposts"],
    queryFn: getMyPosts,
  });
  console.log({ data, isLoading });
  return <div>MyPostList</div>;
};

export default MyPostList;
