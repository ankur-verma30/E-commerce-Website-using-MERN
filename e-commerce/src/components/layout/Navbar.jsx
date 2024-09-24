import { Link, NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link to="./" className="navbar-brand">
						<HiShoppingBag />		 <p>E-commerce App</p>
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="./" className="nav-link active">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="./category" className="nav-link">
									Category
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="./register" className="nav-link">
									Register
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="./login" className="nav-link">
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="./cart" className="nav-link">
									Cart (0)
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
