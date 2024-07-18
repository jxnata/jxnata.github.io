import { Project } from '../../types/project'
import AppStore from '../../assets/logo-apple-appstore.svg?react'
import PlayStore from '../../assets/logo-google-playstore.svg?react'
import Site from '../../assets/link.svg?react'

const ProjectItem = ({ project }: Props) => {
	return (
		<div key={project.name} className='card w-full lg:min-h-56 lg:max-w-96 bg-base-200'>
			<div className='card-body p-6'>
				<div className='flex items-end gap-4'>
					<div className='avatar'>
						<div className='w-16 rounded-lg'>
							<img src={project.image} />
						</div>
					</div>
					<div>
						<h2 className='card-title text-lg'>{project.name}</h2>
						<div className='flex items-center gap-2 mt-1'>
							{project.inactive && (
								<div className='badge rounded p-2 py-2'>
									<small>inactive</small>
								</div>
							)}
							{project.tags.map((tag) => (
								<div key={tag} className='badge rounded p-2 py-2'>
									<small>{tag}</small>
								</div>
							))}
						</div>
					</div>
				</div>
				<p className='text-sm'>{project.description}</p>
				<div className='card-actions'>
					{project.url && (
						<a href={project.url} target='_blank' className='btn btn-sm btn-neutral'>
							<Site className='fill-base-content w-4' /> Site
						</a>
					)}
					{project.appstore && (
						<a href={project.appstore} target='_blank' className='btn btn-sm btn-neutral'>
							<AppStore className='fill-base-content w-4' /> App Store
						</a>
					)}
					{project.playstore && (
						<a href={project.playstore} target='_blank' className='btn btn-sm btn-neutral'>
							<PlayStore className='fill-base-content w-4' /> Google Play
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectItem

type Props = {
	project: Project
}
