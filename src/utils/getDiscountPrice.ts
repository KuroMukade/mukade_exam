export const getDiscountPrice = (price: number, salePercent: number): number => {
    return price - (price / 100 * salePercent);
}
