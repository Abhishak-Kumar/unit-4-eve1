// Problem 1

const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

// Level-Problem 1-1
function findDetails(foodDeliveryService) {
  const {
    restaurants: {
      italianCorner: {
        menu: { pizza: { available: pizzaAvailable, price: pizzaPrice}},
      },
      burgerJoint: {
        menu: { burger: { available: burgerAvailable, price: burgerPrice}},
      },
    },

  } = foodDeliveryService;
  return {
    pizzaAvailable,
    burgerAvailable,
    pizzaPrice,
    burgerPrice,
  };
}
// console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
// console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
// console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
// console.log(findDetails(foodDeliveryService).burgerPrice); // 8

// Level-Problem 1-2
function calculateTotalRevenue(foodDeliveryService) {
  let totalRevenue = 0;
  foodDeliveryService.restaurantName.forEach(restaurantName =>
    {
      const orders = foodDeliveryService.restaurants[restaurantName].orders;
      orders.forEach(order => {
        totalRevenue += order.total;
      });
    });
    return 'Total Revenue: ${totalRevenue}';

}
// console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)



//don't remove below export statement part
export { findDetails, calculateTotalRevenue };
