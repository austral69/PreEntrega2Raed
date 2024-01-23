const products = [
    {
        id: '1',
        name: 'The Doors',
        price: 40,
        category: 'classic',
        img:'../public/doors', 
        stock: 27,
        description: 'Hotel Morrison'
    },
    {
        id: '2',
        name: 'Portugal. The Man',
        price: 33,
        category: 'alternative',
        img:'../public/portugal', 
        stock: 90,
        description: 'Chris Black Changed My Life'
    },
    {
        id: '3',
        name: 'The Avalanches',
        price: 99,
        category: '2000',
        img:'../public/avalanches', 
        stock: 10,
        description: 'Since I Left You' 
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
        
    })
     
}