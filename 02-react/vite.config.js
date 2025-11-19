import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@data': '/src/data',
			'@features': '/src/features',
			'@hooks': '/src/utils/hooks',
			'@pages': '/src/pages',
			'@shared': '/src/features/ui/shared',
			'@ui': '/src/features/ui',
			'@utils': '/src/utils'
		},
		extensions: [
			'.js', '.json', '.jsx', '.ts', '.tsx'
		]
	}
})
