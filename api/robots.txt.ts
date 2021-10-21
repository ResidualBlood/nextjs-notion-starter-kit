/*
 * @Author       : ResidualBlood
 * @Date         : 2021-08-14 13:32:50
 * @LastEditors  : ResidualBlood
 * @LastEditTime : 2021-10-21 12:44:06
 * @Description  : 
 * @FilePath     : /api/robots.txt.ts
 */
import { NextApiRequest, NextApiResponse } from 'next'

import { host } from '../lib/config'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    return res.status(405).send({ error: 'method not allowed' })
  }

  // cache robots.txt for up to 60 seconds
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, max-age=60, stale-while-revalidate=60'
  )
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
  Disallow: /
`)
  res.end()
}
