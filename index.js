require("./db")
const express=require("express")
const app = express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 10000;


const registerRouter=require("./Routers/register")
const itemRouter=require("./Routers/items")
const blogRouter=require("./Routers/blog")
const contactRouter=require("./Routers/contacts")
const reviewRouter=require("./Routers/review")
const cartOrder=require("./Routers/cartOrder")

app.use("/Users",registerRouter)
app.use("/Items",itemRouter)
app.use("/Blog",blogRouter)
app.use("/contact",contactRouter)
app.use("/Reviews",reviewRouter)
app.use("/cart",cartOrder)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
