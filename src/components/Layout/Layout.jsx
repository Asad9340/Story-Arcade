import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Loader from "../../Loader/Loader";

function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state === 'loading' ? <Loader/> : <Outlet />}
      <Footer />
    </div>
  );
}

export default Layout