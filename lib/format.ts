export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
    .replace('$', 'USD ');
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};
