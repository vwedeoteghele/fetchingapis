 //api to display the lyrics of a specific song
 lyricsBaseUrl = 'https://api.lyrics.ovh/v1/'
 lyricsDiv =document.querySelector('.lyrical')

 const getLyricsDataFromApi = async () => {
     try{
         const lyricsBaseUrlResponse = await fetch(`${lyricsBaseUrl}Coldplay/Adventure of a Lifetime`)
            const JsonLyricsData = await lyricsBaseUrlResponse.json();
            const lyrics = await JsonLyricsData.lyrics
                return lyrics
     }
     catch(error){
         console.log("API unavailable")
    }
 }

 window.addEventListener('load', async() => {
     let lyricsData = await getLyricsDataFromApi()
        lyricsDiv.innerHTML = lyricsData;
 })


//api to display activity when a user click the 'i'm bored' button
const boredBaseUrl = 'https://www.boredapi.com/api/'
const boredDiv = document.querySelector('.content')
const button = document.querySelector('.boredbtn')

const getBoredDataFromApi = async () => {
    try {
        const boredApiResponse = await fetch(`${boredBaseUrl}activity/`)
            const jsonBoredFormat = boredApiResponse.json()
                 return jsonBoredFormat
    }
    catch (error){
            console.log('api is currently unavailable for your consumption')
    }
}

button.addEventListener('click', async () => {
    const boredData = await getBoredDataFromApi()
    boredDiv.innerHTML = boredData.activity
})

//api to display cat facts with load event
const catFactsBaseUrl = 'https://cat-fact.herokuapp.com'
const catFactsDiv = document.querySelector('.contentclass')

const getcatFactsDataFromApi = async () => {
    try{
        const catFactsApiResponse = await fetch(`${catFactsBaseUrl}/facts`)
        const catFactsJson = await catFactsApiResponse.json()
            return catFactsJson
    }
    catch(error){
        console.log('api is down or unavailable')
    }
}

window.addEventListener('load', async () => {
    const CatFactsData = await getcatFactsDataFromApi()
    let displayHtmlData = CatFactsData.map((fact, i = 1) => {
        return `
        <h3>Fact ${i}: ${fact.text}</h3>
        <hr>
        `
    })
    let formattedCatFacts = displayHtmlData.join(' ')
    catFactsDiv.innerHTML = formattedCatFacts;
}) 