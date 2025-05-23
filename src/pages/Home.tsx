import { ArticleCard } from '@/components/ArticleCard'
import { ProjectCard } from '@/components/ProjectCard'
import { SocialButton } from '@/components/SocialButton'
import { DevToIcon, GitHubIcon, XIcon } from '@/components/icons/SocialIcons'
import { useProjects } from '@/hooks/useProjects'
import { SOCIAL_LINKS } from '@/lib/constants'
import { Article } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight, BookOpen, FolderGit2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
	const { data: projects } = useProjects()

	const { data: articles } = useQuery<Article[]>({
		queryKey: ['articles'],
		queryFn: async () => {
			const response = await fetch('https://dev.to/api/articles?username=jxnata')
			return response.json()
		},
	})

	// Filter featured projects first, then take the first 3
	const featuredProjects = projects?.filter((project) => project.featured) || []
	const displayProjects = featuredProjects.length > 0 ? featuredProjects.slice(0, 3) : projects?.slice(0, 3) || []

	return (
		<div className='mx-auto max-w-3xl space-y-24 px-4 pt-24'>
			<section className='space-y-4'>
				<div className='flex flex-col items-start gap-4'>
					<img
						src='https://github.com/jxnata.png'
						alt='Jonatã Oliveira'
						className='h-24 w-24 rounded-full border bg-muted object-cover'
					/>
					<div className='space-y-4'>
						<h1 className='text-2xl font-medium'>Jonatã Oliveira</h1>
						<p className='max-w-xl text-muted-foreground'>
							I'm a web and mobile developer specializing in Android and iOS applications. I have advanced
							knowledge in JavaScript, TypeScript, React.js, React Native, Expo, PHP, and Solidity.
						</p>
					</div>
				</div>
			</section>

			<section className='space-y-8'>
				<h2 className='flex items-center gap-2 text-lg'>
					<FolderGit2 className='h-5 w-5' />
					Selected projects
				</h2>
				<div className='grid gap-12'>
					{displayProjects.map((project) => (
						<ProjectCard key={project.name} project={project} variant='compact' />
					))}
				</div>
				<div className='pt-4'>
					<Link to='/projects' className='flex items-center gap-1 text-sm hover:underline'>
						View all projects
						<ArrowRight className='h-4 w-4' />
					</Link>
				</div>
			</section>

			<section className='space-y-8'>
				<h2 className='flex items-center gap-2 text-lg'>
					<BookOpen className='h-5 w-5' />
					Articles
				</h2>
				<div className='grid gap-12'>
					{articles?.slice(0, 3).map((article) => (
						<ArticleCard key={article.id} article={article} variant='compact' />
					))}
				</div>
				<div className='pt-4'>
					<Link to='/blog' className='flex items-center gap-1 text-sm hover:underline'>
						View all articles
						<ArrowRight className='h-4 w-4' />
					</Link>
				</div>
			</section>

			<section className='space-y-4 border-t py-12 mb-8'>
				<h2 className='flex items-center gap-2 text-lg'>
					<Users className='h-5 w-5' />
					Follow me
				</h2>
				<p className='text-sm text-muted-foreground'>
					I regularly share my professional or personal updates on Dev.to and other social media!
				</p>
				<div className='flex flex-wrap gap-4'>
					<SocialButton href={SOCIAL_LINKS.devto} icon={<DevToIcon />} className='bg-muted'>
						Dev.to
					</SocialButton>
					<SocialButton href={SOCIAL_LINKS.github} icon={<GitHubIcon />} className='bg-muted'>
						GitHub
					</SocialButton>
					<SocialButton href={SOCIAL_LINKS.twitter} icon={<XIcon />} className='bg-muted'>
						@jxnata
					</SocialButton>
				</div>
			</section>
		</div>
	)
}
