import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

const SideBar = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="shadow-md p-4 m2">
      <h2>دسته بندی ها</h2>
      <ul className="p-2">
        {data?.data.map((item) => (
          <li key={item._id} className="flex p-1 mt-2">
            <img src={`${item.icon}.svg`} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
