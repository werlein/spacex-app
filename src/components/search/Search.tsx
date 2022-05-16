import Input from "@mui/material/Input";
import { ChangeEvent, useEffect, useState } from "react";

interface Props<T, K> {
    data: T[],
    keys: K[],
    onSearch: (results: T[], query: string) => void
}

type StringProps<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T];

export function Search<T extends Record<K, string>, K extends StringProps<T>>({ data, keys, onSearch }: Props<T, K>) {
    const [query, setQuery] = useState<string>()

    useEffect(() => {
        if (query !== undefined) {
            if (query?.trim().length === 0) {
                onSearch(data, query)
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

            onSearch(results, query)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    const handleChangeFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const placeholder = `Filter by ${keys.join(', ')}`

    return (
        <Input
            placeholder={placeholder}
            sx={{ background: "white", paddingLeft: "5px", marginBottom: "15px", width: "300px" }}
            onChange={handleChangeFilterInput}
            value={query ?? ""}
            autoFocus
        />
    )
}