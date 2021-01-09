import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.config()
    this.indexRoute()
  }

  private config() {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    require('../routes')(this.app)
  }

  public indexRoute() {
    this.app.get('/', (_, res) =>
      res.json({ message: 'Inbranded API is up and running.!' })
    )
  }
}

export default new App().app
