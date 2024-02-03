import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.element,
  };
  return (
    <span className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mb-auto">{children}</div>
      <Footer />
    </span>
  );
};

export default Layout;
