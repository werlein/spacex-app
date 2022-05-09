import Input from "@mui/material/Input";
import { ChangeEvent, useEffect, useState } from "react";

interface Props<T> {
    data: T[],
    keys: (keyof T)[],
    onSearch: (results: T[]) => void
}

// ToDo: fix the Generic Typings and the Placeholder in the input field

export function Search<T>({ data, keys, onSearch }: Props<T>) {
    const [query, setQuery] = useState<string>()

    useEffect(() => {
        if (query !== undefined) {
            let results: T[] = []
            if (query.trim().length === 0) {
                results = data
            } else {
                for (const key of keys) {
                    for (const item of data) {
                        const value = item[key] as unknown as string
                        if (value.toLowerCase().includes(query.toLowerCase())) {
                            results.push(item)
                        }
                    }
                }
            }
            onSearch([...new Set(results)])
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