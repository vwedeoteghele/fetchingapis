 baseUrl = 'https://api.lyrics.ovh/v1/'
 contentDiv =document.querySelector('.lyrical')

 const getDataFromApi = async () => {
     try{
         const response = await fetch(`${baseUrl}Coldplay/Adventure of a Lifetime`)
         console.log(response);
        const JsonFormat = await response.json();
         console.log(JsonFormat)
         const lyrics = await JsonFormat.lyrics
         return lyrics
     }

     catch(error){
         console.log("API unavailable")
    }
 }

// //getDataFromApi();

 window.addEventListener('load', async() => {
     let returnedPromise = await getDataFromApi()
     contentDiv.innerHTML = returnedPromise;
 })

// // window.addEventListener('load', async () =>{
// //     const workData = await getDataFromApi()
// //     const firstWork = workData[0]
// // })

// // console.log(firstWork)


const baseUrl1 = 'https://www.boredapi.com/api/'
const contentDiv1 = document.querySelector('.content')
const button = document.querySelector('.boredbtn')

const getDataFromApi1 = async () => {
    try {
        const response1 = await fetch(`${baseUrl1}activity/`)
         console.log(response1)
            const jsonFormat = response1.json()
             console.log(jsonFormat)
             return jsonFormat
    }
    catch (error){
            console.log('api is currently unavailable for your consumption')
    }
}



button.addEventListener('click', async () => {
    const returnedPromise1 = await getDataFromApi1()
    console.log(returnedPromise1)
    contentDiv1.innerHTML = returnedPromise1.activity
})

const baseUrl2 = 'https://cat-fact.herokuapp.com'
const contentDiv2 = document.querySelector('.contentclass1')

const getDataFromApi2 = async () => {
    try{
        const response2 = await fetch(`${baseUrl2}/facts`)
        console.log(response2)
        const Json = await response2.json()
        console.log(Json)
        console.log(Json[0].text)
        return Json
    }
    catch(error){
        console.log('api is down or unavailable')
    }
}


window.addEventListener('load', async () => {
    const returnedPromise2 = await getDataFromApi2()
    let HTMLfacts = returnedPromise2.map((fact, i = 1) => {
        return `
        <h3>Fact ${i}: ${fact.text}</h3>
        <hr>
        `
    })

    let formattedHTMLfacts = HTMLfacts.join(' ')
    console.log(HTMLfacts)
    contentDiv2.innerHTML = formattedHTMLfacts;
}) 