import { Middleware, Next, Req, Res, Response } from '@tsed/common'
import { NextFunction, Request, Router } from 'express'
import { GraphQLService } from './graphql-service'

@Middleware()
export class GraphQLMiddleware {
  private graphQLMiddleware!: Router

  constructor(private readonly graphqlService: GraphQLService) {
    this.graphqlService.initialize().then(graphQLMiddleware => {
      this.graphQLMiddleware = graphQLMiddleware
    })
  }

  use(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction) {
    return this.graphQLMiddleware(request, response, next)
  }
}
