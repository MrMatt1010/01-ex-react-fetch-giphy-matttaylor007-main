const renderRandomGif = async () => {

  const response = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=WBNJUV6E3F6oPR7HAbRaF6OmELgTUlej&tag=&rating=g"
  );
  const { data } = await response.json();

  const src = data.images.downsized_large.url;
  
  // Update the existing <img> tag with the new src
  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};

// Display a random GIF when the page loads
renderRandomGif();

// Display a random GIF when the button is clicked
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);
