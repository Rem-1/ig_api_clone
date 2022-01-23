import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Comments } from "src/comments/comments.model";
import { Follows } from "src/follows/follows.model";
import { Likes } from "src/likes/likes.model";
import { Photos } from "src/photos/photos.model";


@Table({tableName: 'users'})
export class User extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER, unique: true})
    id: number;

    @AllowNull(false)
    @Column({type: DataType.STRING, unique: true})
    nickname: string;

    @AllowNull(false)
    @Column({type: DataType.STRING, unique: true})
    email: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    password: string;

    @HasMany(() => Photos, 'user_id')
    photos: Photos[]

    @HasMany(() => Likes, 'user_id')
    likes: Likes[]

    @HasMany(() => Follows, 'user_id')
    follows: Follows[]

    @HasMany(() => Comments, 'user_id')
    comments: Comments[]
}