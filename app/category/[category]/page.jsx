import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import NewsCard from '../../../components/NewsCard'
import Sidebar from '../../../components/Sidebar'
import { ArrowLeft, Filter, SortAsc, SortDesc } from 'lucide-react'
import Link from 'next/link'

// Mock data - replace with API calls later
const getCategoryNews = (category) => {
  const categoryMap = {
    'national': {
      name: 'জাতীয়',
      description: 'বাংলাদেশের জাতীয় সংবাদ এবং রাজনৈতিক খবর',
      articles: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
          title: 'বাংলাদেশে পরিবেশ সুরক্ষা নিয়ে নতুন উদ্যোগ',
          excerpt: 'পরিবেশ সুরক্ষার জন্য সরকার নতুন উদ্যোগ গ্রহণ করেছে।',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
          category: 'জাতীয়',
          author: 'নুসরাত জাহান',
          publishedAt: '2024-01-15T05:00:00Z',
          readTime: 5,
          views: 5430,
          slug: 'environmental-protection-initiative'
        }
      ]
    },
    'technology': {
      name: 'প্রযুক্তি',
      description: 'প্রযুক্তি বিশ্বের সর্বশেষ খবর এবং উদ্ভাবন',
      articles: [
        {
          id: 4,
          title: 'বাংলাদেশে নতুন প্রযুক্তি নীতিমালা ঘোষণা',
          excerpt: 'সরকার কর্তৃক নতুন প্রযুক্তি নীতিমালা ঘোষণা করা হয়েছে যা দেশের ডিজিটাল ট্রান্সফরমেশনকে ত্বরান্বিত করবে।',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
          category: 'প্রযুক্তি',
          author: 'আহমেদ হাসান',
          publishedAt: '2024-01-15T10:30:00Z',
          readTime: 5,
          views: 15420,
          slug: 'bangladesh-new-technology-policy'
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
    },
    'sports': {
      name: 'খেলাধুলা',
      description: 'ক্রীড়া জগতের সর্বশেষ খবর এবং ম্যাচের ফলাফল',
      articles: [
        {
          id: 7,
          title: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশের সাফল্য',
          excerpt: 'বাংলাদেশ ক্রিকেট দল আন্তর্জাতিক ম্যাচে অসাধারণ পারফরম্যান্স দেখিয়েছে।',
          image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
          category: 'খেলাধুলা',
          author: 'সাবরিনা আক্তার',
          publishedAt: '2024-01-15T09:15:00Z',
          readTime: 4,
          views: 12850,
          slug: 'bangladesh-cricket-success'
        }
      ]
    },
    'entertainment': {
      name: 'বিনোদন',
      description: 'চলচ্চিত্র, সঙ্গীত এবং বিনোদন জগতের খবর',
      articles: [
        {
          id: 8,
          title: 'বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কার',
          excerpt: 'বাংলাদেশি চলচ্চিত্র আন্তর্জাতিক চলচ্চিত্র উৎসবে বিশেষ পুরস্কার লাভ করেছে।',
          image: 'https://images.unsplash.com/photo-1489599435383-d1f1e8f5c3c9?w=400&h=300&fit=crop',
          category: 'বিনোদন',
          author: 'রাহুল সরকার',
          publishedAt: '2024-01-15T04:30:00Z',
          readTime: 3,
          views: 4320,
          slug: 'bangladeshi-film-award'
        }
      ]
    },
    'business': {
      name: 'বাণিজ্য',
      description: 'ব্যবসায়িক খবর এবং অর্থনৈতিক সংবাদ',
      articles: [
        {
          id: 9,
          title: 'বাংলাদেশে নতুন ব্যবসায়িক সুযোগ',
          excerpt: 'দেশে নতুন ব্যবসায়িক সুযোগ সৃষ্টির জন্য বিভিন্ন পদক্ষেপ নেওয়া হয়েছে।',
          image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
          category: 'বাণিজ্য',
          author: 'আনিকা ইসলাম',
          publishedAt: '2024-01-15T03:45:00Z',
          readTime: 4,
          views: 3980,
          slug: 'new-business-opportunities'
        }
      ]
    }
  }
  
  return categoryMap[category] || null
}

export default function CategoryPage({ params }) {
  const categoryData = getCategoryNews(params.category)
  
  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bengali">
              {categoryData.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali">
              {categoryData.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter and Sort Options */}
            <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Filter:</span>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>All Articles</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  <SortDesc className="h-4 w-4" />
                  <span>Latest</span>
                </button>
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  <SortAsc className="h-4 w-4" />
                  <span>Popular</span>
                </button>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryData.articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm bg-primary-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  2
                </button>
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  3
                </button>
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  Next
                </button>
              </nav>
            </div>
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