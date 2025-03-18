import { StoreButton } from '@/components/StoreButton'
import { useProject } from '@/hooks/useProjects'
import { useStoreInfo } from '@/hooks/useStoreInfo'
import {
	Calendar,
	ChevronLeft,
	ChevronRight,
	DollarSign,
	GitBranch,
	HardDrive,
	ImageIcon,
	Star,
	Tag,
} from 'lucide-react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'

export function Project() {
	const { id } = useParams()
	const { data: project } = useProject(id!)
	const {
		appStoreInfo,
		playStoreInfo,
		isLoading: isLoadingStoreInfo,
	} = useStoreInfo(project?.appstore, project?.playstore)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: 'left' | 'right') => {
		const container = scrollContainerRef.current
		if (!container) return

		const scrollAmount = container.clientWidth * 0.8
		container.scrollBy({
			left: direction === 'left' ? -scrollAmount : scrollAmount,
			behavior: 'smooth',
		})
	}

	if (!project) {
		return <div>Loading...</div>
	}

	return (
		<div className='mx-auto max-w-3xl space-y-8 px-4 pt-24 pb-10'>
			{project.image && (
				<img src={project.image} alt={project.name} className='rounded-lg border bg-muted w-32' />
			)}

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

			<div className='flex flex-wrap items-center gap-4'>
				{project.url && (
					<a
						href={project.url}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 h-10'
					>
						View Project
					</a>
				)}
				<div className='flex flex-wrap items-center gap-4'>
					{project.appstore && <StoreButton type='appstore' href={project.appstore} />}
					{project.playstore && <StoreButton type='playstore' href={project.playstore} />}
				</div>
			</div>

			{!isLoadingStoreInfo && appStoreInfo && (
				<div className='space-y-6 rounded-lg border p-6'>
					{appStoreInfo.screenshots?.length > 0 && (
						<div className='space-y-4'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2 text-sm text-muted-foreground'>
									<ImageIcon className='h-4 w-4' />
									<span>Screenshots</span>
								</div>
								<div className='flex gap-2'>
									<button
										onClick={() => scroll('left')}
										className='rounded-full p-1 hover:bg-muted'
										aria-label='Scroll left'
									>
										<ChevronLeft className='h-4 w-4' />
									</button>
									<button
										onClick={() => scroll('right')}
										className='rounded-full p-1 hover:bg-muted'
										aria-label='Scroll right'
									>
										<ChevronRight className='h-4 w-4' />
									</button>
								</div>
							</div>
							<div ref={scrollContainerRef} className='flex gap-4 overflow-x-auto pb-4 scrollbar-hide'>
								{appStoreInfo.screenshots.map((screenshot, index) => (
									<div
										key={index}
										className='relative flex-none'
										style={{ width: 'min(80vw, 300px)' }}
									>
										<div className='relative aspect-[9/19.5] overflow-hidden rounded-[2.5rem]'>
											<img
												src={screenshot}
												alt={`${project.name} screenshot ${index + 1}`}
												className='h-full w-full object-cover'
												loading='lazy'
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					<div className='grid gap-3 text-sm'>
						<div className='flex items-center gap-2'>
							<Star className='h-4 w-4 text-yellow-500' />
							<span className='font-medium'>Rating:</span>
							<span>
								{appStoreInfo.rating} ({appStoreInfo.ratingCount} ratings)
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<DollarSign className='h-4 w-4' />
							<span className='font-medium'>Price:</span>
							<span>{appStoreInfo.price}</span>
						</div>
						<div className='flex items-center gap-2'>
							<Tag className='h-4 w-4' />
							<span className='font-medium'>Category:</span>
							<span>{appStoreInfo.category}</span>
						</div>
						<div className='flex items-center gap-2'>
							<HardDrive className='h-4 w-4' />
							<span className='font-medium'>Size:</span>
							<span>{appStoreInfo.size}</span>
						</div>
						<div className='flex items-center gap-2'>
							<GitBranch className='h-4 w-4' />
							<span className='font-medium'>Version:</span>
							<span>{appStoreInfo.version}</span>
						</div>
						<div className='flex items-center gap-2'>
							<Calendar className='h-4 w-4' />
							<span className='font-medium'>Updated:</span>
							<span>{appStoreInfo.updated}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
