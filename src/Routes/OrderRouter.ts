import express from "express";
import { Order } from "../Entities/Order";
import { OrderLine } from "../Entities/OrderLine";
import { Menu } from "../Entities/Menu";

const OrderRouter = express.Router();

OrderRouter.post("/send", async (req, res) => {
  const { name, address, Items } = req.body;

  const AddOrder = Order.create({
    name,
    address,
  });

  await AddOrder.save();

  for (let i = 0; i < Items.length; i++) {
    const item = Items[i];
    const product = await Menu.findOneBy({ id: item.id });
    const AddItem = OrderLine.create({
      order: AddOrder,
      quantity: item.quantity,
      menu: product!,
    });
    await AddItem.save();
  }
  return res.json(AddOrder);
});

OrderRouter.get("/pendingOrders", async (req, res) => {
  const orders = await Order.find({
    relations: { OrderLines: { menu: true } },
  });
  console.log({ orders });

  if (!orders) {
    return res.status(404).json({ msg: "No Orders Found" });
  }

  return res.json(orders);
});


export default OrderRouter;
