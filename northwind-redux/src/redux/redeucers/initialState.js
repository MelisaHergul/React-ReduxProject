// eslint-disable-next-line import/no-anonymous-default-export
export default {
  currentCategory: {},
  categories: [
    { id: 1, categoryName: "Beverages" },
    { id: 2, categoryName: "Condiments" },
    { id: 3, categoryName: "Confections" },
  ],
  products: [
    { id: 4, productName: "Chai", unitPrice: 12 , quantityPerUnit:'@48-100' ,unitsInStock:1},
    { id: 5, productName: "Chang", unitPrice: 13 , quantityPerUnit:'@52-200',unitsInStock:2},
    { id: 6, productName: "Queso Cabrales" ,unitPrice: 14 , quantityPerUnit:'@64-300',unitsInStock:3},
    { id: 7, productName: "Ikura" ,unitPrice: 15 , quantityPerUnit:'@76-400',unitsInStock:4},
  ],
  cart: [],
};
