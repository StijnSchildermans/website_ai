
var header = fetch('resources/header.htm')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var loc = (window.location.pathname).split("/").pop();
        doc.getElementById("href_" + loc).classList.add("w3-gray");
        console.log(doc);
        document.getElementById("div_header").innerHTML = doc.body.innerHTML;
    })
    .catch(function(err) {
        console.log('Failed to fetch page: ', err);
    });
