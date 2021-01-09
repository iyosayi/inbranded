import { Db, ObjectID } from 'mongodb'
import { UploadImage, Update } from '../typings/interfaces'

function transformId(id: string) {
  return new ObjectID(id)
}

interface IMakeDb {
  makeDb: () => Promise<Db>
}
const makeImageDb = ({ makeDb }: IMakeDb) => {
  async function insert({ ...imageDetails }: UploadImage) {
    const db = await makeDb()
    const toInsert = await db
      .collection('images')
      .insertOne({ ...imageDetails })
    return toInsert.ops[0]
  }

  async function findById({ id: _id }: { id: string }) {
    const db = await makeDb()
    const found = await db
      .collection('images')
      .findOne({ _id: transformId(_id) })
    return found
  }

  async function update({ id: _id, ...changes }: { id: string } & Update) {
    const db = await makeDb()
    const found = await db
      .collection('images')
      .updateOne({ _id: transformId(_id) }, { $set: { ...changes } })
    return found.modifiedCount > 0 ? { id: _id, ...changes } : null
  }

  return Object.freeze({
    insert,
    findById,
    update,
  })
}

export default makeImageDb
