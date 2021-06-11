import { Request, Response, ServerLoader } from '@tsed/common'
import { Server } from './server'

let serverLoader: ServerLoader

async function bootstrap() {
  try {
    console.debug('Start server...')
    serverLoader = await ServerLoader.bootstrap(Server)
    console.debug('Server initialized')
    return serverLoader
  } catch (er) {
    console.error(er)
  }
}

export default function server(request: Request, response: Response) {
  serverLoader?.expressApp(request, response)
}

bootstrap().then(app => app?.listen())
