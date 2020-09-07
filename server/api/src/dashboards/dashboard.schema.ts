 
import * as mongoose from 'mongoose';

export const DashboardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
});
