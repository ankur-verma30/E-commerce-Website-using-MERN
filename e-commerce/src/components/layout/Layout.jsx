import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />

				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={author} />
				<title>{title}</title>
			</Helmet>
			<Header />
			<main style={{ minHeight: "71.5vh" }}>
				<ToastContainer />
				{children}
			</main>
			<Footer />
		</div>
	);
};
// add seo to every page
Layout.defaultProps = {
	title: "Ecommerce App - Shop Now",
	description: "MERN stack Ecommerce App",
	keywords: "mern,react,node,ecommerce",
	author: "Ankur Verma",
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	author: PropTypes.string,
};
export default Layout;
