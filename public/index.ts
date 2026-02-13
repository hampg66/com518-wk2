interface Artist {
    id: number;
    title : string,
    artist :string,
    year : number,
    downloads : number,
    price : number,
    quantity : number
}

document.getElementById('search')!.addEventListener('click', async()=> {

    const artist = (document.getElementById('theArtist') as HTMLInputElement).value;
    try {
        // Send a request to our remote URL
        const response = await fetch(`http://localhost:3000/artist/${artist}`);

        // Parse the JSON.
        const artists = await response.json();

        const resultsDiv = document.getElementById("htresults")!;
        resultsDiv.innerHTML = "";




        // Loop through the array of JSON objects and add the results to a <div>
        // let html = "";
        artists.forEach ( (a : Artist) => {
            // html += `Artist: ${a.artist} Title: ${a.title} Year: ${a.year} Downloads: ${a.downloads} Price: ${a.price} Quantity: ${a.quantity}<br />`;
            const p = document.createElement("p");
            const newButton = document.createElement("button");
            const buttonText = document .createTextNode("Buy");

            p.innerHTML = `Artist: ${a.artist}
                Title: ${a.title}
                Year: ${a.year}
                Downloads: ${a.downloads}
                Price: ${a.price}
                Quantity: ${a.quantity}`

            resultsDiv.appendChild(p)
            newButton.appendChild(buttonText);
            resultsDiv.appendChild(newButton);

            newButton.addEventListener("click", async() => {
                try {
                    const response = await fetch(`http://localhost:3000/buy/${a.id}`, {method: "POST"});
                    const result = await response.json()
                    alert("Song Bought!")  
                
                } catch (error) {
                    alert("Error purchasing")
                }})
            });
            
            
                
        
        // document.getElementById('htresults')!.innerHTML = html;
    } catch (e) {
        alert(`There was an error: ${e}`);
    }
});