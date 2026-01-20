const orders = [
  {
    orderId: 'A1',
    customer: { name: 'John', location: { city: 'NYC', country: 'USA' } },
    items: [
      { product: 'Laptop', quantity: 1, price: 999 },
      { product: 'Mouse', quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 'A2',
    customer: { name: 'Jane', location: { city: 'LA', country: 'USA' } },
    items: [
      { product: 'Keyboard', quantity: 1, price: 75 }
    ]
  }
];

let res=[];

for(let i=0; i<orders.length; i++)
{
  let orId=orders[i].orderId;
  let custName=orders[i].customer.name;
  let city=orders[i].customer.location.city;

  let totalPrice=0

  for(let j=0; j<orders[i].items.length; j++)
  {
    totalPrice +=orders[i].items[j].price*orders[i].items[j].quantity;
  }

  let obj={
    orderId:orId,
    customerName:custName,
    city:city,
    totalAmount:totalPrice
  };

  res.push(obj)
}

console.log(res);