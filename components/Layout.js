import Header from "./Header";

const Layout = props => {
  return (
    <div className="layout">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
