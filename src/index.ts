/**ini adalah file utama */
/** dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response } from "express"
import { ValidateCube } from "./middleware/ValidateCube"
import routeBangunDatar from "./Route/bangunDatar"

/**buat wadah untuk inisiasi express */
const app = express()

/**mendefinisikan port berjalannya server */
const PORT = 8000

app.use(express.json())

/**proses pertama untuk handle request */
app.get(`/serena`, (request: Request, response: Response) => {
    /**
     * ini adalah proses handle request dengan 
     * url/address: https//localhost:8000/serena
     * method get
     */
    return response.status(200).json({
        message: `Hello Serena Anaknya Bu Siana`
    })
})

/** read a query request */
app.get(`/moklet`, (request: Request, response: Response) => {
    /**asumsikan data yg dikirim
     * adalah nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.nama?.toString()

    let message: string = `my name is${umur} years old`
    return response.status(200).json(message)
})
/** read data requets from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `my name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})
/**read a requets from body */
app.post(`/moklet`, (request: Request, response: Response) => {
    /**asumsikan data yang dikirimkan panjang dan lebar  */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luarPersegiPanjang: number = panjang * lebar
    let message = `luas Persegi Panjang adalah ${luarPersegiPanjang}`
    return response.status(200).json(message)
})
app.post(`/balok`,(request:Request,response:Response)=>{
    let panjang: number=Number(request.body.panjang)
    let lebar: number=Number(request.body.lebar)
    let tinggi: number=Number(request.body.tinggi)

    let volume:number=panjang*lebar*tinggi
    return response.status(200).json({
        panjang,lebar,tinggi,volume
    })
})

app.use(routeBangunDatar)

/**run server */
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})