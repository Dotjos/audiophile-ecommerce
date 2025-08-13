export const formatPrice = (price:number) => {
    if (!price) return '$0';
    return `$${price.toLocaleString()}`;
  };