import avatar from '../../assets/avatar.png'
import GitHub from '../../assets/logo-github.svg?react'
import LinkedIn from '../../assets/logo-linkedin.svg?react'
import Twitter from '../../assets/logo-twitter.svg?react'
import Mail from '../../assets/logo-mail.svg?react'
import Location from '../../assets/location.svg?react'

const Header = () => {
	return (
		<div className='bg-base-100 flex gap-2 flex-col items-center'>
			<div className='avatar mb-3'>
				<div className='ring-neutral ring-offset-base-100 w-24 rounded-lg ring ring-offset-2'>
					<img src={avatar} />
				</div>
			</div>
			<h2 className='card-title'>Jonatã Oliveira</h2>
			<small className='flex items-center gap-1 mb-2'>
				<Location className='w-4 fill-base-content' /> Bahia, Brazil
			</small>
			<p>web and mobile developer</p>
			<div className='card-actions mt-2'>
				<a href='https://github.com/jxnata' target='_blank' className='btn btn-square btn-sm fill-base-content'>
					<GitHub className='w-4' />
				</a>
				<a
					href='https://www.linkedin.com/in/jxnata'
					target='_blank'
					className='btn btn-square btn-sm fill-base-content'
				>
					<LinkedIn className='w-4' />
				</a>
				<a
					href='https://producthunt.com/@jxnata'
					target='_blank'
					className='btn btn-square btn-sm fill-base-content'
				>
					<div className='badge w-6 h-6 text-xs'>P</div>
				</a>
				<a
					href='https://twitter.com/jxnata'
					target='_blank'
					className='btn btn-square btn-sm fill-base-content'
				>
					<Twitter className='w-4' />
				</a>
				<a href='mailto:jxnata@proton.me' target='_blank' className='btn btn-square btn-sm fill-base-content'>
					<Mail className='w-4' />
				</a>
			</div>
		</div>
	)
}

export default Header
