import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getRockets, selectRockets } from "./redux/rocket/rocketSlice";

export function Rockets() {
    const dispatch = useAppDispatch();
    const rockets = useAppSelector(selectRockets);

    useEffect(() => {
        dispatch(getRockets());
    }, [dispatch]);

    console.log(rockets)
    return (
        <>
            {rockets.map((rocket) => (
                <div key={rocket.id} style={{ marginBottom: "20px" }}>
                    <div>{rocket.name}</div>
                    {rocket.flickr_images.map((imageUrl) => <img key={imageUrl} src={imageUrl} alt="" />)}
                </div>
            ))}
        </>
    )
}