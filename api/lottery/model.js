import mongoose, { Schema } from 'mongoose'

const lotterySchema = new Schema({
  data: {
    type: String
  },
  tresc: {
    type: String
  },
  tytul: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

lotterySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      data: this.data,
      tresc: this.tresc,
      tytul: this.tytul,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Lottery', lotterySchema)

export const schema = model.schema
export default model
