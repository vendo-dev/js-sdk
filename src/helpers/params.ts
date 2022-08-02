const prepareParamsFromOptions = (options: any, params?: Array<string>) => {
  const token: any = {}
  const bodyParams: any = options
  const pathParams: any = {}

  if (bodyParams?.bearer_token || bodyParams?.bearerToken) {
    token.bearerToken = bodyParams.bearer_token || bodyParams.bearerToken
    delete bodyParams.bearer_token
  }

  if (bodyParams?.order_token || bodyParams?.orderToken) {
    token.orderToken = bodyParams.order_token || bodyParams.orderToken
    delete bodyParams.order_token
  }

  if (params?.length > 0) {
    for (const param of params) {
      if (bodyParams[param]) {
        pathParams[param] = bodyParams[param]
        delete bodyParams[param]
      }
    }
  }

  return {
    token,
    bodyParams,
    pathParams
  }
}

export default prepareParamsFromOptions
