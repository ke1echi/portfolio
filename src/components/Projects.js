import React from 'react';

const stacks = (stac) => {
	let colors = {
		react: { name: 'React', background: '#218e94' },
		html5: { name: 'HTML5', background: '#ca2b03' },
		javascript: { name: 'JavaScript', background: '#cea11a' },
		d3: { name: 'D3', background: '#f5824c' },
		sass: { name: 'Sass', background: '#b55f8c' },
		express: { name: 'Express.js', background: '#888585' },
		mongodb: { name: 'MongoDB', background: '#4aad3a' },
		css3: { name: 'CSS3', background: '#379ad6' }
	}[stac];
	return colors? colors: { name: stac, background: '#284748' };
}

const EachProject = (props) => {
	let Descript;
	let dateStr;
	let descripArr = props.project.description;
	let Skills;

	if (descripArr) {
		Descript = descripArr.split('.').map( a => <p>{a}.</p>);
		// dateStr = props.project.create_on;

		Skills = props.project.skills.map((a, i) => <span style={{background: stacks(a).background, top: i * 30}}>{stacks(a).name}</span>)
	}
	return (
		<div className="contents" style={{ backgroundColor:props.backgr }}>
			<div className="each-project">
				<a href="/#" className="project-img">
					{ Skills }
					<img src={props.project.img_url} alt="" />
				</a>
				<div className="project-info">
					{/* <h1><span>{props.project.name}</span><span className="dates">{dateStr}</span></h1> */}
					<h1><span>{props.project.name}</span><span className="dates">{dateStr}</span></h1>
					<div className="text-btn">
						<div className="text">{ Descript }</div>
						<div className="btn-container">
							<div className="buttons">
								<a target="_blank" rel="noopener noreferrer" href={props.project.code_url}>Code</a>
								<a target="_blank" rel="noopener noreferrer" href={props.project.demo_url}>Demo</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const Projects = (props) => {
	return (
		<div id='projects' ref={props.scroll}>
			<header>
				<div className='contacts'>
					<button id="all" className="active example_d" onClick={props.control}>Projects</button>
				</div>
			</header>
			<main>
				<div id="list-header">
					<nav>
						<ul>
							{/* <li id="all" className="active" onClick={props.control}>All Projects</li> */}
							{/* <li id="frontend" onClick={props.control}>Front-end</li> */}
							{/* <li id="d3" onClick={props.control}>Data visualisation</li> */}
							{/* <li id="fullstack" onClick={props.control}>Full-stack</li> */}
						</ul>
					</nav>
				</div>
				<div id="all-project" className="first">
						{	props.project.map((ele, i) => {
								if(i % 2 === 0) return <EachProject project={ele} backgr={'rgb(43, 43, 43)'} key={i} />;
								return <EachProject project={ ele } index={i} key={i} /> 
							}) 
						}
				</div>
			</main>
			<footer id="footer">
				<div style={{textAlign: 'center'}}>
					<h2>GET IN TOUCH!</h2>
					<p>
						You can always send me an<a href="mailto:mrkelechichinaka@gmail.com">Email</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Projects;