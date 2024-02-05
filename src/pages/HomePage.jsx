import Main from "src/components/templates/Main";
import SideBar from "src/components/templates/SideBar";

const HomePage = () => {
  return (
    <div className="flex-col w-full md:flex md:flex-row">
      <SideBar />
      <Main />
    </div>
  );
};

export default HomePage;
