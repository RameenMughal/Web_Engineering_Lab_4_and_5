import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navigation() {

  return (

    <nav className="bg-primary-700 
    dark:bg-slate-900 
    text-white 
    p-4 
    flex 
    justify-between">

      <h1 className="text-xl font-bold">

        University Portal

      </h1>

      <div className="flex gap-5">

        <Link to="/">Dashboard</Link>

        <Link to="/students">Students</Link>

        <Link to="/add">Add Student</Link>

        <Link to="/profiles">Profiles</Link>

        <DarkModeToggle />

      </div>

    </nav>

  );

}

export default Navigation;