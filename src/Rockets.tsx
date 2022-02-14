import React, { useEffect, useState } from "react";
import { getRockets } from "./api/rockets";

interface Rocket {
    name: string,
    id: string,
    flickr_images: string[]
}

export function Rockets() {
    const [rockets, setRockets] = useState<Rocket[]>([])
    useEffect(() => {
        const getRocketsFn = async () => {
            const rockets = await getRockets()
            setRockets(rockets)
        }
        getRocketsFn()
    }, [])
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