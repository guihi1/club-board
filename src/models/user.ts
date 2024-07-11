import { Schema, model } from 'mongoose';

interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  membership?: boolean;
  admin?: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    membership: Boolean,
    admin: Boolean,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

UserSchema.virtual('url').get(function (this: IUser) {
  return `/user/${this._id}`;
});

export default model<IUser>('User', UserSchema);
