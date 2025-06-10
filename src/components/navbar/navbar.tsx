import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../theme-toggle'
import { NavMenu } from './nav-menu'
import { NavigationSheet } from './navigation-sheet'

const Navbar = () => {
	return (
		<nav className='fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full'>
			<div className='h-full flex items-center justify-between mx-auto px-3'>
				<Link to='/' className='flex items-center gap-2'>
					<img
						src='https://github.com/jxnata.png'
						alt='Jonatã Oliveira'
						className='h-10 w-10 rounded-full border bg-muted object-cover'
					/>
					<span className='text-md'>Jonatã Oliveira</span>
				</Link>

				{/* Desktop Menu */}
				<NavMenu className='hidden md:block' />

				<div className='flex items-center gap-2'>
					<ThemeToggle />
					<Button variant='ghost' size='icon'>
						<Github className='h-[1.2rem] w-[1.2rem] rounded-full' />
					</Button>

					{/* Mobile Menu */}
					<div className='md:hidden'>
						<NavigationSheet />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
