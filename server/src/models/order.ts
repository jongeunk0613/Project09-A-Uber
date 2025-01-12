import { Schema, model } from 'mongoose';

import paymentSchema from './payment';
import locationSchema from './location';
import chatSchema from './chat';

const orderSchema = new Schema({
  id: Schema.Types.ObjectId,
  user: { type: Schema.Types.ObjectId, required: true },
  driver: { type: Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  payment: { type: paymentSchema, required: false },
  startingPoint: { type: locationSchema, required: true },
  destination: { type: locationSchema, required: true },
  status: { type: String, enum: ['waiting', 'approval', 'startedDrive', 'close'], required: true },
  chat: [chatSchema],
  createdAt: { type: Date, default: Date.now },
  startedAt: Schema.Types.Date,
  completedAt: Schema.Types.Date,
});

export default model('Order', orderSchema);
