import Stripe from "stripe"

export type Checkout = {
  Subscription: string
}

export type Subscription = {
  Customer: Customer
}

export type Customer = string | Stripe.Customer | Stripe.DeletedCustomer
