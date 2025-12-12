import { RATES_API_REQUEST_BASE } from './constants'
import { HTTPClient } from '@oleksii-pavlov/http'

export const RatesAPIRequestsHTTPClient = new HTTPClient({
  base: RATES_API_REQUEST_BASE
})
