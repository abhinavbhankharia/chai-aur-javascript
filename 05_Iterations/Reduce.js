const arr = [1, 2, 3]

const TotalValue = arr.reduce(function (acc,currvalue) {
    console.log(`acc: ${acc}, currvalue: ${currvalue}`);
    return acc + currvalue
}, acc = 0
)
console.log(TotalValue)

const Total = arr.reduce( (acc,currvalue) => (acc+currvalue),0)
console.log(Total);

const shoppingCart = [
    {
        itemName: 'js course',
        price : 2999
    },
    {
        itemName: 'py course',
        price : 999
    },
    {
        itemName: 'mobile dev course',
        price : 5999
    },
    {
        itemName: 'data science course',
        price : 12999
    },
]

const TotalPrice = shoppingCart.reduce( (acc,item) => acc+item.price , 0)
console.log(TotalPrice);
