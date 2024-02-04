import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { getCategory } from "src/services/admin";
import { getCookie } from "src/utils/cookie";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success("آگهی ثبت شد."))
      .catch((error) => toast.error("ثبت آگهی با مشکل مواجه شد."));
  };

  return (
    <form
      className="flex flex-col w-1/3 m-3 shadow-md p-4 rounded"
      onChange={changeHandler}
    >
      <h3 className="w-1/2 text-2xl font-bold mb-3">افزودن آگهی</h3>
      {/* {data?.status === 201 && (
        <p className="p-2 text-green-900 bg-green-100 rounded">
          دسته بندی با موفقیت افزوده شد.
        </p>
      )}
      {!!error && (
        <p className="p-2 text-red-900 bg-red-100 rounded">
          افزودن دسته بندی با مشکل مواجه شد.
        </p>
      )} */}
      <label className="mt-4 p-1" htmlFor="title">
        عنوان
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="title"
        id="title"
      />
      <label className="mt-4 p-1" htmlFor="content">
        توضیحات
      </label>
      <textarea
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="content"
        id="content"
        rows="3"
      ></textarea>
      <label className="mt-4 p-1" htmlFor="amount">
        قیمت
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="amount"
        id="amount"
      />
      <label className="mt-4 p-1" htmlFor="city">
        شهر
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="city"
        id="city"
      />
      <label className="mt-4 p-1" htmlFor="category">
        دسته بندی
      </label>
      <select
        className="w-full rounded focus:border-gray-900"
        name="category"
        id="category"
      >
        {data?.data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <label className="mt-4 p-1" htmlFor="images">
        تصویر
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="file"
        name="images"
        id="images"
      />

      <button
        className="w-full text-white bg-red-900 p-2 rounded mt-6"
        type="submit"
        onClick={addHandler}
      >
        ثبت
      </button>
    </form>
  );
};

export default AddPost;
