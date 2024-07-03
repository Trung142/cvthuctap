import "./home.scss";
import avata from "./images/profile_pic-1717375881676.jpg";
import affava from "./images/offcanvas-shape-1.webp";
export const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-5 p-0">
						<div className="header p-md-4 p-2">
							<div className="infomation mb-4">
								<img src={avata} alt="" className="mb-4 m-md-2" />
								<h3>Y TRUNG AYUN</h3>
								<h4>WEB DEVELOPER</h4>
							</div>
							<div className="profile">
								<div className="item_pro d-flex align-items-center">
									<h3>CONTACT</h3>
									<small></small>
								</div>
								<div className="item d-flex align-items-center">
									<i className="fa-solid fa-phone m-1 "></i>
									<span>0379422402</span>
								</div>
								<div className="item d-flex align-items-center">
									<i className="fa-solid fa-envelope m-1"></i>
									<span>trungdev47 @gmail.com</span>
								</div>
								<div className="item d-flex align-items-center">
									<i className="fa-brands fa-github m-1"></i>
									<a href="https://github.com/Trung142">github.com/Trung142</a>
								</div>
								<div className="item d-flex align-items-center">
									<i className="fa-solid fa-location-dot m-1"></i>
									<span>district 7, Ho Chi Minh City</span>
								</div>
							</div>
							<div className="skill">
								<div className="item_pro d-flex align-items-center">
									<h3>EXPERIENCE</h3>
									<small></small>
								</div>
								<div className="item_skill">
									<h4>HANDLE WITH FRONT-END</h4>
									<p>React js, CSS(sass), HTML, Javascrip, Bootstrap</p>
								</div>
								<div className="item_skill">
									<h4>HANDLE WITH BACKEND</h4>
									<p>Node js , Express, java</p>
								</div>
								<div className="item_skill">
									<h4>HANDLE WITH DATABASE</h4>
									<p>Sql server, Mysql, MongoDB</p>
								</div>
								<div className="item_skill">
									<h4>MANAGE TOOL IN BASIC SOURCE CODE</h4>
									<p>github, postman</p>
								</div>
								<div className="item_skill">
									<h4>BASIC ENGLISH, RESEARCH ENGLISH DOCUMENT SKILLS</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8 col-7 p-0">
						<div className="content  p-md-4 p-2">
							<div className="objective">
								<div className="ed_item d-flex align-items-center">
									<h3>OBJECTIVE</h3>
									<small></small>
								</div>
								<p>
									I am an active and enthusiastic software engineering student
									with a deep interest in frontend and backend development. Able
									to self-study and solve problems well. Currently looking for
									internship opportunities to improve skills in React JS and
									Node.js and contribute effectively to creative projects.
								</p>
							</div>
							<div className="education">
								<div className="ed_item d-flex align-items-center">
									<h3>EDUCATION</h3>
									<small></small>
								</div>
								<h4>INFORMATION TECHNOLAGY</h4>
								<span>Vietnam College of Industry Trade</span>
								<span>Expected to graduate in[12/2023]</span>
								<p>
									Related courses: Web Development, Software Engineering
									Principles, Database Administration.
								</p>
							</div>
							<div className="project">
								<div className="ed_item d-flex align-items-center">
									<h3>WORK EXPERIENCE</h3>
									<small></small>
								</div>
								<div className="project_1 mb-2">
									<h4>PROGRAMMER</h4>
									<h4>
										Electronic-sales-website (trung142-my-shop.vercel.app)
									</h4>
									<div className="link">
										<h3>USING TECH | REACT JS, HTML, SASS, BOOTSTRAP</h3>
										<p>
											Develop comprehensive web applications for sales
											management ,Implement features such as user
											authentication, product search and shopping cart
											functionality.
										</p>
										<span>
											<b>Demo</b> :{""}
											<a href="https://trung142-my-shop.vercel.app/">
												{" "}
												trung142-my-shop.vercel.app/
											</a>
										</span>
										<br></br>
										<span>
											<b>Source</b>:{" "}
											<a href="https://github.com/Trung142/trung142-my-shop">
												{" "}
												github.com/Trung142/ trung142-my-shop
											</a>
										</span>
									</div>
								</div>
								<div className="project_1 mb-2">
									<h4>PROGRAMMER</h4>
									<h4>Electronic-sales-website</h4>
									<div className="link">
										<h4>
											USING TECH | REACT JS, CLIENT/SERVER, RESTFUL API, NODE
											JS, MySQL
										</h4>
										<p>
											This project is an shopping website React website with
											responsive design, featuring Firebase Authentication for
											user login and registration. It Mysql Database to handle
											product display, cart management, and order placement. The
											system supports two user types: Administrator and regular
											user. Administrators have access to a dashboard for
											viewing order details, adding, updating, and deleting
											products
										</p>
										<span>
											<b>Demo</b> :{" "}
											<a href="https://youtu.be/Fu7HiHDffD8?si=V_d-QhiAHxnpVlxy">
												{" "}
												youtu.be/Fu7HiHDffD8?si=V_ d-QhiAHxnpVlxy
											</a>
										</span>
										<br></br>
										<span>
											<b>Source</b>:{" "}
											<a href="https://github.com/Trung142/Electronic-sales-website">
												{" "}
												github.com/Trung142/ Electronic-sales-website
											</a>
										</span>
									</div>
									<div className="functions">
										<h4>Description of main functions</h4>
										<ul>
											<li>
												Create a task management app to organize and track daily
												tasks and deadlines
											</li>
											<li>
												Design responsive UI using React JS with features like
												task categorization and prioritization.
											</li>
											<li>
												Implement a RESTful API with Node.js and Express to
												fully handle CRUD functionality
											</li>
											<li>
												Integrate JSON Web Tokens (JWT) to securely authenticate
												and authorize users.
											</li>
											<li>Use Postman to test APIs</li>
											<li>Mysql database</li>
											<li>Use Sequelize to Create Database</li>
											<li>Develop CMV standard code</li>
										</ul>
									</div>
								</div>
								<div className="project_1">
									<h3>PROGRAMMER</h3>
									<h4>Hair Salon Management Website</h4>
									<div className="link">
										<h4>
											USING TECH | REACT JS, CLIENT/SERVER, RESTFUL API, NODE
											JS, MySQL
										</h4>
										<p>
											This report outlines the development and implementation of
											a Hair Salon Management System (HSMS) using React.js and
											Node.js, with MySQL as the backend database.
										</p>
										<span>
											<b>Source</b>:{" "}
											<a href="https://github.com/Trung142/frond-end-reactjs">
												{" "}
												github.com/Trung142/ frond-end-reactjs
											</a>
											<br></br>
											<a href="https://github.com/Trung142/back-end-restful_api_nodjs">
												{" "}
												github.com/Trung142/ back-end-restful_api_nodjs
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="office">
					<img src={affava} alt="" />
				</div>
			</div>
		</>
	);
};
