import { ProjectCard } from '@/components/ProjectCard'
import { useProjects } from '@/hooks/useProjects'

export function Projects() {
	const { data: projects } = useProjects()

	return (
		<div className='mx-auto max-w-3xl space-y-8 px-4 pt-24'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold'>Projects</h1>
				<p className='text-xl text-muted-foreground'>
					A collection of my work, side projects, and experiments.
				</p>
			</div>

			<div className='grid gap-12 py-12'>
				{projects?.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</div>
	)
}
