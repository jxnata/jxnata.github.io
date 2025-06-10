import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useProjects } from '@/hooks/useProjects'
import { Project } from '@/lib/types'
import { ExternalLink } from 'lucide-react'
import { useMemo } from 'react'
import { StoreButton } from './store-button'

const ProjectCard = ({ name, description, image, technologies, url, playstore, appstore }: Project) => {
	return (
		<div className='group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50'>
			{/* Project Image */}
			<div className='relative h-64 overflow-hidden bg-accent'>
				<img
					src={image}
					alt={name}
					className='object-cover h-64 w-full transition-transform duration-300 group-hover:scale-105'
				/>
			</div>

			{/* Content */}
			<div className='flex-1 flex flex-col p-6'>
				<h3 className='text-xl font-semibold mb-2'>{name}</h3>
				<p className='text-muted-foreground mb-4'>{description}</p>

				{/* Technologies */}
				<div className='flex flex-wrap gap-2 mb-6'>
					{technologies.map((tech) => (
						<Badge key={tech} variant='secondary' className='rounded-full'>
							{tech}
						</Badge>
					))}
				</div>

				{/* Actions */}
				<div className='flex gap-3 mt-auto'>
					{url && (
						<Button variant='default' className='rounded-full' asChild>
							<a href={url} target='_blank' rel='noopener noreferrer'>
								<ExternalLink className='mr-1 h-4 w-4' />
								Live Demo
							</a>
						</Button>
					)}
					{playstore && <StoreButton type='playstore' href={playstore} />}
					{appstore && <StoreButton type='appstore' href={appstore} />}
				</div>
			</div>
		</div>
	)
}

const Projects = ({ featured }: { featured?: boolean }) => {
	const { data } = useProjects()

	const projects = useMemo(() => {
		if (featured) {
			return data?.filter((project) => project.featured === featured) || []
		}

		return (
			data?.slice().sort((a, b) => {
				if (a.featured && !b.featured) return -1
				if (!a.featured && b.featured) return 1
				return 0
			}) || []
		)
	}, [data, featured])

	return (
		<section id='projects' className='relative py-20 px-6'>
			<div className='max-w-screen-md mx-auto'>
				<div className='text-center mb-12'>
					<Badge variant='secondary' className='mb-4'>
						Projects
					</Badge>
					<h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
						{featured ? 'Featured Work' : 'All Projects'}
					</h2>
					<p className='text-muted-foreground mt-2 sm:mt-4 text-lg'>
						Showcasing some of my best projects and technical achievements
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
