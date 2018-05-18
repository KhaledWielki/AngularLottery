import mongoose, { Schema } from 'mongoose'

const miejscaSchema = new Schema({
  nr_miejsca: {
    type: String
  },
  wolne: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

miejscaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nr_miejsca: this.nr_miejsca,
      wolne: this.wolne,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Miejsca', miejscaSchema)

export const schema = model.schema
export default model
