// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Otros complementos...
    // Agrega el complemento CSS y configura los CSS Modules
    {
      name: 'css-modules',
      transform: (code, id) => {
        if (id.endsWith('.module.css')) {
          const { css } = require('postcss');
          const result = css`${code}`.toString();
          return {
            code: `export default ${JSON.stringify(result)};`,
            map: null,
          };
        }
      },
    },
  ],
});
