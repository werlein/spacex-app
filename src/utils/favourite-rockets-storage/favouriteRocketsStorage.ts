class FavouriteRocketsStorage {
    #localStorageKey = "favourite-rockets"

    getAll(): string[] {
        return JSON.parse(localStorage.getItem(this.#localStorageKey)!) ?? []
    }

    toggle(rocketId: string) {
        const rocketIds = this.getAll()
        const isFavourite = rocketIds.includes(rocketId)
        const newRocketIds = isFavourite
            ? rocketIds.filter((id) => id !== rocketId)
            : [...rocketIds, rocketId]
        localStorage.setItem(this.#localStorageKey, JSON.stringify(newRocketIds))
        return newRocketIds
    }
}

export const favouriteRocketsStorage = new FavouriteRocketsStorage()