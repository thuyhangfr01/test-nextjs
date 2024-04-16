import { z } from "zod";

const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse(process.env)

if (!configProject.success) {
    throw new Error('Invalid!')
}

export const envConfig = configProject.data 