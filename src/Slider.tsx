import React, { useState } from 'react'
// @ts-expect-error dfs
import { useSpringCarousel } from 'react-spring-carousel'
import video from './assets/vid.mp4'
import video2 from './assets/vid2.mp4'
import video3 from './assets/vid3.mp4'
import video4 from './assets/dance.mp4'
import video5 from './assets/vid5.mp4'
import logo from './assets/0000.gif'

function getExtremeSlides(activeIndex: number, totalSlides: number) {
  const prevSlide = (activeIndex - 2 + totalSlides) % totalSlides || totalSlides;
  const nextSlide = (activeIndex + 2) % totalSlides || totalSlides;

  console.log(activeIndex, prevSlide, nextSlide)
  return [prevSlide, nextSlide];
}

const Carousel = () => {
    const mockItems = [
      {
        id: 'item-4',
        url: logo,
        type: 'image'
    },
        {
            id: 'item-1',
            url: video,
            type: 'video'
        },
        
        {
            id: 'item-2',
            url: video2,
            type: 'video'
        },
        {
            id: 'item-3',
            url: video3,
            type: 'video'
        },
        {
            id: 'item-6',
            url: video4,
            type: 'video'
        },
        {
            id: 'item-5',
            url: video5,
            type: 'video'
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

    const {
        carouselFragment,
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: 5, // number of slides per view
        withLoop: true, // will loop
        className: 'w-[100%]',
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
          const index = mockItems.findIndex((item) => item.id === currentSlide)
            return {
                ...item,
                renderItem: (
                    <div
                        className={` grid aspect-[2] w-full place-items-center text-2xl text-white transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 scale-150'
                            : ''
                            } ${getExtremeSlides(index, mockItems.length).includes(mockItems.indexOf(item)) ? 'scale-90' : ''}`}>
                        {item.type === 'video' ? <video className='object-cover w-full h-full rounded-[20px] border-2 abstract-border overflow-hidden' src={item.url} autoPlay loop muted playsInline></video> : <img src={item.url} alt="slide" />} 
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event: { eventName: string; nextItem: { id: React.SetStateAction<string> } }) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    return (
        <div className="py-10 relative">
            {/* <button onClick={slideToPrevItem} className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button> */}
            <div className="mx-auto w-[100%] overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            {/* <button onClick={slideToNextItem} className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button> */}
        </div>
    )
}

export default Carousel
