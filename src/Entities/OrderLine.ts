import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { Menu } from "./Menu";
import { Order } from "./Order"

@Entity("OrderLine_Table")
export class OrderLine extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @ManyToOne(() => Order, (order)=> order.OrderLines)
    order: Order;

    @ManyToOne(() => Menu, (menu) => menu.OrderLines)
    menu: Menu;
    
}