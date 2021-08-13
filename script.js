let loadingSpinner = document.querySelector('.spinner-border');
let body = document.querySelector('.body');

document.body.classList.toggle('display');
body.classList.toggle('visible');

let useRequestResults = (results)=>{
    for(let i = 0; i <= 3; i++){
      document.querySelector(`#card${i+1} img`).src = results[i+5].image_480x270;
      document.querySelector(`#card${i+1} .card-text`).innerText = results[i+5].headline;
      document.querySelector(`#card${i+1} h4`).innerText = `Price : ${results[i+5].price}`;
    }
}

let requestData = async ()=>{
    let response = await axios.get("https://www.udemy.com/api-2.0/courses/", {
        headers : {
            "Accept": "application/json, text/plain, */*",
            "Authorization": "Basic S094dGFxcUZ2ZFJkRm5kNXRsWEV1UFhNNHNGT0c0MW9jajFJMDBOaDpLVkJLM2VTUTBHSHhHMXVFS2V6TzkzZWVueEN1Tnd6THZkWnNPY2xnUnFlbFJ1dFFuengwU25yR3hGZDR4cGtRM0c0dk9TNjN0d0x4SmNjNER4SVB3TXRicjZQUnZEdDBPRE9lUEsxY3gyc2Uxc1hRT0hpYzFpSWNHUEVOa2czVg==",
            "Content-Type": "application/json;charset=utf-8",
        }
    })
    useRequestResults(response.data.results);
    document.body.classList.toggle('display');
    body.classList.toggle('visible');
    loadingSpinner.classList.toggle('visible');
    console.log(response.data.results);
}

requestData();