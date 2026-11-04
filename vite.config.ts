import { copyFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBasePath(value: string | undefined) {
    const basePath = (value ?? '/').trim().replace(/^\/+|\/+$/g, '');
    return basePath ? `/${basePath}/` : '/';
}

// GitHub Pages отдаёт 404.html на прямой заход по /cases/<slug>, SPA-роутер подхватывает путь сам
function spaFallback(): Plugin {
    return {
        name: 'spa-fallback',
        apply: 'build',
        closeBundle() {
            copyFileSync('dist/index.html', 'dist/404.html');
        },
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    const base = normalizeBasePath(env.VITE_BASE_PATH);

    return {
        base,
        plugins: [react(), spaFallback()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    };
});
