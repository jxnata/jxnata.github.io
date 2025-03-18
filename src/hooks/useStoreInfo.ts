import { useQuery } from '@tanstack/react-query'

interface AppStoreInfo {
	name: string
	description: string
	rating: number
	ratingCount: number
	price: string
	developer: string
	category: string
	size: string
	version: string
	updated: string
	screenshots: string[]
}

interface PlayStoreInfo {
	name: string
	description: string
	rating: number
	ratingCount: number
	price: string
	developer: string
	category: string
	size: string
	version: string
	updated: string
	screenshots: string[]
}

async function fetchAppStoreInfo(url: string): Promise<AppStoreInfo> {
	// Extract app ID from URL
	const appId = url.match(/id(\d+)/)?.[1]
	if (!appId) throw new Error('Invalid App Store URL')

	const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}`)
	const data = await response.json()

	if (!data.results?.[0]) throw new Error('App not found')

	const app = data.results[0]

	// Get larger screenshots by replacing the size in the URL
	const screenshots = (app.screenshotUrls || []).map((url: string) => {
		// Replace the size in the URL to get larger screenshots
		// Original URL format: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/.../100x100bb.jpg
		// We'll replace 100x100bb with 1242x2688bb for iPhone Pro Max size
		return url.replace(/\/\d+x\d+bb\.jpg$/, '/1242x2688bb.jpg')
	})

	return {
		name: app.trackName,
		description: app.description,
		rating: app.averageUserRating,
		ratingCount: app.userRatingCount,
		price: app.formattedPrice,
		developer: app.artistName,
		category: app.primaryGenreName,
		size: formatBytes(app.fileSizeBytes),
		version: app.version,
		updated: new Date(app.currentVersionReleaseDate).toLocaleDateString(),
		screenshots,
	}
}

async function fetchPlayStoreInfo(url: string): Promise<PlayStoreInfo> {
	// Extract package name from URL
	const packageName = url.match(/id=([^&]+)/)?.[1]
	if (!packageName) throw new Error('Invalid Play Store URL')

	// Using a third-party API service for Play Store data
	const response = await fetch(`https://play.google.com/store/apps/details?id=${packageName}`)
	const html = await response.text()

	// Extract information from the HTML
	// This is a simplified version and might need adjustment based on the actual HTML structure
	const name = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1] || ''
	const description = html.match(/<div[^>]*data-g-id="description"[^>]*>([^<]+)<\/div>/)?.[1] || ''
	const rating = parseFloat(html.match(/<div[^>]*data-g-id="rating"[^>]*>([^<]+)<\/div>/)?.[1] || '0')
	const ratingCount = parseInt(html.match(/<div[^>]*data-g-id="rating-count"[^>]*>([^<]+)<\/div>/)?.[1] || '0')
	const price = html.match(/<div[^>]*data-g-id="price"[^>]*>([^<]+)<\/div>/)?.[1] || 'Free'
	const developer = html.match(/<div[^>]*data-g-id="developer"[^>]*>([^<]+)<\/div>/)?.[1] || ''
	const category = html.match(/<div[^>]*data-g-id="category"[^>]*>([^<]+)<\/div>/)?.[1] || ''
	const size = html.match(/<div[^>]*data-g-id="size"[^>]*>([^<]+)<\/div>/)?.[1] || ''
	const version = html.match(/<div[^>]*data-g-id="version"[^>]*>([^<]+)<\/div>/)?.[1] || ''
	const updated = html.match(/<div[^>]*data-g-id="updated"[^>]*>([^<]+)<\/div>/)?.[1] || ''

	return {
		name,
		description,
		rating,
		ratingCount,
		price,
		developer,
		category,
		size,
		version,
		updated,
		screenshots: [],
	}
}

function formatBytes(bytes: number): string {
	if (bytes === 0) return '0 Bytes'
	const k = 1024
	const sizes = ['Bytes', 'KB', 'MB', 'GB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function useStoreInfo(appstore?: string, playstore?: string) {
	const appStoreQuery = useQuery({
		queryKey: ['appstore', appstore],
		queryFn: () => appstore ? fetchAppStoreInfo(appstore) : null,
		enabled: !!appstore,
	})

	const playStoreQuery = useQuery({
		queryKey: ['playstore', playstore],
		queryFn: () => playstore ? fetchPlayStoreInfo(playstore) : null,
		enabled: !!playstore,
	})

	return {
		appStoreInfo: appStoreQuery.data,
		playStoreInfo: playStoreQuery.data,
		isLoading: appStoreQuery.isLoading || playStoreQuery.isLoading,
		error: appStoreQuery.error || playStoreQuery.error,
	}
} 