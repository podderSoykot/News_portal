import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import NewsCard from '../../../components/NewsCard'
import Sidebar from '../../../components/Sidebar'
import { Clock, User, Eye, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

// Mock data - replace with API calls later
const getArticleBySlug = (slug) => {
  const articles = {
    'bangladesh-new-technology-policy': {
      id: 1,
      title: 'বাংলাদেশে নতুন প্রযুক্তি নীতিমালা ঘোষণা',
      excerpt: 'সরকার কর্তৃক নতুন প্রযুক্তি নীতিমালা ঘোষণা করা হয়েছে যা দেশের ডিজিটাল ট্রান্সফরমেশনকে ত্বরান্বিত করবে।',
      content: `
        <p>বাংলাদেশ সরকার আজ একটি নতুন প্রযুক্তি নীতিমালা ঘোষণা করেছে যা দেশের ডিজিটাল ট্রান্সফরমেশনকে ত্বরান্বিত করবে। এই নীতিমালার মাধ্যমে দেশের প্রযুক্তি খাতের উন্নয়ন ঘটানো হবে এবং নতুন প্রজন্মের জন্য কর্মসংস্থানের সুযোগ সৃষ্টি হবে।</p>
        
        <h2>নীতিমালার মূল বৈশিষ্ট্যসমূহ</h2>
        <p>নতুন প্রযুক্তি নীতিমালায় নিম্নলিখিত বৈশিষ্ট্যগুলো অন্তর্ভুক্ত করা হয়েছে:</p>
        <ul>
          <li>ডিজিটাল শিক্ষার সম্প্রসারণ</li>
          <li>প্রযুক্তি স্টার্টআপের জন্য সহায়তা</li>
          <li>সাইবার সুরক্ষার উন্নয়ন</li>
          <li>ই-গভর্নেন্সের সম্প্রসারণ</li>
        </ul>
        
        <h2>প্রভাব ও সম্ভাবনা</h2>
        <p>এই নীতিমালা বাস্তবায়নের ফলে দেশের প্রযুক্তি খাতে ব্যাপক পরিবর্তন আসবে। বিশেষ করে তরুণ প্রজন্মের জন্য নতুন কর্মসংস্থানের সুযোগ সৃষ্টি হবে এবং দেশের অর্থনৈতিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করবে।</p>
        
        <p>প্রধানমন্ত্রী শেখ হাসিনা এই নীতিমালা ঘোষণা করে বলেন, "আমরা চাই বাংলাদেশ একটি ডিজিটাল দেশ হিসেবে বিশ্বে পরিচিত হোক। এই নীতিমালা সেই লক্ষ্য অর্জনে গুরুত্বপূর্ণ ভূমিকা পালন করবে।"</p>
      `,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
      category: 'প্রযুক্তি',
      author: 'আহমেদ হাসান',
      publishedAt: '2024-01-15T10:30:00Z',
      readTime: 5,
      views: 15420,
      slug: 'bangladesh-new-technology-policy',
      tags: ['প্রযুক্তি', 'ডিজিটাল বাংলাদেশ', 'সরকারি নীতি', 'শিক্ষা']
    },
    'bangladesh-cricket-success': {
      id: 2,
      title: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশের সাফল্য',
      excerpt: 'বাংলাদেশ ক্রিকেট দল আন্তর্জাতিক ম্যাচে অসাধারণ পারফরম্যান্স দেখিয়েছে।',
      content: `
        <p>বাংলাদেশ ক্রিকেট দল সম্প্রতি আন্তর্জাতিক ম্যাচে অসাধারণ পারফরম্যান্স দেখিয়েছে। দলটি দক্ষিণ আফ্রিকার বিপক্ষে সিরিজ জয়লাভ করেছে এবং বিশ্ব ক্রিকেটে বাংলাদেশের অবস্থান আরও শক্তিশালী করেছে।</p>
        
        <h2>ম্যাচের বিবরণ</h2>
        <p>তিন ম্যাচের সিরিজে বাংলাদেশ ২-১ ব্যবধানে জয়লাভ করেছে। বিশেষ করে দ্বিতীয় ম্যাচে বাংলাদেশের ব্যাটিং এবং বোলিং উভয়ই ছিল অসাধারণ।</p>
        
        <h2>খেলোয়াড়দের পারফরম্যান্স</h2>
        <p>মাশরাফি বিন মর্তুজা, সাকিব আল হাসান এবং মুশফিকুর রহিমের নেতৃত্বে বাংলাদেশ দল অসাধারণ পারফরম্যান্স দেখিয়েছে। বিশেষ করে সাকিব আল হাসান অলরাউন্ডার হিসেবে তার দক্ষতা প্রমাণ করেছেন।</p>
      `,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=500&fit=crop',
      category: 'খেলাধুলা',
      author: 'সাবরিনা আক্তার',
      publishedAt: '2024-01-15T09:15:00Z',
      readTime: 4,
      views: 12850,
      slug: 'bangladesh-cricket-success',
      tags: ['ক্রিকেট', 'বাংলাদেশ', 'সাকিব আল হাসান', 'আন্তর্জাতিক ক্রিকেট']
    }
  }
  
  return articles[slug] || null
}

const getRelatedNews = (category, currentSlug) => {
  const relatedArticles = [
    {
      id: 3,
      title: 'ঢাকায় নতুন মেট্রো রেল প্রকল্পের উদ্বোধন',
      excerpt: 'রাজধানী ঢাকায় নতুন মেট্রো রেল প্রকল্পের আনুষ্ঠানিক উদ্বোধন সম্পন্ন হয়েছে।',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
      category: 'জাতীয়',
      author: 'মোহাম্মদ রফিক',
      publishedAt: '2024-01-15T08:45:00Z',
      readTime: 6,
      views: 18930,
      slug: 'dhaka-metro-rail-inauguration'
    },
    {
      id: 4,
      title: 'বাংলাদেশে শিক্ষা খাতে নতুন বাজেট বরাদ্দ',
      excerpt: 'শিক্ষা খাতে নতুন বাজেট বরাদ্দের মাধ্যমে দেশের শিক্ষা ব্যবস্থার উন্নয়ন ঘটানো হবে।',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop',
      category: 'জাতীয়',
      author: 'ফাতেমা বেগম',
      publishedAt: '2024-01-15T07:30:00Z',
      readTime: 3,
      views: 8750,
      slug: 'education-budget-allocation'
    },
    {
      id: 5,
      title: 'বাংলাদেশি সফটওয়্যার ডেভেলপারদের আন্তর্জাতিক স্বীকৃতি',
      excerpt: 'বাংলাদেশি সফটওয়্যার ডেভেলপাররা আন্তর্জাতিক পর্যায়ে স্বীকৃতি লাভ করেছে।',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'প্রযুক্তি',
      author: 'ইমরান আহমেদ',
      publishedAt: '2024-01-15T06:15:00Z',
      readTime: 4,
      views: 6540,
      slug: 'bangladeshi-developers-recognition'
    }
  ]
  
  return relatedArticles.filter(article => article.slug !== currentSlug).slice(0, 3)
}

export default function NewsDetail({ params }) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedNews = getRelatedNews(article.category, article.slug)
  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <article className="card p-8 mb-8">
              {/* Breadcrumb */}
              <nav className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:text-primary-600">Home</Link>
                <span className="mx-2">/</span>
                <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-primary-600">
                  {article.category}
                </Link>
                <span className="mx-2">/</span>
                <span>{article.title}</span>
              </nav>

              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bengali">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views} views</span>
                  </div>
                </div>
                
                {/* Social Share */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag.toLowerCase()}`}
                      className="category-badge hover:bg-primary-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Related News */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">সম্পর্কিত সংবাদ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news) => (
                  <NewsCard key={news.id} article={news} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 