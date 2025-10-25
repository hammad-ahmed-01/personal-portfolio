# Hammad Ahmed - Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, modern design, and comprehensive information about my professional experience and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Comprehensive Sections**:
  - Hero section with animated background
  - About section with detailed information
  - Skills showcase with technology icons
  - Projects gallery with live demos and GitHub links
  - Professional experience with detailed achievements
  - Startup showcase (RAISC Mental Health AI)
  - Contact section with multiple contact methods

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter, Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hammad-ahmed-01/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel (Recommended):
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📁 Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects gallery
│   ├── Experience.tsx     # Professional experience
│   ├── Startup.tsx        # Startup showcase
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer component
├── styles/
│   └── globals.css        # Global CSS with Tailwind
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient
- Secondary colors: Purple gradient
- Accent colors: Pink, Green, Yellow

### Content
Update the following files to customize content:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section content
- `components/Projects.tsx` - Project information
- `components/Experience.tsx` - Professional experience
- `components/Startup.tsx` - Startup information

### Images
Place your project images in the `public/` directory and update the image paths in the respective components.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images and assets
- Lazy loading for components
- Smooth scroll behavior
- Efficient animations with Framer Motion

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: hammad_ahmed_123@outlook.com
- **LinkedIn**: [Hammad Ahmed](https://www.linkedin.com/in/hammad-ahmed-4676a6225/)
- **GitHub**: [hammad-ahmed-01](https://github.com/hammad-ahmed-01)

---

Made with ❤️ by Hammad Ahmed
