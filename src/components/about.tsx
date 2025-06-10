import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Github, Mail, MapPin, Phone } from 'lucide-react'
import { HTMLAttributes } from 'react'

const About = () => {
	return (
		<section id='about' className='relative py-20 px-6'>
			<div className='max-w-screen-md mx-auto'>
				<div className='flex flex-col md:flex-row-reverse gap-12'>
					<ProfileImage className='hidden md:block' />

					{/* Content */}
					<div className='flex-1 md:text-left'>
						<Badge variant='secondary' className='mb-4'>
							About Me
						</Badge>
						<ProfileImage className='mt-3 mb-8 block md:hidden' />
						<h2 className='text-4xl font-bold mb-4 tracking-tight'>
							Passionate about creating impactful digital solutions
						</h2>
						<p className='text-muted-foreground mb-6 text-justify'>
							I&apos;m a developer focused on mobile applications, with strong expertise in web and
							backend development, plus blockchain technologies. I have extensive experience working with
							JavaScript/TypeScript, PHP, and Solidity. My framework expertise includes React.js, React
							Native, Express, and WordPress. I&apos;m passionate about delivering high-quality solutions
							and staying up-to-date with modern development practices.
						</p>

						{/* Contact Information */}
						<div className='mb-6 space-y-2 text-sm text-muted-foreground'>
							<div className='flex items-center gap-2'>
								<MapPin className='h-4 w-4' />
								<span>Irecê - BA, Brazil</span>
							</div>
							<div className='flex items-center gap-2'>
								<Mail className='h-4 w-4' />
								<a
									href='mailto:jxnata.dev@gmail.com'
									className='hover:text-foreground transition-colors'
								>
									jxnata.dev@gmail.com
								</a>
							</div>
							<div className='flex items-center gap-2'>
								<Phone className='h-4 w-4' />
								<a href='tel:+5574988629676' className='hover:text-foreground transition-colors'>
									(74) 98862-9676
								</a>
							</div>
						</div>

						<div className='flex flex-wrap gap-4 justify-start'>
							<Button className='rounded-full' asChild>
								<a href='https://github.com/jxnata' target='_blank' rel='noopener noreferrer'>
									<Github className='size-4 mr-2' />
									View Github
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('mt-10 w-48 h-48 md:w-64 md:h-64', className)} {...props}>
		<div className='relative w-full h-full rounded-2xl overflow-hidden bg-accent'>
			<img src='https://github.com/jxnata.png' alt='Jonatã Amorim Oliveira' className='object-cover' />
		</div>
	</div>
)
export default About
