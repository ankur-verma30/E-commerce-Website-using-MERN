import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

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
			<main style={{ minHeight: "71.5vh" }}>{children}</main>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: "Ecommerce App - Shop Now",
	description: "MERN stack Ecommerce App",
	keywords: "mern,react,node,ecommerce",
	author: "Ankur Verma",
};
export default Layout;
