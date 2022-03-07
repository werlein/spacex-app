import { useEffect, useState } from 'react';
import styled from 'styled-components'

interface Props {
    imageURLs: string[]
}
enum ArrowDirection {
    Left,
    Right
}

const width = 500;
const height = 400;

export function Carousel(props: Props) {
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    
    const handleClickArrow = (direction: ArrowDirection) => {
        setActiveImageIndex((value) => {
            let newValue = direction === ArrowDirection.Left ? --value : ++value
            if (newValue < 0) {
                newValue = props.imageURLs.length - 1
            }
            else if (newValue >= props.imageURLs.length) {
                newValue = 0
            }
            
            return newValue
        })
    }
    
    useEffect(() => {
        const imageTimer = setInterval(() => {
            handleClickArrow(ArrowDirection.Right)
        }, 3000);
        return () => {
            clearInterval(imageTimer);
        }
    }, [])

    return (
        <CarouselContainer>
            <div><Arrow direction={ArrowDirection.Left} onClick={() => handleClickArrow(ArrowDirection.Left)} /></div>
            <ActiveImageContainer>
                <ImagesContainer activeImageIndex={activeImageIndex}>
                    {props.imageURLs.map((imageUrl) => <Image key={imageUrl} src={imageUrl} alt="" />)}
                </ImagesContainer>
            </ActiveImageContainer>
            <div><Arrow direction={ArrowDirection.Right} onClick={() => handleClickArrow(ArrowDirection.Right)} /></div>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
`

const ActiveImageContainer = styled.div`
    position: relative;
    overflow: hidden;
`

const ImagesContainer = styled.div<{ activeImageIndex: number }>`
    display: flex;
    align-items: center;
    position: relative;
    width: ${width}px;
    min-height: ${height}px;
    left: -${props => props.activeImageIndex * width}px;
    transition: left 1s ease 0s;
`

const Image = styled.img`
    max-width: ${width}px;
    max-height: ${height}px;
`

const Arrow = styled.i<{ direction: ArrowDirection }>`
    border: solid white;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(${props => props.direction === ArrowDirection.Left ? '135' : '-45'}deg);
    cursor: pointer;

    &.disabled {
        pointer-events: none;
        opacity: .3;
    }
`