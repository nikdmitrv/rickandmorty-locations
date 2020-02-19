import Header from "./Header";

const Layout = props => {
  return (
    <div className="layout">
      <Header></Header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
