export const listEl = document.querySelector('.country-list')
export const infoEl = document.querySelector('.country-info')

export const listRender = (countries) => {
    const listCountries = countries.map(({name, flags}) => {
        return `<li class="country-list__line"> 
        <img src= "${flags.svg}" alt="${name}" class="country-list__images"/>
        <p> ${name} </p>
        </li>
        `
      }).join('')

    listEl.insertAdjacentHTML('beforeend', listCountries);
}

export const renderCountry = (country) => {
  
  const blockCountry = country.map(({ flags, name, capital, population, languages }) => {
    
    return `
    <div class="country-list__line">
     <img src= "${flags.svg}" alt="${name}" class="country-list__images"/>
     <h2>
      ${name}
     </h2>
    </div>
    <ul class="country">
     <li>
       <p>
        <b>Capital:</b> ${capital}
       </p>
     </li>
     <li>
       <p>
        <b>Population:</b> ${population}
       </p>
     </li>
     <li>
       <p>
        <b>Languages:</b> ${languages[0].iso639_1}
       </p>
     </li>
    </ul>
    `
  }).join('')

  infoEl.insertAdjacentHTML('beforeend', blockCountry);
}