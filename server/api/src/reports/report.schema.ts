import { Schema } from 'mongoose'

export const ReportSchema = new Schema({
    title: { type: String, require: true },
    type: { type: String, required: true }
})