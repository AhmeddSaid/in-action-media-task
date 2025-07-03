<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/AhmeddSaid/in-action-media-task/main/assets/images/readme.png"" />
</p>

# SIDF Frontend Task Documentation

This project is a Next.js application that recreates the SIDF (Saudi Industrial Development Fund) website with enhanced features including dark mode, multi-language support, and responsive design.

## 🚀 Features

- 🎨 Pixel-perfect design implementation with smooth animations using Framer Motion
- 🌙 Dark mode support using Tailwind CSS
- 🌐 Multi-language support (Arabic and English)
- 📱 Fully responsive design across all screen sizes
- ⚡ Built with Next.js 15 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Code Quality**: ESLint, Prettier, Husky

## 📦 Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, pnpm, or bun package manager

## 🔧 Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory based on `.env.example`:

```env
NODE_ENV=development
SITE_NAME=SIDF
DEV_URL=development_url
PROD_URL=production_url
```

## 📥 Installation

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

## 🚀 Development

Run the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧹 Linting

The project uses ESLint for code linting. Run the linter:

```bash
# Using npm
npm run lint

# Using yarn
yarn lint

# Using pnpm
pnpm lint

# Using bun
bun lint
```

## 🏗️ Build

Create a production build:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build

# Using bun
bun build
```

## 🌐 Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/library` - Core application code
  - `/components` - Reusable UI components
  - `/pages` - Page-specific components
  - `/translations` - Internationalization files
  - `/utils` - Utility functions
- `/public` - Static assets and locale files

## 🌍 Internationalization

The project supports Arabic and English languages. Language files are located in:

- `/public/locales/en.json` - English translations
- `/public/locales/ar.json` - Arabic translations

## 🎨 Styling

The project uses Tailwind CSS with custom configuration for:

- Dark mode support
- Custom color schemes
- Responsive breakpoints
- Custom font families

## 🚀 Deployment

The project is optimized for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## 🔒 Pre-commit Hooks

The project uses Husky for pre-commit hooks to ensure code quality. These run automatically before each commit to maintain code standards.

## 👤 Author

- **Ahmed Said**
- Frontend Developer
- 📧 [ahmedsaidadnan@outlook.com](mailto:ahmedsaidadnan@outlook.com)
- 🌐 [ahmedsaidadnan.com](https://ahmedsaidadnan.com)
