export interface SearchParamsDto {
    limit: number
    offset: number
}

export interface ApiListDto<T> {
    items: T[]
    total: number
}