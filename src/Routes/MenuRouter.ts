import express from "express";
import { Menu } from "../Entities/Menu";

const MenuRouter = express.Router();

MenuRouter.get("/", async (req, res) => {
  console.log("entering /menu route");
  const menu = await Menu.find({ relations: { category: true } });
  console.log({ menu });

  if (!menu) {
    return res.status(404).json({ msg: "Menu not found" });
  }

  return res.json(menu);
});

export default MenuRouter;
