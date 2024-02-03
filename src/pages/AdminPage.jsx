import CategoryForm from "src/components/templates/CategoryForm";
import CategoryList from "src/components/templates/CategoryList";

const AdminPage = () => {
  return (
    <div className="flex">
      <CategoryForm />
      <CategoryList />
    </div>
  );
};

export default AdminPage;
