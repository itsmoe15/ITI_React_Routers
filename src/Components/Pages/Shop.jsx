import { Outlet, Link } from 'react-router-dom';
import '../Navbar.module.css'
import SideBar from './Shop/SideBar';

function Shop() {
  return (
    <div>
      <SideBar />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Shop