export const products = []

class Product {
    constructor(id, name, stock, provider, category, description, price, img) {
        this.id = id
        this.name = name
        this.stock = stock
        this.provider = provider
        this.category = category
        this.description = description
        this.price = price
        this.img = img
    }
}

const prod1 = new Product (
    1,
    'Cierres',
    10,
    'YKK',
    'confeccion',
    'Cierre premium de fabricante de calidad global, materiales de primera y estetica atractiva.',
    3000,
    'https://http2.mlstatic.com/D_NQ_NP_775738-MLA69268814767_052023-O.webp'
)

const prod2 = new Product (
    2,
    'Mostasillas',
    30,
    'ArcoIris',
    'confeccion',
    'Finos materiales para confeccionar todo tipo de macrame, joyería y demás.',
    1700,
    'https://d22fxaf9t8d39k.cloudfront.net/b0c0abd056c9ca1c474693dd779569180999fbe503ab89e2bc7ba3e74ed90f2756708.jpeg'
)

const prod3 = new Product (
    3,
    'Barra de Silicona',
    60,
    'Bettina',
    'varios',
    'Repuestos para pistola de silicona, adhesión excelente para todos los materiales necesarios.',
    6000,
    'https://acdn.mitiendanube.com/stores/001/132/430/products/ultra_transparente_largas_1-121-7da304a0f6bfbf6a7d15887980305953-1024-1024.jpg'

)

const prod4 = new Product (
    4,
    'Anilina',
    200,
    'Yacolor',
    'tinturas',
    'Tiña su ropa con facilidad y de forma económica.',
    700,
    'https://admin.mozku.com.ar/Content/UploadDirectory/Products/765/image_c595a4c2-2cbd-4cf4-9d30-86faef07c68a.jpg'
)


products.push(prod1, prod2, prod3, prod4)


// Promises

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error ('Error fetching data'));
        }
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.find((product) => product.id.toString() === id.toString())
            );
        }, 1000);
    });
};

// esto toma como param el ID para realizar el find.

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category.toString() === category.toString()));
        }, 1000);
    });
};

// category toma de param la categoría seleccionada, devuelve lo que coincide.