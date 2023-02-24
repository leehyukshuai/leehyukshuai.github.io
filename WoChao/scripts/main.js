var total = 0;
// number 1
let arr = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];

for (var i = 0; i < arr.length; i++) { // number 2
  // number 3
  let input = arr[i];
  let pos = input.indexOf(':');
  let key = input.slice(0, pos);
  let value = input.slice(pos+1);
  
  // number 4
  let price = Number(value);
  total += price;
  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
