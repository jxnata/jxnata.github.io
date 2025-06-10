import { Separator } from '@/components/ui/separator'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { XLogo } from './icons'
import { DevToIcon } from './icons/social-icons'

const Footer = () => {
	return (
		<footer className='mt-20'>
			<div className='max-w-screen-md mx-auto'>
				<Separator />
				<div className='py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
					{/* Copyright */}
					<span className='text-muted-foreground'>
						&copy; {new Date().getFullYear()} Jonatã Oliveira. All rights reserved.
					</span>

					<div className='flex items-center gap-5 text-muted-foreground'>
						<Link to='https://github.com/jxnata' target='_blank'>
							<Github className='h-5 w-5' />
						</Link>
						<Link to='https://dev.to/jxnata' target='_blank'>
							<DevToIcon className='h-5 w-5' />
						</Link>
						<Link to='https://x.com/jxnata' target='_blank'>
							<XLogo className='h-5 w-5' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
