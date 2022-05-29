import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, CreateDateColumn, Timestamp} from "typeorm"
import { OrderLine } from "./OrderLine";

@Entity("Orders_Table")
export class Order extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @CreateDateColumn({nullable: true})
    date: Timestamp;

    @OneToMany(()=> OrderLine, (OrderLines) => OrderLines.order)
    OrderLines: OrderLine [];
  
}