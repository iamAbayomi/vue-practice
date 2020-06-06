var app = new Vue( {
    el: '#app',
    data: {
        product: 'Socks',
        brand : "Vue Mastery",
        image : "image/blue-socks.jpg",
        altText: "Image of Socks",
        inStock : true,
        inventory: 0,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 22234,
                variantColor: "green",
                variantImage: "image/blue-socks.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "image/green-socks.jpg"
            }
        ],
        cart: 0

       //, image : "image/blue-socks.jpg"
    },
    methods : {
        addToCart(){
            this.cart +=1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
    
    }

)