import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use('/api/reviews', async (req, res, next) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });

            req.on('end', async () => {
              try {
                const newReview = JSON.parse(body);
                const reviewsPath = path.resolve(__dirname, './src/data/reviews.json');

                const currentData = JSON.parse(fs.readFileSync(reviewsPath, 'utf-8'));
                currentData.push(newReview);

                fs.writeFileSync(reviewsPath, JSON.stringify(currentData, null, 4));

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, review: newReview }));
              } catch (error) {
                console.error('Error saving review:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Failed to save review' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
  },
})
