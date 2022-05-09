import Input from "@mui/material/Input";
import { ChangeEvent, useEffect, useState } from "react";

interface Props<T, K> {
    data: T[],
    keys: K[],
    onSearch: (results: T[]) => void
}

// ToDo: fix the Placeholder in the input field

type StringProps<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T];

export function Search<T extends Record<K, string>, K extends StringProps<T>>({ data, keys, onSearch }: Props<T, K>) {
    const [query, setQuery] = useState<string>()

    useEffect(() => {
        if (query !== undefined) {
            if (query?.trim().length === 0) {
                onSearch(data)
                return
            }

            let results: T[] = []

            for (const key of keys) {
                for (const item of data) {
                    if (results.includes(item)) {
                        continue
                    }

                    const value = item[key]
                    if (value.toLowerCase().includes(query.toLowerCase())) {
                        results.push(item)
                    }
                }
            }

            onSearch(results)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    const handleChangeFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <Input
            placeholder="Filter by name or country"
            sx={{ background: "white", paddingLeft: "5px", marginBottom: "15px" }}
            onChange={handleChangeFilterInput}
            value={query ?? ""}
        />
    )
}