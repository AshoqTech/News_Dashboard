import React from 'react'

const NewsCard = ({article, isFeatured}) => {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-md group cursor-pointer ${isFeatured ? 'md:h-105 h-55' : 'h-55'}`}>
      <div className='relative w-full h-full'>
        <img src={article.urlToImage} alt="new thumbnail"
        className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent'>
        <div className='absolute bottom-0 p-4'>
            <h2 className='font-meduim text-white'>{article.title}</h2>
            {isFeatured && (
                <p className='text-gray-300 text-sm mt-2 line-clamp-2'>{article.description}</p>
            )}
            <div className='text-xs text-gray-400 mt-2'>
                {article.source?.name}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
