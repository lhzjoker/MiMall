export function getproductList(categoryId) {
    return this.axios.get('/products', {
        params: {
            categoryId: categoryId
        }
    })
}

export default {
    getproductList
}