import { Project } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

// Import all JSON files from the projects directory
const projectModules = import.meta.glob<Project>('@/projects/*.json', { eager: true });

export function useProjects() {
	return useQuery<Project[]>({
		queryKey: ['projects'],
		queryFn: async () => {
			// Convert the modules object into an array of projects with slugs
			return Object.entries(projectModules).map(([path, project]) => ({
				...project,
				slug: path.split('/').pop()?.replace('.json', '') || ''
			}));
		},
	});
}

export function useProject(id: string) {
	return useQuery<Project>({
		queryKey: ['project', id],
		queryFn: async () => {
			const project = Object.entries(projectModules).find(
				([path]) => path.split('/').pop()?.replace('.json', '') === id
			);
			if (!project) throw new Error('Project not found');
			return {
				...project[1],
				slug: project[0].split('/').pop()?.replace('.json', '') || ''
			};
		},
	});
} 