import { Project } from '@/lib/types'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
	project: Project
	variant?: 'default' | 'compact'
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
	return (
		<Link to={`/projects/${project.slug}`}>
			<div className='project-card'>
				<div className='flex items-start justify-between gap-8'>
					<div className='space-y-2'>
						<h3 className={variant === 'default' ? 'text-xl font-medium' : 'font-medium'}>
							{project.name}
						</h3>
						<p
							className={
								variant === 'default' ? 'text-muted-foreground' : 'text-sm text-muted-foreground'
							}
						>
							{project.description}
						</p>
						{variant === 'default' && (
							<div className='flex flex-wrap gap-2 pt-4'>
								{project.tags.map((tag) => (
									<span
										key={tag}
										className='inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs'
									>
										{tag}
									</span>
								))}
							</div>
						)}
						<div className='pt-2 text-sm hover:underline'>View Project →</div>
					</div>
					{project.image && (
						<img
							src={project.image}
							alt={project.name}
							className={variant === 'default' ? 'w-48 rounded-lg' : 'rounded-lg'}
						/>
					)}
				</div>
			</div>
		</Link>
	)
}
