const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(
      `MongoDB Connected: ${connec.connection.host}`.cyan.underline.bold
    )
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
    process.exit(1)
  }
}
