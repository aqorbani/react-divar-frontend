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
    <>
      <div className="hidden md:block w-full md:w-1/4 lg:w-1/6 shadow-md p-4 m2">
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
      <div className="block md:hidden w-full md:w-1/4 lg:w-1/6 shadow-md p-4 m2">
        <h2>دسته بندی ها</h2>
        <select
          className="w-full lg:hidden text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-gray-800"
          onClick={(e) => console.log(e)}
        >
          {data?.data.map((item) => (
            <option key={item._id} value={item._id} className="flex p-1 mt-2">
              <img src={`${item.icon}.svg`} />
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SideBar;
