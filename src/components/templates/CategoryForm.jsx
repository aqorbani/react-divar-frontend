import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "src/services/admin";

const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isPending, error, data } = useMutation({
    mutationFn: addCategory,
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return;

    mutate(form);
  };
  return (
    <form
      className="flex flex-col w-1/3 m-3 shadow-md p-4 rounded"
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <h3 className="w-1/2 text-2xl font-bold mb-3">دسته بندی جدید</h3>
      {data?.status === 201 && (
        <p className="p-2 text-green-900 bg-green-100 rounded">
          دسته بندی با موفقیت افزوده شد.
        </p>
      )}
      {!!error && (
        <p className="p-2 text-red-900 bg-red-100 rounded">
          افزودن دسته بندی با مشکل مواجه شد.
        </p>
      )}
      <label className="mt-4 p-1" htmlFor="name">
        نام دسته بندی
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="name"
        id="name"
      />
      <label className="mt-4 p-1" htmlFor="slug">
        اسلاگ
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="slug"
        id="slug"
      />
      <label className="mt-4 p-1" htmlFor="icon">
        آیکون
      </label>
      <input
        className="w-full rounded focus:border-gray-900"
        type="text"
        name="icon"
        id="icon"
      />
      <button
        className="w-full text-white bg-red-900 p-2 rounded mt-6"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "در حال افزودن..." : "ثبت"}
      </button>
    </form>
  );
};

export default CategoryForm;
