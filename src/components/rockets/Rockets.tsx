import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rocketActions } from "../../redux/rocket/rocket.actions";
import { selectRockets } from "../../redux/rocket/rocket.reducer";

export function Rockets() {
    const dispatch = useAppDispatch();
    const rockets = useAppSelector(selectRockets);

    useEffect(() => {
        dispatch(rocketActions.getRockets());
    }, [dispatch]);

    return (
        <>
            {rockets.map((rocket) => (
                <div key={rocket.id} style={{ marginBottom: "50px" }}>
                    <div><Link to={`/rockets/${rocket.id}`}>{rocket.name}</Link></div>
                </div>
            ))}
        </>
    )
}