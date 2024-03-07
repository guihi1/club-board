import { Schema, model } from 'mongoose';
import type Types from 'mongoose';

interface IMessage {
  title: string;
  timestamp: Date;
  text: string;
  user: Types.ObjectId;
}

const MessageSchema = new Schema<IMessage>({
  title: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  text: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default model<IMessage>('Message', MessageSchema);
