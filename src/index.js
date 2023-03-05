import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import { listRender, renderCountry, listEl, infoEl } from "./js/markupRender"
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const MAX_COUNTRIES = 10;

const inputEl = document.querySelector('#search-box')

const onSearchCountries = (e) => {
    clearInfo();
    fetchCountries(e.target.value.trim())
    .then( response => {
      if (!response.ok) {
          return Notiflix.Notify.failure('Oops, there is no country with that name')
      }
      return response.json();
    })
    .then(countries => showCountry(countries))
  };

inputEl.addEventListener('input', debounce(onSearchCountries, DEBOUNCE_DELAY));

const showCountry = (country) => {
  if (country.length === 1) {
    renderCountry(country);
  }

  else if (country.length <= MAX_COUNTRIES) { 
    listRender(country)
  }

  else
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  return;
}

const clearInfo = () => {
  infoEl.innerHTML = '';
  listEl.innerHTML = '';
};