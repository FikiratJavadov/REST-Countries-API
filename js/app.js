//Selectors:
const row = document.querySelector(".myRow");
const input = document.querySelector("input[type='text']");
const menu = document.querySelector(".dropdown-menu");
const test = document.querySelector("h1");
const info = document.querySelector("#info");
const bigImg = document.querySelector(".big-img img");
const mainInfo = document.querySelector(".p");
const back = document.querySelector(".back");
const switcher = document.querySelector(".nav p");
const content = document.querySelectorAll(".content");


//Api:
let api = `https://restcountries.eu/rest/v2/all`;
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((country, index) => {
      let {
        flag,
        name,
        population,
        region,
        capital,
        alpha3Code
      } = country;

      show(flag, name, population, region, capital, index, alpha3Code);
    });

    //  INPUT
    input.addEventListener("input", function (e) {
      let val = input.value;
      let countryName = document.querySelectorAll(".name");
      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(val.toLowerCase())) {
          name.parentElement.parentElement.parentElement.style.display = "block";
        } else {
          name.parentElement.parentElement.parentElement.style.display = "none";
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
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "America":
            if (name.innerText == "Americas") {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Asia":
            if (name.innerText == "Asia") {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Europe":
            if (name.innerText == "Europe") {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;

          case "Oceania":
            if (name.innerText == "Oceania") {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "block";
            } else {
              name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
                "none";
            }
            break;
          default:
            name.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
              "block";
        }
      });
    });


    const mainDiv = document.querySelectorAll(".padding");
    mainDiv.forEach(div => {
      div.addEventListener("click", function () {
        let obj = data[div.dataset.index];
        console.log(obj);
        let {
          name,
          nativeName,
          population,
          region,
          subregion,
          capital
        } = obj;

        let domain = [];
        obj.topLevelDomain.forEach(dom => {
          domain.push(dom);
        });

        let currencies = [];
        obj.currencies.forEach(lave => {
          currencies.push(lave.name);
        });

        let languages = [];
        obj.languages.forEach(lang => {
          languages.push(lang.name);
        });

        let countryName = document.querySelectorAll(".name");
        let codeNames = [];
        OUTTER: for (let i = 0; i < obj.borders.length; i++) {
          INNER: for (let j = 0; j < countryName.length; j++) {
            if (obj.borders[i] == countryName[j].dataset.code) {
              codeNames.push(countryName[j].innerText);
              continue OUTTER;
            }
          }
        }


        console.log(codeNames);

        bigImg.setAttribute("src", obj.flag);
        mainInfo.innerHTML = `
                        <h1>${name}</h1>
                        <div class="big-info">
                            <ul class="first">
                                <li>Native Name: <span>${nativeName}</span></li>
                                <li>Population: <span>${population}</span></li>
                                <li>Region: <span>${region}</span></li>
                                <li>Sub Region: <span>${subregion}</span></li>
                                <li>Capital: <span>${capital}</span></li>
                            </ul>
                            <ul class="second">
                                <li>Top Level Domain: <span>${domain.join(", ")}</span></li>
                                <li>Currencies: <span>${currencies.join(", ")}</span></li>
                                <li>Languages: <span>${languages.join(", ")}</span></li>
                            </ul>
                        </div>
                        <div class="borders">
                            <p class = "border-show">Borders Countries:</p>
                        </div>`;

        const borders = document.querySelector(".border-show");
        if (codeNames.length > 0) {
          codeNames.forEach(code => {
            let span = document.createElement("span");
            span.innerText = code;
            borders.append(span);
          });
        } else {
          let span = document.createElement("span");
          span.innerText = "none";
          borders.append(span);
        }


        info.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";

      });
    });

    back.addEventListener("click", function () {
      document.querySelector("body").style.overflow = "";
      info.style.display = "none";
    });




    switcher.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("white");
    });

  });

//Functions:
function show(flag, name, population, region, capital, index, code) {
  row.innerHTML += `
            <div class="col-md-4 col-lg-3 mt-5 padding" data-index = ${index} >
                        <div class="cart">
                        <div class="img-box">
                            <img class="img-fluid" src="${flag}" alt="">
                        </div>
                        <div class="content">
                            <h6 data-code = ${code} class ="name">${name}</h6>
                            <ul>
                                <li>Population: <span>${population}</span></li>
                                <li>Region: <span class="region">${region}</span></li>
                                <li>Capital: <span>${capital}</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>`;
}