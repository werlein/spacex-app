import styled from 'styled-components'

interface Props {
    imageURLs: string[]
}

const width = 500;
const height = 500;

export function Carousel(props: Props) {

    return (
        <CarouselContainer>
            <div><Arrow direction='left'/></div>
            <ImagesContainer>
                {props.imageURLs.map((imageUrl, index) => <Image left={index * 500} key={imageUrl} src={imageUrl} alt="" />)}
            </ImagesContainer>
            <div><Arrow direction='right'/></div>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    display: flex;
`

const ImagesContainer = styled.div`
    position: relative;
    background: red;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
`
const Image = styled.img<{ left: number }>`
    position: absolute;
    max-width: ${width}px;
    max-height: ${height}px;
    left: ${props => props.left}px;
`

const Arrow = styled.i<{ direction: 'left' | 'right' }>`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(${props => props.direction === 'left' ? '135' : '-45'}deg);
`