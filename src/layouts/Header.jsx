import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between w-full shadow-md">
      <div className="flex m-3">
        <Link to="/" className="p-2">
          <img src="divar.svg" />
        </Link>
        <span className="flex p-2">
          <img src="location.svg" alt="" />
          <p>تهران</p>
        </span>
      </div>
      <div className="flex m-3">
        <Link to="/auth" className="p-2">
          <span className="flex">
            <img src="profile.svg" alt="" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="p-2 text-white rounded-md bg-red-900">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
