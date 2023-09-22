'use client'
import Image from "next/image"
import './slider.css'
import { useState, useEffect, Children, cloneElement } from "react"
import leftButton from '../../resources/Rectangle 72.png'
import rightButton from '../../resources/Rectangle 73.png'
import Swipeable from 'react-swipeable';


const PAGE_WIDTH = 600
const MAX_ID = 4
const MIN_ID = 1

export const Slider = ({ children }) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const [id, setId] = useState(1)

    const handleLeftArrowClick = () => {
        setOffset((currentOffest) => {
            const newOffset = currentOffest + PAGE_WIDTH
            console.log(newOffset)
            if (newOffset === 600) {
                setId(MAX_ID)
                return -1800

            }
            return Math.min(newOffset, 0)
        })
        setId((currentId) => {
            if (id != 1) {
                const newId = currentId - 1
                return newId
            } else {
                return MIN_ID
            }
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffest) => {
            const newOffset = currentOffest - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            console.log(newOffset, maxOffset)
            if (newOffset === -2400) {
                setId(MIN_ID)
                return 0

            }
            return Math.max(newOffset, maxOffset)
        })
        setId((currentId) => {
            if (id != MAX_ID) {
                const newId = currentId + 1
                return newId
            } else {
                return MAX_ID
            }
        })
    }

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            console.log('left')
        } else {
            console.log('right')
        }
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
        const timer = setInterval(() => {
            setOffset((current) => {
                const res = current === -1800 ? 0 : current - 600
                // console.log(res)
                if (res != 0) {
                    setId((currentId) => {
                        const newId = currentId + 1
                        return newId
                    })
                } else {
                    setId(MIN_ID)
                }
                return res
            })

        }, 15000)
        return () => clearInterval(timer)
    }, [children], [])

    // Swipeable className="main-container" onSwipedLeft={() => handleSwipe()}

    return (
        <div className="main-container">
            <div className="slider_nav_bar">
                <Image src={leftButton} className="arrow" onClick={handleLeftArrowClick} alt='стрелка влево' />
                <div className='slider_index'>
                    <span className="span_id">0{id}</span>/04
                </div>
                <Image src={rightButton} onClick={handleRightArrowClick} alt='стрелка вправо' /></div>
            <div className="window">
                <div className="all-pages-container"
                    style={{ transform: `translateX(${offset}px)` }}>
                    {pages}
                </div>
            </div>
        </div>
    )
}