import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
 
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const id = searchParams.get('id')

  await dbConnect()
  // let products = []
  // let foundProduct  = await Product.findById(id)
  // products.push(foundProduct)
  let products  = await Product.find()
  return NextResponse.json(products)
}
  
export async function POST(request: Request) {
  let product = await request.json()

  if(!product._id) product._id = new mongoose.Types.ObjectId()
    
  await Product.findByIdAndUpdate(product._id, product, {upsert: true})
  return NextResponse.json({ 'status': true })
}



