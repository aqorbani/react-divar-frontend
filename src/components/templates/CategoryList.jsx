import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

const CategoryList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });
  console.log({ data, isLoading });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="" />
            <h5>{item.name}</h5>
            <p>slug : {item.slug}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
