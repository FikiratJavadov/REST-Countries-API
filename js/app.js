//Selectors:
const row = document.querySelector(".myRow");
const input = document.querySelector("input[type='text']");
const menu = document.querySelector(".dropdown-menu");

//Api:
let api = `https://restcountries.eu/rest/v2/all`;
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((country, index) => {
      let { flag, name, population, region, capital } = country;

      show(flag, name, population, region, capital, index);
    });
   
    //  INPUT
    input.addEventListener("input", function (e) {
      let val = input.value;
      let countryName = document.querySelectorAll(".name");
      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(val.toLowerCase())) {
          name.parentElement.parentElement.style.display = "block";
        } else {
          name.parentElement.parentElement.style.display = "none";
        }
      });
    });

    menu.addEventListener("click", function (e) {
      let target = e.target;
      console.log(target.innerText);
      let regionName = document.querySelectorAll(".region");
      regionName.forEach((name) => {
        switch (target.innerText) {
          case "Africa":
            if (name.innerText == "Africa") {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "America":
            if (name.innerText == "Americas") {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Asia":
            if (name.innerText == "Asia") {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Europe":
            if (name.innerText == "Europe") {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Oceania":
            if (name.innerText == "Oceania") {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;
        }
      });
    });


    const mainDiv = document.querySelectorAll(".padding");
    mainDiv.forEach(div =>{
        div.addEventListener("click", function(){
            console.log(data[div.dataset.index]);

        });
    });
  });

//Functions:
function show(flag, name, population, region, capital, index) {
  row.innerHTML += `
            <div class="col-md-3 mt-5 padding" data-index = ${index}>
                        <div class="img-box">
                            <img class="img-fluid" src="${flag}" alt="">
                        </div>
                        <div class="content">
                            <h6 class ="name">${name}</h6>
                            <ul>
                                <li>Population: <span>${population}</span></li>
                                <li>Region: <span class="region">${region}</span></li>
                                <li>Capital: <span>${capital}</span></li>
                            </ul>
                        </div>
                    </div>`;
}

function capitalizeFirstLetter(value) {
  return value[0].toUpperCase() + value.slice(1);
}
