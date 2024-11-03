import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import config from "./fireBaseConfig.js"

const fireBaseConfig = config
export const app = initializeApp(fireBaseConfig)

export const db = getDatabase()