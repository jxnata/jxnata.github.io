import { ReactNode } from 'react'

interface SocialButtonProps {
	href: string
	icon: ReactNode
	children: ReactNode
	className?: string
}

export function SocialButton({ href, icon, children, className = '' }: SocialButtonProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ${className}`}
		>
			{icon}
			{children}
		</a>
	)
}
