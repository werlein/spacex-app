import { selectFavouriteRocketIds } from "src/redux/rocket/rocket.reducer"
import { useAppSelector } from "../../redux/hooks"

export function Dummy() {
    const favouriteIds = useAppSelector(selectFavouriteRocketIds)

    return (
        <div>
            {JSON.stringify(favouriteIds)}
        </div>
    )
}