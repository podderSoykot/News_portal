import Link from 'next/link'
import { TrendingUp, Hash, Calendar } from 'lucide-react'

const Sidebar = ({ trendingNews = [], categories = [], popularTags = [] }) => {
  return (
    <aside className="space-y-8">
      {/* Trending News */}
      <div className="card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary-600" />
          <h3 className="font-semibold text-gray-900">Trending Now</h3>
        </div>
        
        <div className="space-y-4">
          {trendingNews.map((news, index) => (
            <Link key={news.id} href={`/news/${news.slug}`} className="group">
              <article className="flex space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm">
                    {news.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{news.category}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{news.views} views</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
        
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                <span className="text-gray-700 group-hover:text-primary-600 transition-colors bengali">
                  {category.name}
                </span>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Hash className="h-5 w-5 text-primary-600" />
          <h3 className="font-semibold text-gray-900">Popular Tags</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag.name}
              href={tag.href}
              className="inline-block bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="card p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
          <p className="text-primary-100 text-sm mb-4">
            Get the latest news delivered to your inbox
          </p>
          
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="w-full bg-white text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Articles</span>
            <span className="font-semibold text-gray-900">1,234</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Today's News</span>
            <span className="font-semibold text-gray-900">45</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Active Readers</span>
            <span className="font-semibold text-gray-900">12.5K</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar 