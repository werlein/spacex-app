interface Props {
    imageURLs: string[]
}

export function Carousel(props: Props) {
    
    return (
        <div>
            {props.imageURLs.map((imageUrl) => <img key={imageUrl} src={imageUrl} alt="" />)}
        </div>
    )
}