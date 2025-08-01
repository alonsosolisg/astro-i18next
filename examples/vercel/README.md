# Astro i18next with Vercel Adapter Example

This example demonstrates how to use astro-i18next with the Vercel adapter for
server-side rendering and internationalization.

## Features

- 🌍 **Internationalization**: Support for English, French, Spanish, and German
- ⚡ **Server-Side Rendering**: Dynamic content rendering on Vercel
- 🔄 **ISR (Incremental Static Regeneration)**: Cached pages with periodic
  updates
- 🚀 **Vercel Optimized**: Configured for optimal performance on Vercel
- 📱 **Responsive Design**: Mobile-friendly layout
- 🎨 **Modern UI**: Clean and accessible design

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This example is configured for deployment on Vercel with Node.js 22.x.

### Prerequisites

- Vercel account
- Node.js 21.x or higher (specified in package.json engines)

### Deploy Steps

1. **Connect to Vercel:**

   ```bash
   npx vercel
   ```

2. **Set environment variables** (if needed):

   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add any required environment variables

3. **Deploy:**
   ```bash
   npx vercel --prod
   ```

## Configuration

### Astro Configuration

- Server-side rendering enabled
- Vercel adapter with ISR support
- 30-second function timeout
- File inclusion for data files

### i18next Configuration

- 4 locales: English, French, Spanish, German
- 2 namespaces: translation, common
- Route translations for SEO-friendly URLs
- Both server and client-side loading

## File Structure

```
vercel/
├── public/
│   └── locales/
│       ├── en/
│       ├── fr/
│       ├── es/
│       └── de/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── blog.astro
│       └── contact.astro
├── astro.config.mjs
├── astro-i18next.config.ts
├── vercel.json
└── package.json
```

## Testing

- **Local Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Preview**: `npm run preview`
- **i18n Generation**: `npm run i18n:generate`

## Performance Features

- **ISR Caching**: Pages cached for 24 hours
- **Static Assets**: Translation files cached for 1 year
- **Optimized Functions**: 30-second timeout for serverless functions
- **CDN Distribution**: Global content delivery via Vercel's edge network

## Troubleshooting

### Common Issues

1. **Function Timeout**: Increase `maxDuration` in astro.config.mjs
2. **Missing Files**: Add files to `includeFiles` in Vercel adapter config
3. **Translation Issues**: Check namespace configuration and file paths

### Support

For issues specific to this example, check the
[astro-i18next documentation](https://astro-i18next.yassinedoghri.com/) or
[Vercel documentation](https://docs.astro.build/en/guides/integrations-guide/vercel/).
