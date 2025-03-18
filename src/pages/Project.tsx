import { useProject } from '@/hooks/useProjects'
import { useParams } from 'react-router-dom'

export function Project() {
	const { id } = useParams()
	const { data: project } = useProject(id!)

	if (!project) {
		return <div>Loading...</div>
	}

	return (
		<div className='mx-auto max-w-3xl space-y-8 px-4 pt-24'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold'>{project.name}</h1>
				<p className='text-xl text-muted-foreground'>{project.description}</p>
			</div>

			<div className='flex flex-wrap gap-2'>
				{project.tags.map((tag) => (
					<span
						key={tag}
						className='inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium'
					>
						{tag}
					</span>
				))}
			</div>

			{project.image && <img src={project.image} alt={project.name} className='rounded-lg border bg-muted' />}

			<div className='flex gap-4'>
				{project.url && (
					<a
						href={project.url}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center text-sm font-medium text-primary hover:underline'
					>
						View Project
					</a>
				)}
				{project.appstore && (
					<a
						href={project.appstore}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center text-sm font-medium text-primary hover:underline'
					>
						App Store
					</a>
				)}
				{project.playstore && (
					<a
						href={project.playstore}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center text-sm font-medium text-primary hover:underline'
					>
						Play Store
					</a>
				)}
			</div>
		</div>
	)
}
