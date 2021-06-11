import { ServerLoader, ServerSettings } from '@tsed/common'
import * as bodyParser from 'body-parser'
import path from 'path'
import { GraphQLMiddleware } from './packages/graphql'

const rootDir = path.resolve(__dirname)

@ServerSettings({
  rootDir,
  httpPort: 8080,
  httpsPort: false,
  acceptMimes: ['application/json'],
  mount: {
    '/api': `${rootDir}/modules/**/**-controller.ts`,
  },
  componentsScan: [`${rootDir}/modules/**/**-controller.ts`],
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit<T>(): void | Promise<T> {
    this.use(GraphQLMiddleware)
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        }),
      )
  }
}
