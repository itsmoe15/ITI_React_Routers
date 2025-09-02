import { Outlet, Link } from 'react-router-dom';
import '../Navbar.module.css'

function Shop() {
  return (
    <div>
      <aside>
        <h2>Filter by Category</h2>
        <ul className="list">
          <li><Link to="">All</Link></li>
          <li><Link to="men">Men</Link></li>
          <li><Link to="women">Women</Link></li>
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Shop