import mongoose, { Schema } from 'mongoose'

const loteriaSchema = new Schema({
  nazwa: {
    type: String
  },
  data: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

loteriaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nazwa: this.nazwa,
      data: this.data,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Loteria', loteriaSchema)

export const schema = model.schema
export default model
