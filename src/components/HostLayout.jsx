import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div className="max-w-xl mx-auto">
      <nav>
        <NavLink
          to="."
          className="mx-4 text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className="text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="myvans"
          className="mx-4 text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          My vans
        </NavLink>
        <NavLink
          to="reviews"
          className="text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
