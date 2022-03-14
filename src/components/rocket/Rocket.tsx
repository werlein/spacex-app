import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { rocketActions } from "src/redux/rocket/rocket.actions";
import { selectRockets } from "src/redux/rocket/rocket.reducer";
import { Carousel } from "../carousel/Carousel";

export function Rocket() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(rocketActions.getRockets())
    }, [dispatch])

    const rockets = useAppSelector(selectRockets);
    const rocket = rockets.find(rocket => rocket.id === id);

/**
 * Add new api to fetch one rocket by id 
 * 
 * - URL : https://api.spacexdata.com/v4/rockets/:id
 * - Docs: https://github.com/r-spacex/SpaceX-API/blob/master/docs/rockets/v4/one.md
 * 
 * 
 */
    
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