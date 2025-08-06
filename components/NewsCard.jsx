import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, Eye } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

const NewsCard = ({ article, variant = 'default' }) => {
  const {
    id,
    title,
    excerpt,
    content,
    image,
    category,
    author,
    publishedAt,
    readTime,
    views,
    slug
  } = article

  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
  }

  if (variant === 'featured') {
    return (
      <Link href={`/news/${slug}`} className="group">
        <article className="news-card overflow-hidden">
          <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
            <Image
              src={image || 'https://via.placeholder.com/600x400?text=News+Image'}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="category-badge">{category}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 line-clamp-3">{excerpt}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(publishedAt)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{views} views</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link href={`/news/${slug}`} className="group">
        <article className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={image || 'https://via.placeholder.com/96x96?text=News'}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="category-badge text-xs">{category}</span>
              <span className="text-xs text-gray-500">{formatDate(publishedAt)}</span>
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-1">{excerpt}</p>
          </div>
        </article>
      </Link>
    )
  }

  // Default variant
  return (
    <Link href={`/news/${slug}`} className="group">
      <article className="news-card">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || 'https://via.placeholder.com/400x300?text=News+Image'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="category-badge">{category}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              <span>{author}</span>
              <span>•</span>
              <span>{formatDate(publishedAt)}</span>
            </div>
            <span>{readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default NewsCard 