function print(p, type){
    if(type == "cau3")
        console.log(p.name,", ", p.price, "\n" )
    else if(type == "cau8")
        console.log(p.name,", ", p.category,", ", p.isAvailable, "\n" )
    else
        console.log(p.id + ", ", p.name,", ", p.price + ", ", p.description,", ", p.category + ", ", p.quantity, ", ", p.isAvailable, "\n" )
}

function log(data, type){   
    if(Array.isArray(data)){
        for (let i = 0; i < data.length; i++) {
            print(data[i], type)
        }
    }else
        print(data, type)
}

/*
*
*
//=== Câu 1 ===
*
*
*/

class Product {
    constructor(id, name, price, description, category, quantity, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
}

let p1 = new Product(1, "iPhone 15 Pro Max", 35000000,"Điện thoại", "Phone", 10, true);
console.log("Câu 1:");
log(p1);

/*
*
*
//=== Câu 2 ===
*
*
*/

const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, "Điện thoại", "Phone", 10, true),
    new Product(2, "Samsung Galaxy S24", 25000000,"Điện thoại", "Phone", 5, true),
    new Product(3, "MacBook Air M2", 28000000, "Máy tính", "Laptop", 23, true),
    new Product(4, "Dây chuyền bạc", 4000000, "Trang sức", "Accessories", 15, true),
    new Product(5, "Chuột Logitech", 500000, "Phụ kiện", "Accessories", 50, true),
    new Product(6, "Bàn phím cơ", 1500000, "Phụ kiện", "Accessories", 0, false),
];
console.log("Câu 2")
log(products)

/*
*
*
//=== Câu 3 ===
*
*
*/

let cau3 = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("Câu 3")
log(cau3, "cau3");

/*
*
*
//=== Câu 4 ===
*
*
*/

//Cách 1 - Sử dụng vòng for
console.log("Câu 4:")

let productInStock1 = [];

for (let index = 0; index < products.length; index++) {
    if(products[index].quantity > 0){
        productInStock1.push(products[index]) 
    }   
}
//console.log(productInStock1)

//Cách 2 - Sử dụng filter()

let productInStock2 = products.filter(p2 => p2.quantity > 0);
log(productInStock2)

/*
*
*
//=== Câu 5 ===
*
*
*/

console.log("Câu 5:")
let productoverInputPrice = products.filter(p => p.price > 30000000)

if(productoverInputPrice.length >= 1){
    console.log("Có sản phẩm có giá tiền lớn hơn 30.000.000. Và các sản phẩm đó là: \n")
    log(productoverInputPrice)
}
else
    console.log("Không sản phẩm có giá tiền lớn hơn 30.000.000")

/*
*
*
//=== Câu 6 ===
*
*
*/

console.log("Câu 6:")

let productInCategoryNotSale = []
for (let i = 0; i < products.length; i++) {
    if(products[i].category == "Accessories" && products[i].isAvailable == false){
        productInCategoryNotSale.push(products[i])
    }
}

if(productInCategoryNotSale.length > 0){
    console.log("Có sản phẩm thuộc danh mục Accessories không được bán. Sản phẩm đó là: \n")
    log(productInCategoryNotSale)
}
else
    console.log("Tất cả sản phẩm thuộc danh mục Accessories đã được bán.")

/*
*
*
//=== Câu 7 ===
*
*
*/

console.log("Câu 7:")

let Total = 0;

for (let i = 0; i < products.length; i++) {
    Total += (products[i].price * products[i].quantity)
}

console.log(`Tổng giá trị kho hàng là ${Total}`);

/*
*
*
//=== Câu 8 ===
*
*
*/

console.log("Câu 8:")


for (const e of products) {
    log(e,"cau8")
}

/*
*
*
//=== Câu 9 ===
*
*
*/

console.log("Câu 9:")

for (let i = 0; i < products.length; i++) {
    for (const key in products[i]) {
        console.log(key, ": ", (products[i])[key])
    }
}

/*
*
*
//=== Câu 10 ===
*
*
*/

console.log("Câu 10:")
for (const i of products) {
    if(i.isAvailable == true && i.quantity > 0)
        log(i)
}