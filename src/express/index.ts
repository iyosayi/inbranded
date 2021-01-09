import { Response } from 'express'

const makeExpressCallback = (controller: Function) => {
  return (req: any, res: Response) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      ip: req.ip,
      file: req.file,
      method: req.method,
      path: req.path,
      user: req.user,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
      },
    }
    controller(httpRequest)
      .then((httpResponse: any) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }

        res.type('json')
        httpResponse.redirect
          ? res.redirect(httpResponse.redirect)
          : res.status(httpResponse.statusCode).send(httpResponse.data)
      })
      .catch((e: any) => res.sendStatus(e.statusCode || 500).send(e.message))
  }
}

export default makeExpressCallback
