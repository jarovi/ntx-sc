import "./landing.scss";

export default function Landing() {
	return (
		<div
			className="landing"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 1, delay: 0.5 }}
		>
			<div className="wrapper">
				<div
					className="welcome"
					// initial={{ y: "100vw" }}
					// animate={{ y: 0 }}
					// transition={{
					// 	type: "spring",
					// 	duration: 2,
					// 	delay: 1,
					// }}
				>
					<div className="top">
						<h1>WELCOME TO</h1>
					</div>
					<div className="center">
						<h2>NEUROTECHX</h2>
						<h3>STUDENT CLUBS</h3>
					</div>
					<div className="bottom">
						<div className="btn-container">
							<button className="btn">ABOUT</button>
							<button className="btn">
								COMPETITION
							</button>
							<button className="btn">
								GET STARTED
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}