console.log('Hey');

let requestData = async ()=>{
    let response = await axios.get("https://www.udemy.com/api-2.0/courses/", {
        headers : {
            "Accept": "application/json, text/plain, */*",
            "Authorization": "Basic S094dGFxcUZ2ZFJkRm5kNXRsWEV1UFhNNHNGT0c0MW9jajFJMDBOaDpLVkJLM2VTUTBHSHhHMXVFS2V6TzkzZWVueEN1Tnd6THZkWnNPY2xnUnFlbFJ1dFFuengwU25yR3hGZDR4cGtRM0c0dk9TNjN0d0x4SmNjNER4SVB3TXRicjZQUnZEdDBPRE9lUEsxY3gyc2Uxc1hRT0hpYzFpSWNHUEVOa2czVg==",
            "Content-Type": "application/json;charset=utf-8",
        }
    })
    console.log(response);
}

// requestData();