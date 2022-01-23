import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";


@Table(
    {
        tableName: 'follows',
        indexes:[{
            unique: true,
            fields:["user_id", "follower_id"]
        }]
    }
)
export class Follows extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER, unique: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number;

    @Column({type: DataType.INTEGER})
    follower_id: number;

}