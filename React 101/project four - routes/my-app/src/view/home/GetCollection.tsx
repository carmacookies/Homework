
export async function GetCollection() {
        //@ts-ignore
        const { data } = await axios.get("https://api.imgflip.com/get_memes")
        const gData = data.data
        return(gData)
      }