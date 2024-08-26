const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="title">The Developer Weather Report</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/report">About</a>
                <a href="/login" style={{
                    color: "black",
                    backgroundColor: "#ffdb3d",
                    borderRadius: "5px"
                }}>Log In</a>  
                <a href="/signup" style={{
                    color: "white",
                    backgroundColor: "#000000",
                    borderRadius: "5px"
                }}>Sign Up</a>  
            </div>
        </nav>
    );
}

export default Navbar;