const transactions = [
  {
    date: '2024-01-15',
    category: 'Food',
    items: [
      { name: 'Groceries', amount: 50 },
      { name: 'Restaurant', amount: 75 }
    ]
  },
  {
    date: '2024-01-16',
    category: 'Transport',
    items: [
      { name: 'Gas', amount: 40 },
      { name: 'Parking', amount: 10 }
    ]
  },
  {
    date: '2024-01-17',
    category: 'Food',
    items: [
      { name: 'Coffee', amount: 5 }
    ]
  }
];

let result ={};

for(let i=0; i<transactions.length; i++)
{
    let {category, items} = transactions[i];

    if(!result[category])
    {
        result[category]={totel:0, count:0};
    }

    for(let j=0; j<items.length; j++)
    {
        result[category].totel +=items[j].amount;
        result[category].count +=1;
    }
}

console.log(result)