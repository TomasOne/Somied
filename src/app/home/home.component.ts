import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}

const apiUrl = 'http://ergast.com/api/f1/current/last/results.json';

fetch(apiUrl)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud a la API');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error: ', error);
  });
