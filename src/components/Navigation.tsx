import { BookOpen, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
	return (
		<nav className='fixed top-0 z-50 w-full border-b border-b-transparent bg-background/80 backdrop-blur'>
			<div className='mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4'>
				<div className='flex items-center gap-6'>
					<Link to='/' className='text-sm'>
						Jonatã Oliveira
					</Link>
					<nav className='flex items-center gap-6'>
						<Link
							to='/projects'
							className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground'
						>
							<FolderGit2 className='h-4 w-4' />
							Projects
						</Link>
						<Link
							to='/blog'
							className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground'
						>
							<BookOpen className='h-4 w-4' />
							Blog
						</Link>
					</nav>
				</div>
				<ThemeToggle />
			</div>
		</nav>
	)
}
