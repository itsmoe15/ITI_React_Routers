import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar() {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    async function getCategories() {
      let res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
      console.log(res.data);
    }
    getCategories();
  }, []);

  return (
    <aside>
      <h2>Filter by Category</h2>
      <Link to="/shop">All</Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {categories.map((category) => (
        <NavLink key={category.slug} to={`/shop/category/${category.slug}`}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
