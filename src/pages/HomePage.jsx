import Main from "src/components/templates/Main";
import SideBar from "src/components/templates/SideBar";

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};

export default HomePage;
