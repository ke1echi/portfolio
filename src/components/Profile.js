import React from 'react';

const Profile = () => {
	return (
		<div id='profile'>
			<div id="minimize">
				<header>
					<h1>Hey, welcome</h1>
					<p style={{marginTop:'5px'}}>a Web developer</p>
				</header>
				<main>
					<div id="profilePic">
						<img src="/Image/Desert.jpg" alt=""/>
					</div>
					<div id="about">
						<p>A web developer who lives in Lagos, Nigeria. 
						I code every day and I'm always looking for an opportunity to design as well.</p>
						<p>Right now I'm immersed in MERN Stack and also love learning new things.</p>
					</div>
					<div id="skills">
						<h3>My Skills:</h3>
						<div id="skill">
							<span style={{background: '#ca2b03'}}>HTML5</span>
							<span style={{background: '#379ad6'}}>CSS3</span>
							{/* <span style={{background: '#cea11a'}}>JavaScript</span>
							<span style={{background: '#218e94'}}>React</span>
							<span style={{background: '#f5824c'}}>D3</span>
							<span style={{background: '#172c45'}}>jQuery</span>
							<span style={{background: '#5f3f88'}}>Bootstrap</span>
							<span style={{background: '#b55f8c'}}>Sass</span>
							<span style={{background: '#7649bb'}}>Redux</span>
							<span style={{background: '#76ac64'}}>Node</span>
							<span style={{background: '#f03c2e'}}>Git</span> */}
						</div>
					</div>
				</main>
				<footer>
					{/* <a href="mailto:ebusameric@gmail.com" className="icons">
						<i className="fa fa-envelope-square"></i>
						<span>Email</span>
					</a>  */}
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/sammychris" className="icons">
						<i className="fa fa-github"></i>
						<span>Github</span>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sammychrise" className="icons">
						<i className="fa fa-twitter"></i>
						<span>Twitter</span>
					</a>
				{    // eslint-disable-next-line 
					<a target="_blank" rel="noopener noreferrer" href="#" className="icons">
						<i className="fa fa-linkedin"></i>
						<span>LinkedIn</span>
					</a>
				}
				</footer>
			</div>
		</div>
	);
}

export default Profile;