var app = new Vue( {
    el: '#app',
    data: {
        product: 'Socks',
        image : "image/socks.jpg",
        inStock : true,
        inventory: 5,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 22234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]

       //, image : "image/blue-socks.jpg"
    }
}

)