import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel za uvoz slika 1

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Nema takvog recepta kakvog vi trazite, veoma nam je zao! 🤷‍♂️';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
