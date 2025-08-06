# সত্ত্বপথ - News Portal

A modern, dynamic news portal built with Next.js, featuring Bengali language support and a beautiful, responsive design.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Bengali Language Support**: Full support for Bengali text and typography
- **Dynamic Content**: Server-side rendering with Next.js App Router
- **News Categories**: Organized news sections (জাতীয়, আন্তর্জাতিক, খেলাধুলা, etc.)
- **Search Functionality**: Built-in search with filters
- **Social Sharing**: Share articles on social media platforms
- **Responsive Design**: Mobile-first approach with responsive layouts
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Dark Mode Ready**: Easy to implement dark mode support

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Language**: JavaScript (JSX)
- **Fonts**: Inter + Noto Sans Bengali

## 📁 Project Structure

```
News_portal/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx
│   ├── news/[slug]/page.jsx
│   └── category/[category]/page.jsx
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── NewsCard.jsx
│   └── Sidebar.jsx
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd News_portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Homepage (`/`)

- Featured news articles
- Latest news section
- Category highlights
- Trending news sidebar
- Newsletter signup

### News Detail (`/news/[slug]`)

- Full article content
- Related articles
- Social sharing buttons
- Author information
- Reading time and views

### Category Pages (`/category/[category]`)

- Category-specific news
- Filtering and sorting options
- Pagination support
- Category description

### Components

- **Header**: Navigation, search, mobile menu
- **Footer**: Links, social media, contact info
- **NewsCard**: Reusable article cards with variants
- **Sidebar**: Trending news, categories, newsletter

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... more shades
  }
}
```

### Fonts

Bengali font support is configured in `globals.css`:

```css
.bengali {
  font-family: "Noto Sans Bengali", system-ui, sans-serif;
}
```

### Content

- Replace mock data with API calls
- Add more categories and articles
- Customize Bengali text content

## 🔧 Configuration

### Next.js Config (`next.config.js`)

- Image domains for external images
- Experimental features enabled

### Tailwind Config (`tailwind.config.js`)

- Custom color palette
- Font family configurations
- Content paths

## 📊 Performance

- **Lighthouse Score**: Optimized for performance
- **SEO**: Meta tags and structured data
- **Images**: Next.js Image optimization
- **Fonts**: Optimized font loading

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Comment system
- [ ] Dark mode toggle
- [ ] Advanced search filters
- [ ] News letter subscription
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] PWA features
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Email: info@sottvopath.com
- Phone: +880 1234-567890

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Unsplash for placeholder images
- Google Fonts for typography

---

**সত্ত্বপথ** - Your trusted source for the latest news and updates from Bangladesh and around the world.
