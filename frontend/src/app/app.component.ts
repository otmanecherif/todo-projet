import { Component } from '@angular/core';
import { TaskComponent } from './components/task/task.component'; // Ajoute l'import ici

@Component({
  selector: 'app-root',
  standalone: true, // Standalone configuration
  imports: [TaskComponent], // Ajoute TaskComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correction de "styleUrl" -> "styleUrls"
})
export class AppComponent {
  title = 'frontend';
}
