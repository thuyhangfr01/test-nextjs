import http from "@/lib/http";

type TTask = {
    id: string
    name: string
    avatar: string
    createdAt: string
}

const tasksApiRequest = {
    get: () => http.get<TTask[]>('tasks')
}

export default tasksApiRequest;