import Layout from "../components/layout/layout";
const About = () => {
	return (
		<Layout title={'About Us - Ecommerce App'}>
			<div className="row cantactus">
				<div className="col-md-6">
					<img
						src="/images/about.jpeg"
						alt="about image"
						style={{ width: "100%" }}
					/>
				</div>
				<div className="col-md-4">
					<p className="text-justify mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
						numquam fuga id, incidunt temporibus, saepe sequi nostrum animi
						mollitia vel illo, voluptas aspernatur? Fuga dolorem placeat
						distinctio minus quae laborum! Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Officia facere maxime iure vitae?
						Accusamus, sed officiis! Optio id pariatur voluptatum?
					</p>
				</div>
			</div>
		</Layout>
	);
};
export default About;
