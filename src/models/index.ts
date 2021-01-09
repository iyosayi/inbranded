import makeImageDb from './image.db'
import { makeDb } from '../data-acess'

export const imageDb = makeImageDb({ makeDb })
