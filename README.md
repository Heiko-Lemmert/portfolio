# Portfolio

A modern, responsive portfolio website built with Angular 19, showcasing projects, skills, and professional experience. The site features smooth animations, multi-language support, and a dark theme with glassmorphic design elements.

## Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Multi-Language Support**: English and German translations using Transloco
- **Smooth Animations**: Custom CSS animations and transitions for engaging user interactions
- **Interactive Components**:
  - Hero section with animated gradient background
  - Projects carousel with hover effects
  - Reviews/testimonials section with animated avatar transitions
  - Skill tree visualization
  - Contact form with email integration
- **Dark Theme**: Modern dark UI with Tailwind CSS and DaisyUI
- **SEO-Optimized**: Clean semantic HTML structure

## Tech Stack

- **Framework**: [Angular 19](https://angular.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) + [DaisyUI 5](https://daisyui.com)
- **Internationalization**: [Transloco 7](https://jsverse.github.io/transloco/)
- **Testing**: Jasmine + Karma
- **Build Tool**: [Angular CLI 19](https://angular.dev/cli)
- **Additional Libraries**:
  - ngx-typed-writer (typewriter effect)
  - coloured-icons (icon library)

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Angular CLI 19.2.13

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload whenever you modify source files.

### Build for Production

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. The production build is optimized for performance and bundle size.

### Run Tests

Execute unit tests with Karma:

```bash
npm test
```

Tests are configured with Jasmine and Karma for Chrome.

## Project Structure

```
src/
├── app/
│   ├── home/                    # Main home page components
│   │   ├── hero/               # Hero section with intro
│   │   ├── about-me/           # About section
│   │   ├── projects-list/      # Projects showcase
│   │   ├── skilltree/          # Skills visualization
│   │   ├── reviews/            # Testimonials/reviews carousel
│   │   └── contacts/           # Contact section
│   ├── layout/                 # Layout components
│   │   ├── main-layout/        # Main layout wrapper
│   │   └── legal-layout/       # Legal pages layout
│   ├── legal/                  # Legal pages (imprint, privacy)
│   ├── services/               # Angular services
│   │   ├── global-data.service.ts
│   │   ├── projects.service.ts
│   │   ├── skill-list.service.ts
│   │   └── sociallinks.service.ts
│   ├── shared/                 # Shared components
│   ├── app.routes.ts           # Route configuration
│   └── app.config.ts           # App configuration
├── public/
│   ├── i18n/                   # Translation files (de.json, en.json)
│   └── images/                 # Static images
└── styles/                     # Global styles (SCSS)
```

## Configuration

### Environment Variables

Update API endpoints and configuration in `src/app/app.config.ts`.

### Translations

Add or modify translations in the JSON files:
- `public/i18n/en.json` - English translations
- `public/i18n/de.json` - German translations

### Styling

Global styles are in `src/styles.scss`. Component-specific styles use scoped SCSS files.

Tailwind CSS configuration: `tailwind.config.ts`

## Deployment

This portfolio can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

Build the project first:
```bash
npm run build
```

Then deploy the `dist/portfolio` directory to your hosting provider.

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Watch mode with live rebuilding
- `npm test` - Run unit tests
- `ng generate component <name>` - Generate new component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Heiko - Portfolio Website

## Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components)
- [Transloco i18n Guide](https://jsverse.github.io/transloco/)
