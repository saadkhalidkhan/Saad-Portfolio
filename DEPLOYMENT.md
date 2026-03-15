# Deployment Guide

This guide will help you deploy the Saad Khan Portfolio website to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Netlify
1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or latest)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

### GitHub Pages
1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Your site will be live at `https://username.github.io/repository-name`

## 🔧 Environment Setup

### Required Environment Variables
Create a `.env` file in the root directory:

```env
# Optional: Analytics
VITE_GA_TRACKING_ID=your-google-analytics-id

# Optional: Contact Form
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
```

### Custom Domain Setup

#### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

#### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

#### GitHub Pages
1. Go to repository Settings > Pages
2. Add custom domain
3. Configure DNS records

## 📱 Performance Optimization

### Pre-deployment Checklist
- [ ] Optimize images (use WebP format)
- [ ] Enable gzip compression
- [ ] Set up CDN (if needed)
- [ ] Configure caching headers
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit

### Image Optimization
Replace placeholder images with optimized versions:
- Profile image: `public/images/profile.jpg` (400x400px, WebP format)
- OG image: `public/images/og-image.jpg` (1200x630px)
- Favicon: `public/favicon.ico`

## 🔍 SEO Setup

### Google Search Console
1. Verify ownership of your domain
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor search performance

### Analytics
Add Google Analytics or other tracking:
1. Get tracking ID
2. Add to environment variables
3. Update `index.html` with tracking code

## 🛠️ Maintenance

### Regular Updates
- Update dependencies monthly
- Refresh content quarterly
- Monitor performance metrics
- Update resume and achievements

### Backup Strategy
- Repository is automatically backed up on GitHub
- Consider additional backups for critical data
- Document any custom configurations

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs for errors
- Ensure all dependencies are installed
- Verify environment variables

## 🎯 Post-Deployment

### Testing Checklist
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Dark/light mode toggle functions
- [ ] Mobile responsiveness
- [ ] Social links work
- [ ] Resume download works
- [ ] SEO meta tags display correctly

### Monitoring
- Set up uptime monitoring
- Monitor page load speeds
- Track user engagement
- Review error logs regularly

---

Your portfolio is now ready to showcase your professional journey! 🚀
