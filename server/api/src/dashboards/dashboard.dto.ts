import { Field, ID, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class DashboardType{
    @Field(()=>ID)
    readonly id:string 
    @Field()
    readonly name: string
    @Field()
    readonly type: string
}