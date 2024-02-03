import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Header className="flex w-full shadow-md">
      <div>
        <Link to="/">
          <img src="divar.svg" />
        </Link>
      </div>
    </Header>
  );
};

export default Header;
