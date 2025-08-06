import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsCard from '../components/NewsCard'
import Sidebar from '../components/Sidebar'
import { Clock, User, Eye, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock data - replace with API calls later
const featuredNews = [
  {
    id: 1,
    title: 'বাংলাদেশে নতুন প্রযুক্তি নীতিমালা ঘোষণা',
    excerpt: 'সরকার কর্তৃক নতুন প্রযুক্তি নীতিমালা ঘোষণা করা হয়েছে যা দেশের ডিজিটাল ট্রান্সফরমেশনকে ত্বরান্বিত করবে।',
    content: 'বিস্তারিত কন্টেন্ট এখানে আসবে...',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    category: 'প্রযুক্তি',
    author: 'আহমেদ হাসান',
    publishedAt: '2024-01-15T10:30:00Z',
    readTime: 5,
    views: 15420,
    slug: 'bangladesh-new-technology-policy'
  },
  {
    id: 2,
    title: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশের সাফল্য',
    excerpt: 'বাংলাদেশ ক্রিকেট দল আন্তর্জাতিক ম্যাচে অসাধারণ পারফরম্যান্স দেখিয়েছে।',
    content: 'বিস্তারিত কন্টেন্ট এখানে আসবে...',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop',
    category: 'খেলাধুলা',
    author: 'সাবরিনা আক্তার',
    publishedAt: '2024-01-15T09:15:00Z',
    readTime: 4,
    views: 12850,
    slug: 'bangladesh-cricket-success'
  },
  {
    id: 3,
    title: 'ঢাকায় নতুন মেট্রো রেল প্রকল্পের উদ্বোধন',
    excerpt: 'রাজধানী ঢাকায় নতুন মেট্রো রেল প্রকল্পের আনুষ্ঠানিক উদ্বোধন সম্পন্ন হয়েছে।',
    content: 'বিস্তারিত কন্টেন্ট এখানে আসবে...',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop',
    category: 'জাতীয়',
    author: 'মোহাম্মদ রফিক',
    publishedAt: '2024-01-15T08:45:00Z',
    readTime: 6,
    views: 18930,
    slug: 'dhaka-metro-rail-inauguration'
  }
]

const latestNews = [
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
  },
  {
    id: 6,
    title: 'বাংলাদেশে পরিবেশ সুরক্ষা নিয়ে নতুন উদ্যোগ',
    excerpt: 'পরিবেশ সুরক্ষার জন্য সরকার নতুন উদ্যোগ গ্রহণ করেছে।',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    category: 'জাতীয়',
    author: 'নুসরাত জাহান',
    publishedAt: '2024-01-15T05:00:00Z',
    readTime: 5,
    views: 5430,
    slug: 'environmental-protection-initiative'
  },
  {
    id: 7,
    title: 'বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কার',
    excerpt: 'বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে বিশেষ পুরস্কার লাভ করেছে।',
    image: 'https://images.unsplash.com/photo-1489599435383-d1f1e8f5c3c9?w=400&h=300&fit=crop',
    category: 'বিনোদন',
    author: 'রাহুল সরকার',
    publishedAt: '2024-01-15T04:30:00Z',
    readTime: 3,
    views: 4320,
    slug: 'bangladeshi-film-award'
  },
  {
    id: 8,
    title: 'বাংলাদেশে নতুন ব্যবসায়িক সুযোগ',
    excerpt: 'দেশে নতুন ব্যবসায়িক সুযোগ সৃষ্টির জন্য বিভিন্ন পদক্ষেপ নেওয়া হয়েছে।',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
    category: 'বাণিজ্য',
    author: 'আনিকা ইসলাম',
    publishedAt: '2024-01-15T03:45:00Z',
    readTime: 4,
    views: 3980,
    slug: 'new-business-opportunities'
  },
  {
    id: 9,
    title: 'বাংলাদেশি বিজ্ঞানীদের গবেষণা সাফল্য',
    excerpt: 'বাংলাদেশি বিজ্ঞানীরা গুরুত্বপূর্ণ গবেষণায় সাফল্য অর্জন করেছেন।',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
    category: 'প্রযুক্তি',
    author: 'ড. সাবরিনা হক',
    publishedAt: '2024-01-15T02:20:00Z',
    readTime: 6,
    views: 3210,
    slug: 'bangladeshi-scientists-research'
  }
]

const trendingNews = [
  { id: 1, title: 'বাংলাদেশে নতুন প্রযুক্তি নীতিমালা ঘোষণা', category: 'প্রযুক্তি', views: 15420, slug: 'bangladesh-new-technology-policy' },
  { id: 2, title: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশের সাফল্য', category: 'খেলাধুলা', views: 12850, slug: 'bangladesh-cricket-success' },
  { id: 3, title: 'ঢাকায় নতুন মেট্রো রেল প্রকল্পের উদ্বোধন', category: 'জাতীয়', views: 18930, slug: 'dhaka-metro-rail-inauguration' },
  { id: 4, title: 'বাংলাদেশে শিক্ষা খাতে নতুন বাজেট বরাদ্দ', category: 'জাতীয়', views: 8750, slug: 'education-budget-allocation' },
  { id: 5, title: 'বাংলাদেশি সফটওয়্যার ডেভেলপারদের আন্তর্জাতিক স্বীকৃতি', category: 'প্রযুক্তি', views: 6540, slug: 'bangladeshi-developers-recognition' }
]

const categories = [
  { name: 'জাতীয়', href: '/category/national', count: 156 },
  { name: 'আন্তর্জাতিক', href: '/category/international', count: 89 },
  { name: 'খেলাধুলা', href: '/category/sports', count: 234 },
  { name: 'বিনোদন', href: '/category/entertainment', count: 178 },
  { name: 'বাণিজ্য', href: '/category/business', count: 145 },
  { name: 'প্রযুক্তি', href: '/category/technology', count: 267 }
]

const popularTags = [
  { name: 'বাংলাদেশ', href: '/tag/bangladesh' },
  { name: 'ঢাকা', href: '/tag/dhaka' },
  { name: 'ক্রিকেট', href: '/tag/cricket' },
  { name: 'প্রযুক্তি', href: '/tag/technology' },
  { name: 'শিক্ষা', href: '/tag/education' },
  { name: 'স্বাস্থ্য', href: '/tag/health' },
  { name: 'পরিবেশ', href: '/tag/environment' },
  { name: 'অর্থনীতি', href: '/tag/economy' }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bengali">
              সত্ত্বপথ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আপনার বিশ্বস্ত সংবাদ উৎস - বাংলাদেশ এবং বিশ্বের সর্বশেষ খবর
            </p>
          </div>
        </section>

        {/* Featured News */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">প্রধান সংবাদ</h2>
            <Link href="/featured" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
              <span>সব দেখুন</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} article={news} variant="featured" />
            ))}
          </div>
        </section>

        {/* Main Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Latest News */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">সর্বশেষ সংবাদ</h2>
                <Link href="/latest" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
                  <span>সব দেখুন</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestNews.map((news) => (
                  <NewsCard key={news.id} article={news} />
                ))}
              </div>
            </section>

            {/* Category Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">বিভাগ অনুযায়ী</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.slice(0, 6).map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="card p-6 text-center hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors bengali">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{category.count} articles</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              trendingNews={trendingNews}
              categories={categories}
              popularTags={popularTags}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 