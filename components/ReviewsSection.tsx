'use client'

import { useState, useEffect, type FC } from 'react'

interface Review {
  author: string
  rating: number
  text: string
  date: string
  avatar?: string
}

const ReviewsSection: FC = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [averageRating, setAverageRating] = useState(0)
  const [loading, setLoading] = useState(true)

  // Sample reviews - Replace with dynamic data from Google API
  const sampleReviews: Review[] = [
    {
      author: 'Sarah Anderson',
      rating: 5,
      text: 'An absolutely magical stay at Sehar! The rooms are beautifully designed, the hospitality is exceptional, and the atmosphere is so peaceful. Can\'t wait to return.',
      date: '2 months ago',
    },
    {
      author: 'Raj Patel',
      rating: 5,
      text: 'Incredible experience. The Nazar room was stunning with the forest view. The staff went above and beyond to make our stay memorable. Highly recommended!',
      date: '1 month ago',
    },
    {
      author: 'Emma Wilson',
      rating: 5,
      text: 'A hidden gem in the Himalayas. The rooms are thoughtfully designed with perfect attention to detail. The sacred experiences offered here are truly transformative.',
      date: '3 weeks ago',
    },
    {
      author: 'Arjun Singh',
      rating: 4,
      text: 'Beautiful location and well-maintained rooms. The Shambala room had great ambiance. Would have loved more dining options on-site.',
      date: '2 weeks ago',
    },
    {
      author: 'Lisa Chen',
      rating: 5,
      text: 'Stayed at Family Hub with my kids. The space was perfect for our family. The staff were so welcoming and helpful. Best family vacation ever!',
      date: '1 week ago',
    },
    {
      author: 'David Kumar',
      rating: 5,
      text: 'Sehar Stay exceeded all expectations. Every detail is perfect, from the decor to the service. The Escape room was our favorite. Definitely coming back!',
      date: '5 days ago',
    },
  ]

  useEffect(() => {
    // Simulate fetching reviews
    setReviews(sampleReviews)
    
    // Calculate average rating
    const avgRating = sampleReviews.reduce((sum, review) => sum + review.rating, 0) / sampleReviews.length
    setAverageRating(Math.round(avgRating * 10) / 10)
    
    setLoading(false)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  if (loading) {
    return <div className="w-full h-96 bg-gray-100 animate-pulse" />
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Guest Reviews
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover what our guests say about their unforgettable experiences at Sehar Boutique Stay
          </p>

          {/* Rating Summary */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex gap-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-left">
              <p className="text-3xl font-bold text-foreground">{averageRating}</p>
              <p className="text-sm text-foreground/60">{reviews.length} reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-4">
                {review.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.author}</p>
                  <p className="text-xs text-foreground/60">{review.date}</p>
                </div>
                <img
                  src={review.avatar || `https://ui-avatars.com/api/?name=${review.author}&background=df6327&color=fff`}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-16 text-center">
          <a
            href="https://g.page/r/CQf7p0iJL5YLEBA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#df6327] text-[#df6327] font-semibold rounded-full hover:bg-[#df6327] hover:text-white transition duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
