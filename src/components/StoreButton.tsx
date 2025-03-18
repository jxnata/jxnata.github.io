interface StoreButtonProps {
	type: 'appstore' | 'playstore'
	href: string
	className?: string
}

export function StoreButton({ type, href, className = '' }: StoreButtonProps) {
	const images = {
		appstore:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png',
		playstore:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png',
	}

	return (
		<a href={href} target='_blank' rel='noopener noreferrer' className={`inline-block ${className}`}>
			<img
				src={images[type]}
				alt={type === 'appstore' ? 'Download on the App Store' : 'Get it on Google Play'}
				className='h-10 w-auto object-contain'
			/>
		</a>
	)
}
