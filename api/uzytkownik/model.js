import mongoose, { Schema } from 'mongoose'

const uzytkownikSchema = new Schema({
  imie: {
    type: String
  },
  nazwisko: {
    type: String
  },
  haslo: {
    type: String
  },
  email: {
    type: String
  },
  usuniety: {
    type: String
  },
  rola: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

uzytkownikSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      imie: this.imie,
      nazwisko: this.nazwisko,
      haslo: this.haslo,
      email: this.email,
      usuniety: this.usuniety,
      rola: this.rola,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Uzytkownik', uzytkownikSchema)

export const schema = model.schema
export default model
