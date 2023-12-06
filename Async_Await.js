function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Data fetched!!");
        },2000)
    })
}

async function fetchAsyncData() {
    try {
        let result = await fetchData();
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

fetchAsyncData()