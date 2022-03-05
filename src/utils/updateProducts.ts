function getGoodProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('good product')
        })
    })
}
function getNewProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('new product')
        })
    })
}
function getBadProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bad product')
        })
    })
}


async function updateProducts() {
    const goodProducts = await getGoodProducts()
    const badProducts = await getBadProducts()
    const newProducts = await getNewProducts()
    return {
        goodProducts,
        badProducts,
        newProducts
    }
}

updateProducts()