import { ArticleCard } from '@/components/ArticleCard'
import { Article } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'

export function Blog() {
	const { data: articles } = useQuery<Article[]>({
		queryKey: ['articles'],
		queryFn: async () => {
			const response = await fetch('https://dev.to/api/articles?username=jxnata')
			return response.json()
		},
	})

	return (
		<div className='mx-auto max-w-3xl space-y-8 px-4 pt-24'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold'>Blog</h1>
				<p className='text-xl text-muted-foreground'>
					Articles and thoughts about web development, mobile development, and technology.
				</p>
			</div>

			<div className='grid gap-12 py-12'>
				{articles?.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</div>
	)
}
