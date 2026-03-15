# Saad Khan Portfolio

A modern, elegant, and responsive personal portfolio website for Hafiz Muhammad Saad Khan — a Senior Android Engineer and Executive MBA Candidate.

## 🚀 Features

- **Modern Design**: Inspired by Apple, Linear.app, and Notion
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **SEO Optimized**: Complete SEO setup with meta tags and Open Graph
- **Performance**: Optimized for fast loading and smooth performance
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
saad-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Articles.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   ├── achievements.ts
│   │   ├── articles.ts
│   │   ├── experience.ts
│   │   └── personal.ts
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Sections

### 🏠 Hero Section
- Clean hero banner with name and tagline
- Profile image placeholder
- Social media links
- Download resume button
- Smooth background animations

### 👨‍💻 About Section
- Story-driven bio
- Technical expertise highlights
- Education information
- Relocation interests

### 💼 Experience Section
- Vertical timeline layout
- Detailed project information
- Technologies used
- Key achievements

### 🏆 Achievements Section
- Milestone cards with categories
- Statistics section
- Hover animations

### ✍️ Articles Section
- Article cards with categories
- Featured article banner
- Modal for full article reading
- Category filtering

### 📬 Contact Section
- Working contact form
- Contact information
- Availability status
- Social links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saad-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information
Update the data files in `src/data/` to customize:
- `personal.ts` - Personal information and bio
- `experience.ts` - Work experience and projects
- `achievements.ts` - Key achievements and milestones
- `articles.ts` - Published articles and content

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Customize component styles in individual component files

### Content
- Replace placeholder images in `public/` and `src/assets/`
- Update resume file path in `personal.ts`
- Modify article content in `articles.ts`

## 🌐 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## 🎯 Performance

- Optimized bundle size
- Lazy loading for images
- Smooth animations with Framer Motion
- SEO optimized with meta tags
- Fast loading with Vite

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Hafiz Muhammad Saad Khan
- Email: saad.khan@example.com
- LinkedIn: [linkedin.com/in/saad-khan](https://linkedin.com/in/saad-khan)
- GitHub: [github.com/saad-khan](https://github.com/saad-khan)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
