import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Comments } from "src/comments/comments.model";
import { Likes } from "src/likes/likes.model";
import { User } from "src/users/users.model";


@Table({tableName: 'photos'})
export class Photos extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER, unique: true})
    id: number;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    image_url: string

    @Column({type: DataType.STRING})
    title: string

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @HasMany(() => Likes, "photo_id")
    likes: Likes[]

    @HasMany(() => Comments, "photo_id")
    comments: Comments[]

}