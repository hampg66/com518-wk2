"use strict";
document.getElementById('search').addEventListener('click', async () => {
    const artist = document.getElementById('theArtist').value;
    try {
        // Send a request to our remote URL
        const response = await fetch(`http://localhost:3000/artist/${artist}`);
        // Parse the JSON.
        const artists = await response.json();
        // Loop through the array of JSON objects and add the results to a <div>
        let html = "";
        artists.forEach((a) => {
            html += `Artist: ${a.artist} Title: ${a.title} Year: ${a.year} Downloads: ${a.downloads} Price: ${a.price} Quantity: ${a.quantity}<br />`;
        });
        document.getElementById('htresults').innerHTML = html;
    }
    catch (e) {
        alert(`There was an error: ${e}`);
    }
});
