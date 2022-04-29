import Input from "@mui/material/Input";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
    data: string[],
    onSearch: (results: string[]) => void
}

/**
 * 
 * ToDo
 * - making Search universal
 * - passing down the property as well we want to search by
 */

export function Search({ data, onSearch }: Props) {
    const [query, setQuery] = useState<string>()
    
    useEffect(() => {
        if (query !== undefined) {
            const results = data.filter(str => query.trim().length === 0 || str.toLowerCase().includes(query.toLowerCase()))
            onSearch(results)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    
    const handleChangeFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <Input 
            placeholder="Filter by name"
            sx={{background: "white", paddingLeft: "5px", marginBottom: "15px"}}
            onChange={handleChangeFilterInput}
            value={query ?? ""}
        />
    )
}