# Summerlin West Homes - Luxury Real Estate Website

A professional, modern real estate website built with Next.js 15, TypeScript, and Tailwind CSS for Summerlin West Homes in Las Vegas, Nevada.

## 🏠 Project Overview

This website showcases luxury properties in Summerlin West, providing potential buyers and sellers with:

- **Property Listings**: Beautiful, responsive property showcases
- **Advanced Search**: Filter properties by price, location, features, and more
- **Agent Profiles**: Professional agent information and contact details
- **Market Insights**: Local real estate market data and trends
- **Contact Forms**: Easy communication with real estate professionals

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Headless UI + Heroicons
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- Git
- PowerShell (for Windows users)

### Installation

```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/summerlinwesthomes.com.git
cd summerlinwesthomes.com

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run verify:seo   # Print canonical URL inspection checklist
npm run push         # Quick git push with automation
```

### Agent Automation Policy

- Runtime guardrails and approval tiers: `config/agent-execution-policy.yaml`
- Human-approval runbook: `docs/automation/agent-governance.md`

## 📁 Project Structure

```
summerlinwesthomes.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
├── types/                  # TypeScript interfaces
│   └── real-estate.ts     # Real estate data types
├── lib/                    # Utility functions
│   └── utils.ts           # Common utilities
├── scripts/                # Automation scripts
│   ├── setup-github-keys.sh    # SSH/GPG setup (Linux/macOS)
│   ├── setup-github-keys.ps1   # SSH/GPG setup (Windows)
│   ├── setup-github-keys.js    # SSH/GPG setup (Node.js)
│   └── README.md               # Script documentation
├── public/                 # Static assets
├── quick-push.ps1          # Git push automation script
└── package.json            # Dependencies and scripts
```

## 🔑 Key Features

### 1. **Professional Git Automation**

- Automated SSH and GPG key setup
- Smooth git push operations
- No more pager issues or stuck terminals

### 2. **Type-Safe Development**

- Comprehensive TypeScript interfaces
- Real estate specific data types
- Form validation with Zod

### 3. **Modern UI/UX**

- Responsive design for all devices
- Smooth animations and transitions
- Accessible components

### 4. **SEO Optimized**

- Meta tags and Open Graph
- Structured data for real estate
- Performance optimized

## 🎯 Real Estate Features

### Property Search & Filtering

- Advanced search with multiple criteria
- Real-time MLS data integration
- Interactive maps and neighborhood info
- Saved searches and favorites

### Market Analysis

- Local market trends and statistics
- Property value estimates
- Comparative market analysis
- Investment opportunity insights

### Agent & Client Tools

- Professional agent profiles
- Lead management system
- Client portal access
- Automated follow-up sequences

## 🚀 Performance & SEO

### Core Web Vitals

- Lighthouse score optimization
- Image optimization and lazy loading
- Code splitting and tree shaking
- CDN integration for global performance

### SEO Features

- Structured data markup
- Meta tags optimization
- Sitemap generation
- Robots.txt configuration

## 🔧 Development Workflow

### Code Quality

- ESLint with Next.js rules
- Prettier code formatting
- TypeScript strict mode
- Pre-commit hooks

### Testing Strategy

- Unit tests for utilities
- Component testing
- E2E testing with Playwright
- Performance monitoring

## 📱 Responsive Design

### Breakpoint Strategy

- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

### Accessibility

- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- High contrast support

## 🚀 Deployment

### Vercel Integration

- Automatic deployments
- Preview environments
- Performance monitoring
- Edge function support

### Environment Management

- Environment variables
- Feature flags
- A/B testing setup
- Monitoring and alerts

## 📊 Analytics & Monitoring

### User Analytics

- Page view tracking
- User behavior analysis
- Conversion funnel tracking
- A/B test results

### Performance Monitoring

- Real user monitoring
- Error tracking
- Performance metrics
- Uptime monitoring

## 🤝 Contributing

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commits
- Maintain accessibility standards
- Test across multiple devices

### Code Review Process

- Pull request templates
- Automated checks
- Manual review requirements
- Deployment approval workflow

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: support@summerlinwesthomes.com
- **Phone**: (702) 555-0100
- **Website**: https://summerlinwesthomes.com

---

_Built with ❤️ for the Summerlin West community_
# Updated: 08/11/2025 22:25:41
