export const formatter = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "$",
  }).format(number);
};
 