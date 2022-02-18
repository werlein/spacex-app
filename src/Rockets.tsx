import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { rocketActions } from "./redux/rocket/rocket.actions";
import { selectRockets } from "./redux/rocket/rocket.reducer";

export function Rockets() {
    const dispatch = useAppDispatch();
    const rockets = useAppSelector(selectRockets);

    useEffect(() => {
        dispatch(rocketActions.getRockets());
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