export const totalPrice = (products) => {
  let total = 0;
  products.forEach((item) => total += item.price);

  return total;
}