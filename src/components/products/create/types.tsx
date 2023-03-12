export interface IProductCreate{
    name: string,
    price: number,
    description: string,
    categoryId: number,
    file: File | null
}