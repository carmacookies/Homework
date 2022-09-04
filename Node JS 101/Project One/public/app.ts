async function handleJokeOne(){
    try {
        //@ts-ignore
        const { data } = await axios.get('/jokes/jokeone')
        //const { joke } = data
        console.log(data)
        //renderJoke(joke)
    } catch (error) {
        console.error(error);
    }
}

async function renderJoke(joke){
    const root = document.querySelector('.root')
    root.innerHTML = `<div>${joke}</div>`
}