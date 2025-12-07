import Header from '../../components/Header/Header.jsx';
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
