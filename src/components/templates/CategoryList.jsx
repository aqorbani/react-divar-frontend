import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

const CategoryList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  const {
    mutate,
    data: newData,
    isPending,
    error,
  } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries("categories"),
  });
  console.log({ newData, isPending, error });

  if (isLoading) return <Loader />;

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="" />
            <h5>{item.name}</h5>
            <p>slug : {item.slug}</p>
            <button onClick={() => mutate(item._id)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
