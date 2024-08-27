import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="title">Developer Weather Report</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create" style={{
                    color: "black",
                    backgroundColor: "#ffdb3d",
                    borderRadius: "5px",
                    fontWeight: "bold"
                }}>Create New Post</Link>  
            </div>
        </nav>
    );
}

export default Navbar;