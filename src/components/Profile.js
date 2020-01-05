import React from 'react';

const Profile = () => {
	return (
		<div id='profile'>
			<div id="minimize">
				<header>
					<h1>Kelechi Chinaka</h1>
					<p style={{marginTop:'5px'}}>Software Engineer</p>
				</header>
				<main>
					<div id="profilePic">
						<img src="Image/testing.jpg" alt=""/>
					</div>
					<div id="about">
						<p>A software engineer with experience building web and mobile applications. I'm a constant learner who enjoys problem solving.</p>
						<p>I enjoy building web applications using the MERN stack and iOS applications.</p>
					</div>
					<div id="skills">
						<h3>Programming Languages:</h3>
						<div id="skill">
							<span style={{background: '#cea11a'}}>JavaScript</span>
							<span style={{background: '#f5824c'}}>Swift</span>
							<span style={{background: '#5f3f88'}}>Python</span>
							<span style={{background: '#172c45'}}>C</span>
							<span style={{background: '#218e94'}}>Java</span>
						</div>
					</div>
					{/* <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/12lxOXrq--ik-huewpJ-bHGeVyqjL9c2EGuQJIIzuO9M/edit?usp=sharing"><button>Resume</button></a> */}
					<div class="button_cont" align="center"><a class="example_d" href="https://docs.google.com/document/d/12lxOXrq--ik-huewpJ-bHGeVyqjL9c2EGuQJIIzuO9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></div>
				</main>
				<footer>
					{/* <a href="mailto:kc@gmail.com" className="icons">
						<i className="fa fa-envelope-square"></i>
						<span>Email</span>
					</a>  */}
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/ke1echi" className="icons">
						<i className="fa fa-github"></i>
						<span>Github</span>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ke1echi" className="icons">
						<i className="fa fa-twitter"></i>
						<span>Twitter</span>
					</a>
				{    // eslint-disable-next-line 
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kelechi-chinaka-353861124/" className="icons">
						<i className="fa fa-linkedin"></i>
						<span>Linkedin</span>
					</a>
				}
				</footer>
			</div>
		</div>
	);
}

export default Profile;
