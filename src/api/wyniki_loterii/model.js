import mongoose, { Schema } from 'mongoose'

const wynikiLoteriiSchema = new Schema({
  id_loterii: {
    type: String
  },
  id_uzytkownika: {
    type: String
  },
  id_miejsca: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

wynikiLoteriiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id_loterii: this.id_loterii,
      id_uzytkownika: this.id_uzytkownika,
      id_miejsca: this.id_miejsca,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('WynikiLoterii', wynikiLoteriiSchema)

export const schema = model.schema
export default model
