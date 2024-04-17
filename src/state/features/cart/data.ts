type CartItem = {
    id: number;
    product: Product,
    quantity: number;
}

const products: Product[] = [
    {
        "id": 61926152,
        "title": "Speed LS shoes",
        "brand": "vans",
        "price": 70,
        "description": "string kodj",
        "category": "shoes",
        "options": [
            {
                "name": "color",
                "options": [
                    "",
                    ""
                ]
            }
        ],
        "thumbnail": "VN000CTNBP6-HERO.webp",
        "images": [
            "VN000CTNBP6-HERO.webp",
            "VN000CTNBP6-ALT1.webp",
            "VN000CTNBP6-ALT3.webp",
            "VN000CTNBP6-ALT2.webp",
            "VN000CTNBP6-ALT4.webp"
        ],
        "rating": {
            "rate": 2.4,
            "count": 120
        },
        "colors": [
            {
                "name": "Olive green",
                "hexa": "111509"
            }
        ]
    },
    {
        "id": 61926152,
        "title": "Skate Old Skool Vans X Spitfire Wheels Shoes",
        "brand": "vans",
        "price": 85,
        "description": "string kodj",
        "category": "shoes",
        "options": [
            {
                "name": "color",
                "options": [
                    "",
                    ""
                ]
            }
        ],
        "thumbnail": "VN0A5FCBBFM-HERO.webp",
        "images": [
            "VN0A5FCBBFM-HERO.webp",
            "VN0A5FCBBFM-ALT3.webp",
            "VN0A5FCBBFM-ALT4.webp",
            "VN0A5FCBBFM-ALT5.webp",
            "VN0A5FCBBFM-ALT6.jpeg"
        ],
        "rating": {
            "rate": 2.4,
            "count": 120
        },
        "colors": [
            {
                "name": "Olive green",
                "hexa": "111509"
            }
        ]
    },
    {
        "id": 61926162,
        "title": "Wayvee shoes",
        "brand": "vans",
        "price": 85,
        "description": "string kodj",
        "category": "shoes",
        "options": [
            {
                "name": "color",
                "options": []
            },
        ],
        "thumbnail": "VN0A5JIAY04-HERO.webp",
        "images": [
            "VN0A5JIAY04-HERO.webp",
            "VN0A5JIAY04-ALT1.jpeg",
            "VN0A5JIAY04-ALT2.webp",
            "VN0A5JIAY04-ALT3.webp",
            "VN0A5JIAY04-ALT4.webp"
        ],
        "rating": {
            "rate": 2.4,
            "count": 120
        },
        "colors": [
            {
                "name": "Olive green",
                "hexa": "111509"
            }
        ]
    }
]

const fetchCartItems = (): CartItem[] => {
    return products.map((product, index) => { return { id: index, product: product, quantity: 1 } })
}
export default fetchCartItems;