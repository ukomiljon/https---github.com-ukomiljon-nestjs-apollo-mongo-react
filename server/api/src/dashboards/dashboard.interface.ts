import * as mongoose from 'mongoose'

export interface Dashbaord extends mongoose.Document{
    name:string
    type:string
}
