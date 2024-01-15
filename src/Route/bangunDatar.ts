import  express  from "express"
import { kelilingLingkaran, luasLingkaran } from "../Controller/bangunDatar"
const app =  express()

/** allow read a body */
app.use(express.json())

/** fungsi use() digunakan
 * untuk menerapkan sebuah fungsi
 * pada object express. fungbsi tsb aakan
 * otomotis dijalankan
 */

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)

export default app