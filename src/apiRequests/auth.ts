import { TLoginResponse, TLoginRequest } from '@/common'
import http from '@/lib/http'

const authApiRequest = {
  login: (body: TLoginRequest) => http.post<TLoginResponse>('/auth/login', body),
}

export default authApiRequest
