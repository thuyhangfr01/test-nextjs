import http from "@/lib/http";

type TTask = {
    id: string
    name: string
    avatar: string
    createdAt: string
}

const tasksApiRequest = {
    get: () => http.get<TTask[]>('/api/v1/tasks')
}

export default tasksApiRequest;