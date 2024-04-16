import { BASE_URL } from "@/constants/env"

type CustomOptions = RequestInit & {
    baseUrl?: string | undefined
}

type EntityErrorPayload = {
    message: string
    errors: {
      field: string
      message: string
    }[]
  }

class HttpError extends Error {
    status: number
    payload: any
    constructor({status, payload}: {status: number, payload: any}) {
        super('Http Error')
        this.status = status
        this.payload = payload
    }
}

export class EntityError extends HttpError {
    status: 422
    payload: EntityErrorPayload
    constructor({
      status,
      payload
    }: {
      status: 422
      payload: EntityErrorPayload
    }) {
      super({ status, payload })
      this.status = status
      this.payload = payload
    }
  }

const request = async <Response>(method: 'GET' | 'POST' | 'PUT', url: string, options?: CustomOptions | undefined) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        'Content-Type': 'application/json',
    }
    const baseUrl = options?.baseUrl === undefined ? BASE_URL : options.baseUrl

    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })
    const payload: Response = await res.json()
    const data = {
        status: res.status,
        payload
    }
    if(!res.ok) {
        throw new HttpError(data)
    }
    return data
}

const http = {
    get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('GET', url, options)
    },
    post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('POST', url, {...options, body})
    },
    put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('PUT', url, {...options, body})
    }
}

export default http