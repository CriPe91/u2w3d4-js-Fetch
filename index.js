const url = "https://api.pexels.com/v1/search?query=dog";
const apiKey = "C2rACiO1I3zhNbpg3SBd45GHvEDLYKmoai4SNEFHnBTkaauOZmr6GJYN";

fetch(url, {
  method: "GET",
  headers: {
    Authorization: apiKey,
  },
})
  .then((response) => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("callError");
    }
  })
  .then((img) => {
    console.log("images", img);
    const loadBtn = document.querySelector(".loadBtn");
    loadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const card = document.querySelector(".card");
      card.innerHTML = "";
      images.photos.forEach((element) => {
        const imgElement = document.querySelector("img");
        imgElement.src = e.src.original;
        card.appendChild(imgElement);
      });
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
