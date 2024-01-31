const server=require("./src/server")

const {dataBase}=require("./src/db")

const PORT=3001

const startServer=async()=>{
    try {
        await dataBase.sync({alter:true})
        server.listen(PORT, () => {
            console.log(`Server listening in port ${PORT} 💙💛💙`)
        });
    } catch (error) {
        console.error(`💀 Error starting server: ${error.message}💀`);  
    }
}

startServer()