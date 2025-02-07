// order.js (in your schemas folder)
export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "reference", to: { type: 'product'} }],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "Pending" },
          { title: "Shipped", value: "Shipped" },
          { title: "Delivered", value: "Delivered" },
        ],
        layout: "radio",
      },
      initialValue: "Pending",
    },
  ],
};
