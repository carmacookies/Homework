import router from "../routes/jokesRoutes"

export async function getJokeOne (req:any, res:any){
    try {

        console.log('thtth')
        res.send('blue waffle')
    } catch (error) {
        console.error(error)
    }
}

export async function getJokeTwo (req:any, res:any){
    try {
        res.return('joke two')
    } catch (error) {
        
    }
}

export async function getJokeThree (req:any, res:any){
    try {
        res.return('joke three')
    } catch (error) {
        
    }
}

export default router