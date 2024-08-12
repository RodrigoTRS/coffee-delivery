"use client"

import "dotenv/config"
import { z } from "zod";

const envSchema = z.object({
    BACKEND_URL: z.string()
})

// console.log(process.env)

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.log(_env.error)
    throw new Error("Failed on parsing env variables.")
}

export const env = _env.data