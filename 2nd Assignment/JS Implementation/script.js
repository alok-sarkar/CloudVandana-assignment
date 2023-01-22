let Button = document.querySelector("#btn");
let container = document.querySelector("#container");
let url = "https://dummy73-dev-ed.develop.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9n_HvETGhr3BAnEIo7yWmw_yev6y2.cUZpM0UsjMvy8J2rXsTvDCKghjuHpQPnsQqB737MeZ3mw8IPg1o&client_secret=47B6030EA6DD8B3B85C73BE1C9B2466FA4C400C183677C1DFEFB8B85FBE224F3&username=aloksarkar0002@gmail.com&password=DekhaJak9!1jkcJ7Gupg7Tun0EnHYRl1sKU"
Button.addEventListener('click', async() => {
    console.log("clicked");

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     value: value
    // }));

    fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            if (!res.ok) {
                throw `Server error: [${res.status}] [${res.statusText}] [${res.url}]`;
            }
            res.json();
        })
        .then(d => console.log(d))
        .catch(err => {
            console.log("Error in fetch", err);
        });
    // let options = {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     mode: 'no-cors'
    // }
    // let response = await fetch(url, options);
    // let message = await response.json();
    // console.log(response);
});