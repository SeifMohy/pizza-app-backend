import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm"
import { Category } from "./Category"
import {OrderLine} from "./OrderLine"

@Entity("Menu_Table")
export class Menu extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string

    @Column()
    imageUrl: string

    @OneToMany(()=> OrderLine, (OrderLines) => OrderLines.menu)
    OrderLines: OrderLine [];

    @ManyToOne(()=> Category, (category) => category.menus)
    category: Category;
  
}