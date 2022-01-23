import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Photos } from "src/photos/photos.model";
import { User } from "src/users/users.model";


@Table({tableName: 'comments'})
export class Comments extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER, unique: true})
    id: number;

    @Column({type: DataType.INTEGER})
    comment_text: string;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => Photos)
    @Column({type: DataType.INTEGER})
    photo_id: number;

}