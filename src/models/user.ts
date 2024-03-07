import { Schema, model } from 'mongoose';

interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  membership?: boolean;
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  membership: Boolean,
});

export default model<IUser>('User', UserSchema);
