import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm"
import { Menu } from "./Menu"

@Entity("Category_Table")
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(()=> Menu, (menu)=>menu.category)
    menus: Menu[]
}