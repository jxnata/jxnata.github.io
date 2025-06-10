import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
}

const MobileNavMenu = () => (
	<NavigationMenu>
		<NavigationMenuList className='gap-3 space-x-0 flex-col items-start'>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<SheetClose asChild>
						<button
							onClick={() => scrollToSection('about')}
							className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
						>
							About
						</button>
					</SheetClose>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<SheetClose asChild>
						<button
							onClick={() => scrollToSection('experience')}
							className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
						>
							Experience
						</button>
					</SheetClose>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<SheetClose asChild>
						<button
							onClick={() => scrollToSection('projects')}
							className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
						>
							Projects
						</button>
					</SheetClose>
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
)

export const NavigationSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='rounded-full'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className='pt-3 px-6'>
				<Link to='/' className='flex items-center gap-2'>
					<img
						src='https://github.com/jxnata.png'
						alt='Jonatã Oliveira'
						className='h-10 w-10 rounded-full border bg-muted object-cover'
					/>
					<span className='text-md'>Jonatã Oliveira</span>
				</Link>
				<div className='mt-12'>
					<MobileNavMenu />
				</div>
			</SheetContent>
		</Sheet>
	)
}
