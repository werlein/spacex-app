import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rocketActions } from "../../redux/rocket/rocket.actions";
import { selectRockets } from "../../redux/rocket/rocket.reducer";
import { Carousel } from "../carousel/Carousel";

export function Rockets() {
    const dispatch = useAppDispatch();
    const rockets = useAppSelector(selectRockets);

    useEffect(() => {
        dispatch(rocketActions.getRockets());
    }, [dispatch]);

    return (
        <>
            {rockets.map((rocket) => (
                <div key={rocket.id} style={{ marginBottom: "20px" }}>
                    <div>{rocket.name}</div>
                    <Carousel imageURLs={rocket.flickr_images} />
                </div>
            ))}
        </>
    )
}