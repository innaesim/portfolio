# Portfolio

A minimal, elegant portfolio template built with Next.js 14+, featuring a pure black and white theme.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Dynamic metadata generation from JSON config
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Optimized for 90+ Lighthouse scores
- **Type Safe**: Full TypeScript coverage

## Quick Start

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Edit your information**

   Open `data/template.json`, rename to `data/portfolio.json` and update with your details:
   - Personal information (name, title, email, social links)
   - About section (summary, highlights)
   - Work experience
   - Projects
   - Skills
   - Education and certifications
   - Testimonials

4. **Add your images**

   Place your images in the `/public/images` directory:
   - `avatar.jpg` - Your profile photo
   - `projects/` - Project screenshots

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page with all sections
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   └── projects/
│       └── [slug]/page.tsx   # Individual project pages
├── components/
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/                   # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Tag.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ...
├── data/
│   └── portfolio.json        # All portfolio content
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   └── utils.ts              # Helper functions
└── public/
    ├── images/               # Your images
    │   ├── avatar.jpg
    │   └── projects/
    └── files/                # Downloadable files
        └── resume.pdf
```

## Customization

### Content

All content is controlled via `data/portfolio.json`. No code changes needed for basic customization.

**Personal Info**
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline",
    "email": "your@email.com",
    "location": "City, Country",
    "avatar": "/images/avatar.jpg",
    "resume": "/files/resume.pdf",
    "social": {
      "github": "https://github.com/username",
      "linkedin": "https://linkedin.com/in/username",
      "twitter": "https://twitter.com/username"
    }
  }
}
```

**Projects**

Each project requires a unique `slug` for URL generation:
```json
{
  "title": "Project Name",
  "slug": "project-name",
  "description": "Brief description",
  "longDescription": "Detailed description for project page",
  "image": "/images/projects/project.jpg",
  "technologies": ["Tech1", "Tech2"],
  "liveUrl": "https://project.com",
  "githubUrl": "https://github.com/user/project",
  "featured": true,
  "year": "2024"
}
```

### Styling

The portfolio uses a strict black and white color palette defined in `app/globals.css`. Modify the CSS variables to adjust colors:

```css
:root {
  --black: #000000;
  --white: #ffffff;
  --gray-900: #171717;
  /* ... */
}
```

### Sections

To hide sections, you can remove them from `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* Remove or comment out sections you don't need */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
```

## Image Optimization

### Recommended Sizes

- **Avatar**: 400x400px (square, will be displayed as 320x320)
- **Project Images**: 1200x675px (16:9 aspect ratio)

### Formats

Use modern formats for best performance:
- WebP or AVIF for photos
- PNG for logos/icons with transparency

### Compression

Compress images before adding:
- Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Target file size: < 200KB for project images, < 50KB for avatar

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Self-Hosted

```bash
npm run build
npm start
```

Or export as static:
```bash
npm run build
# Output will be in .next/ directory
```

## Performance Tips

1. **Optimize Images**: Use next/image with proper sizing
2. **Lazy Load**: Sections load as they come into view
3. **Font Optimization**: Uses next/font for zero layout shift
4. **Minimal Dependencies**: Only essential packages included

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Credits

Built with:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
