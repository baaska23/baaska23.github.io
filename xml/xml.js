// XMLHttpRequest to fetch RSS feed data via CORS Anywhere proxy
const xhr = new XMLHttpRequest();
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy URL to bypass CORS
const targetUrl = "https://ikon.mn/rss"; // Original RSS feed URL

xhr.open("GET", proxyUrl + targetUrl, true);

// On successful response
xhr.onload = function () {
    if (xhr.status === 200) {
        const xmlData = xhr.responseXML; // Parsing the XML data
        console.log(xmlData); // Log the XML to check structure
        displayNewsList(xmlData); // Call the function to display news list
    } else {
        console.error("Error fetching the RSS feed!");
    }
};

// On error
xhr.onerror = function () {
    console.error("Request failed!");
};

// Sending the request
xhr.send();

// Function to display the news list
function displayNewsList(xmlData) {
    const items = xmlData.getElementsByTagName("item"); // Getting all "item" tags from RSS feed
    console.log(items); // Log the items to see if they're correctly parsed

    const newsContainer = document.getElementById("news-list"); // The container to display news

    // If no items are found, display a message
    if (items.length === 0) {
        newsContainer.innerHTML = "<p>No news found</p>";
        return;
    }

    // Loop through each item and create the news list
    for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName("title")[0].textContent; // Extracting title
        const link = items[i].getElementsByTagName("link")[0].textContent; // Extracting link

        // Log title and link for debugging
        console.log("Title:", title, "Link:", link);

        const newsItem = document.createElement("div"); // Creating a div for each news item
        newsItem.innerHTML = `
            <h3>${title}</h3>
            <button onclick="viewDetails('${link}')">Read More</button> <!-- Button to view details -->
        `;
        newsContainer.appendChild(newsItem); // Append the news item to the container
    }
}

// Function to open the detailed news in a new window
function viewDetails(link) {
    window.open(link, "_blank"); // Opens the news link in a new tab
}
