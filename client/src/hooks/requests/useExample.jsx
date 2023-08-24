import { exampleService } from "../../services/exampleService"
import { useQuery } from "@tanstack/react-query"

export const useExample = () => {
    return useQuery(["example"], exampleService)
}