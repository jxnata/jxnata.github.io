import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu'

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
}

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
	<NavigationMenu className={cn('data-[orientation=vertical]:items-start', className)} {...props}>
		<NavigationMenuList className='gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<button
						onClick={() => scrollToSection('about')}
						className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
					>
						About
					</button>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<button
						onClick={() => scrollToSection('experience')}
						className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
					>
						Experience
					</button>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<button
						onClick={() => scrollToSection('projects')}
						className='inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
					>
						Projects
					</button>
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
)
