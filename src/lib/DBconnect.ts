import mongoose from "mongoose"

type connectionObject = {
  isConnected?: number
}

const connected: connectionObject = {}

export async function DBConnect() : Promise<void> {

  if(connected.isConnected){
    console.log("already connected")
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI ||  '', {})
    connected.isConnected = db.connections[0].readyState

    console.log("DB Connection Success")
  } catch (error) {
    console.error("DB Connection Failed", error)
    process.exit(1)
  }
}