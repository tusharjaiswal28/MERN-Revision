const sales = [
  { month: 'Jan', product: 'A', amount: 100 },
  { month: 'Jan', product: 'B', amount: 150 },
  { month: 'Feb', product: 'A', amount: 120 },
  { month: 'Feb', product: 'B', amount: 180 },
  { month: 'Mar', product: 'A', amount: 110 },
  { month: 'Mar', product: 'B', amount: 160 }
];

const result = {};

for (let i = 0; i < sales.length; i++) {
  const { month, product, amount } = sales[i];


  if (!result[product]) {
    result[product] = { total: 0 };
  }


  result[product][month] = amount;


  result[product].total += amount;
}

let output={};

for (let key in result) {
  let { total, ...months } = result[key];
  output[key] = { ...months, total };
}

console.log(output);