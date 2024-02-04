import AddPost from "src/components/templates/AddPost";
import MyPostList from "src/components/templates/MyPostList";

const Dashboard = () => {
  return (
    <div className="flex">
      <AddPost />
      <MyPostList />
    </div>
  );
};

export default Dashboard;
