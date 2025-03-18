import { Article } from '@/lib/types'

interface ArticleCardProps {
	article: Article
	variant?: 'default' | 'compact'
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
	return (
		<a href={article.url} target='_blank' rel='noopener noreferrer' className='group'>
			<article className='flex gap-8'>
				{article.cover_image && (
					<img
						src={article.cover_image}
						alt={article.title}
						className='h-32 w-48 rounded-lg border bg-muted object-cover'
					/>
				)}
				<div className='space-y-2'>
					<div className='text-sm text-muted-foreground'>
						{new Date(article.published_at).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</div>
					<h2
						className={
							variant === 'default'
								? 'text-xl font-medium group-hover:underline'
								: 'font-medium group-hover:underline'
						}
					>
						{article.title}
					</h2>
					<p className={variant === 'default' ? 'text-muted-foreground' : 'text-sm text-muted-foreground'}>
						{article.description}
					</p>
					{variant === 'default' && (
						<div className='flex flex-wrap gap-2 pt-4'>
							{article.tag_list.map((tag) => (
								<span
									key={tag}
									className='inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs'
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</article>
		</a>
	)
}
