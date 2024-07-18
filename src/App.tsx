import Header from './components/header'
import ProjectItem from './components/project-item'
import projects from './data/projects.json'

function App() {
	return (
		<div className='container flex flex-col items-center pt-8 max-w-screen-2xl mx-auto p-4'>
			<Header />
			<div className='mt-8 noscrollbar flex'>
				<div className='flex flex-wrap justify-center gap-2'>
					{projects.map((project) => (
						<ProjectItem key={project.name} project={project} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
