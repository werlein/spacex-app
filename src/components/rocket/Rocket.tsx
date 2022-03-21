import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { rocketActions } from "src/redux/rocket/rocket.actions";
import { selectRocket } from "src/redux/rocket/rocket.reducer";
import { Carousel } from "../carousel/Carousel";

export function Rocket() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(rocketActions.getRocket(id!))
    }, [dispatch, id])

    const rocket = useAppSelector(selectRocket);
    
    return (
        <>
            <div>
                {rocket && (
                    <>
                        {rocket.name}
                        <Carousel imageURLs={rocket.flickr_images} />
                    </>
                )}
            </div>
        </>
    )
}