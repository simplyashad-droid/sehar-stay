'use client'

import { Star } from 'lucide-react'

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      author: 'Singer Abhilasha Banthia',
      initials: 'SA',
      rating: 5,
      timeAgo: '3 months ago',
      category: 'Holiday | Friends',
      text: 'A beautiful, peaceful stay away from Manali\'s chaos, surrounded by mountains and forests. Erah\'s home was so calming. From delicious Lebanese food to meditation, sound baths, and forest mandala sessions—everything was special. Truly felt like home. Highly recommended. ✨',
      ratingBreakdown: { rooms: 5, service: 5, location: 5 },
      highlights: ['Great view', 'Quiet', 'Great value'],
      images: [
        'https://via.placeholder.com/120x120?text=Room+View',
        'https://via.placeholder.com/120x120?text=Outdoor',
        'https://via.placeholder.com/120x120?text=Forest',
      ],
      bgColor: 'from-pink-50',
    },
    {
      id: 2,
      author: 'akshay mahajan',
      initials: 'AM',
      rating: 5,
      timeAgo: '4 months ago',
      category: 'Holiday | Friends',
      text: 'Sehar is one of those places that instantly makes you feel calm. The hosts, Erha and Ramji, are warm, thoughtful and make you feel genuinely cared for. They have made this place with so much heart space and love. The rooms are beautiful and very well decorated. Every corner feels thoughtfully done gives you cozy and homely vibe. Highly recommended.',
      ratingBreakdown: { rooms: 5, service: 5, location: 5 },
      highlights: ['Luxury', 'Great view', 'Romantic', 'Quiet', 'Great value', 'High-tech'],
      images: [
        'https://via.placeholder.com/120x120?text=Decor',
        'https://via.placeholder.com/120x120?text=Fireplace',
      ],
      bgColor: 'from-blue-50',
    },
    {
      id: 3,
      author: 'Meha Gupta',
      initials: 'MG',
      rating: 5,
      timeAgo: 'a year ago',
      category: 'Holiday | Solo',
      text: 'I\'m a friend of Erah\'s and had the opportunity to stay at her place as a guest. What a transformation! Every corner has something she has literally created herself, down to the tiniest details. The most tastiest, authentic Lebanese food, all made with so much love. If I had to describe her place in one word - Abundance! Erah is the best host.',
      ratingBreakdown: { rooms: 5, service: 5, location: 5 },
      highlights: ['Quiet'],
      images: [
        'https://via.placeholder.com/120x120?text=Seating',
        'https://via.placeholder.com/120x120?text=Food',
        'https://via.placeholder.com/120x120?text=Forest+Walk',
        'https://via.placeholder.com/120x120?text=Interior',
      ],
      bgColor: 'from-purple-50',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Guest Reviews</h2>
          <p className="text-lg text-foreground/70">Hear what our guests have to say about their stay</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map(review => (
            <div key={review.id} className={`bg-gradient-to-br ${review.bgColor} to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-foreground/10`}>
              {/* Review Header */}
              <div className="p-6 border-b border-foreground/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#df6327] to-[#c55a1f] flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm">{review.author}</p>
                      <p className="text-xs text-foreground/60">{review.timeAgo} on Google</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-2xl font-bold text-[#df6327]">{review.rating}</div>
                    <div className="flex gap-0.5 justify-end">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-[#df6327] text-[#df6327]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-foreground/60 font-medium">{review.category}</p>
              </div>

              {/* Review Content */}
              <div className="px-6 py-4">
                <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5">{review.text}</p>
              </div>

              {/* Ratings Breakdown */}
              <div className="px-6 py-4 bg-white/40 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-foreground">Rooms</span>
                  <span className="text-xs font-bold text-[#df6327]">{review.ratingBreakdown.rooms}.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-foreground">Service</span>
                  <span className="text-xs font-bold text-[#df6327]">{review.ratingBreakdown.service}.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-foreground">Location</span>
                  <span className="text-xs font-bold text-[#df6327]">{review.ratingBreakdown.location}.0</span>
                </div>
              </div>

              {/* Highlights */}
              {review.highlights.length > 0 && (
                <div className="px-6 py-3 border-t border-foreground/10">
                  <p className="text-xs font-bold text-foreground/70 uppercase tracking-wide mb-2">Hotel highlights</p>
                  <div className="flex flex-wrap gap-1">
                    {review.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs text-foreground/70">
                        {highlight}
                        {idx < review.highlights.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Images Carousel */}
              {review.images.length > 0 && (
                <div className="p-4 bg-white/30 border-t border-foreground/10">
                  <div className="grid grid-cols-3 gap-2">
                    {review.images.slice(0, 3).map((_, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/30" />
                      </div>
                    ))}
                  </div>
                  {review.images.length > 3 && (
                    <p className="text-xs text-foreground/60 mt-2 text-center">+{review.images.length - 3} more</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="text-center mb-12">
          <a
            href="https://share.google/czjJt9HQDVHx8Z0qv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#df6327] hover:text-[#c55a1f] font-semibold transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View all reviews on Google
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#df6327]/15 to-[#df6327]/5 rounded-3xl p-8 md:p-12 text-center border-2 border-[#df6327]/30 shadow-lg">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Share Your Experience</h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Had a wonderful stay with us? We&apos;d love to hear about your experience and help other travelers discover the magic of Sehar Boutique Stay.
          </p>
          <a
            href="https://share.google/czjJt9HQDVHx8Z0qv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#df6327] to-[#c55a1f] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Write a Review for Us on Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
