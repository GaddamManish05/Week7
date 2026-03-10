// {
//                 productId: 10,
//                 name: "Portable SSD T9",
//                 price: 119,
//                 brand: "Samsung",
//                 description: "Blazing-fast 2000MB/s transfer speeds in a compact, shock-resistant portable drive.",
//                 image: "https://picsum.photos/seed/samsungssd/400/400"
//               }

function Product(props){
    let {name,price,brand,description,image} = props
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{brand}</p>
            <p>{description}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Product