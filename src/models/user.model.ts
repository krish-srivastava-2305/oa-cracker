import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  solvedProblems: []
}


const UserSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'], // regex checking of email address
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  solvedProblems: []
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;