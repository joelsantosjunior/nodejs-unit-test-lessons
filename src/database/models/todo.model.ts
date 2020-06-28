import mongoose, { Schema, Document } from 'mongoose';

export interface Todo extends Document {
    name: string;
    description: string;
}

const TodoSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
});

export default mongoose.model<Todo>('Todo', TodoSchema);