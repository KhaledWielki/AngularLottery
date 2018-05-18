import mongoose, { Schema } from 'mongoose'

const regulaminSchema = new Schema({
  zawartosc: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

regulaminSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      zawartosc: this.zawartosc,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Regulamin', regulaminSchema)

export const schema = model.schema
export default model
