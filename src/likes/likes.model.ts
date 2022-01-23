import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Photos } from "src/photos/photos.model";
import { User } from "src/users/users.model";


@Table(
    {
        tableName: 'likes',
        indexes:[{
            unique: true,
            fields:["user_id", "photo_id"]
        }]
    }
)
export class Likes extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER, unique: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @ForeignKey(() => Photos)
    @Column({type: DataType.INTEGER})
    photo_id: number;

}