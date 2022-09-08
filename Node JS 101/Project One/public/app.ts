async function handleJokeOne(event){
    try {
        //@ts-ignore
        const { data } = await axios.post('/jokes/jokeone')
        renderJoke(data)
    } catch (error) {
        console.error(error);
    }
}

function renderJoke(joke: any){
    const root=document.querySelector(".root")
    root.innerHTML=`<div>${joke}</div>`
}