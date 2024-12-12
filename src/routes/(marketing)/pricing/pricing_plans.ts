export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "paid",
    name: "Paid",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$4.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QUwywFdI5jNO9cyDDrqGJj0",
    stripe_product_id: "prod_QTv3HTcEqKJiF3",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  }
]
