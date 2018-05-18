import mongoose, { Schema } from 'mongoose'

const zgloszeniaDoLoteriiSchema = new Schema({
  id_uzytkowni: {
    type: String
  },
  a id_loterii: {
    type: String
  },
  zakceptowany: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

zgloszeniaDoLoteriiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id_uzytkowni: this.id_uzytkowni,
      a id_loterii: this.a id_loterii,
      zakceptowany: this.zakceptowany,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ZgloszeniaDoLoterii', zgloszeniaDoLoteriiSchema)

export const schema = model.schema
export default model
