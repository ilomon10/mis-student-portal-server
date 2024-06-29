// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { normalizeText } from '../utils/normalizeText'

export const searchQueryParser = (queryKey: string, queryFields: string) => async (context: HookContext) => {
  let fields = context.params.query[queryFields]
  let query = context.params.query[queryKey]
  if (fields && query) {
    delete context.params.query[queryKey]
    delete context.params.query[queryFields]
    query = normalizeText(query)
    fields = fields.split(',')
    if (!context.params.query['$or']) {
      context.params.query['$or'] = []
    }

    context.params.query['$or'] = [
      ...query.reduce((p: any[], q: string) => {
        return [
          ...p,
          ...fields.map((field: string) => {
            return {
              [field]: {
                $like: `%${q}%`
              }
            }
          })
        ]
      }, [] as any[])
    ]
  }

  return Promise.resolve(context)
}
