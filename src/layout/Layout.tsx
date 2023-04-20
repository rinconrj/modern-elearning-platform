import Header from "~/components/Header/Header";


const Layout = ({ children }: {
  children: any;
}) => {

  return (
    <div className="page" id="page">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
