import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleArrowDown, Zap } from 'lucide-react'

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
}

const Hero = () => {
	return (
		<div className='relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden'>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					'[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
					'inset-x-0 h-full skew-y-12'
				)}
			/>
			<div className='relative z-[1] text-center max-w-screen-md'>
				<Badge className='rounded-full border-none'>
					<Zap className='fill-current' />
					Fullstack Developer - Mobile & Web
				</Badge>
				<h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight'>
					Jonatã Oliveira
				</h1>
				<p className='mt-6 text-[17px] md:text-lg'>
					Hey there! I&apos;m a Senior Developer focused on Mobile applications, but I also work with Web,
					Backend, and Blockchain development. I work with JavaScript/TypeScript, PHP, and Solidity, with
					experience in frameworks like React.js, React Native, Express, and WordPress. Let&apos;s build
					something amazing together! 🚀
				</p>
				<div className='mt-12 flex items-center justify-center gap-4'>
					<Button size='lg' className='rounded-full text-base' onClick={() => scrollToSection('about')}>
						See What I Do <CircleArrowDown className='ml-2 !h-5.5 !w-5.5' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Hero
