import CheckBox from "./CheckBox";

const ProductList = () =>{
    const products = [
        {
            id: 1,
            image: 'https://cdn1.smartprix.com/rx-iDmTR3ET8-w1200-h1200/DmTR3ET8.jpg',
            name: 'OnePlus',
            description: 'Nord Buds 2r True wireless in Ear Buds with Mic',
            seller: 'Supercom Net',
            size: 'OneSize',
            quantity: 1,
            Itemleft: 3,
            price: {
                mrp: '₹2,299',
                price: '₹1,899',
                offer: '400'
            },
            isChecked: true,
            returnStatus: 'Not returnable'
        },
        {
            id: 2,
            image: 'https://images-cdn.ubuy.co.in/653d06345111e1455a32d0b3-magcomsen-cotton-jacket-men-casual-stand.jpg',
            name: 'Leather Retail',
            description: 'Men Suede Lightweight Biker Jacket',
            seller: 'NK Enterprise',
            size: 'M',
            quantity: 2,
            Itemleft: 3,
            price: {
                mrp: '₹4,999',
                price: '₹2,299',
                offer: '2,700'
            },
            isChecked: false,
            returnStatus: '7 days return available'
        },
    ]
    const quantityArr = [
        {
            label: 'Qty: 1',
            value: 1
        },
        {
            label: 'Qty: 2',
            value: 2
        },
        {
            label: 'Qty: 3',
            value: 3
        }
    ];
    const sizeArr = [
        {
            label: 'Size: OneSize',
            value: 'OneSize'
        },
        {
            label: 'Size: S',
            value: 'S'
        },
        {
            label: 'Size: M',
            value: 'M'
        }
    ]
    return (
        <div>
            {
            products.map((prod) => (
                <div className="prod-card">
                    <CheckBox />
                    <div className="prod-close cursor-pointer">
                        &times;
                    </div>
                    <div className="prod-img text-center">
                        <img className="prod-image" src={prod.image} alt="Product Image"/>
                    </div>
                    <div>
                        <h1 className="product-title">{prod.name}</h1>
                        <p className="product-desc">{prod.description}</p>
                        <p className="prod-seller-name">Sold by: {prod.seller}</p>
                        <div className="prod-remaining-sec">
                            <select className="prod-size" name="size" value={prod.size}>
                            {sizeArr.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            <select className="prod-auntity" name="size" value={prod.quantity} >
                                {quantityArr.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            {
                                prod.Itemleft ? <div className="items-left">{prod.Itemleft} left</div> : ''
                            }
                        </div>
                        <div className="product-pricing">
                            <h2 className="prod-discount">{prod.price.price}</h2> 
                            <p className="prod-mrp"><del>{prod.price.mrp}</del></p>
                            <p className="offer-price">{prod.price.offer} OFF</p>
                        </div>
                        <div className="return-info">
                            <p>{prod.returnStatus}</p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default ProductList;