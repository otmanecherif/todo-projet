import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClientModule} from '@angular/common/http';


@Component({
  
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Ajout de HttpClientModule ici
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  newTask = { id: null, title: '', description: '' };

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getTasks();
    }
  }

  getTasks(): void {
    this.http.get<any[]>(`${environment.apiUrl}/tasks`).subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des tâches', err);
        // Si le backend ne répond pas, afficher une liste vide
        this.tasks = [];
      }
    });
  }

  saveTask(): void {
    const url = `${environment.apiUrl}/tasks`;
    if (!this.newTask.title) {
      alert('Le titre est obligatoire');
      return;
    }

    if (this.newTask.id) {
      this.http.put(`${url}/${this.newTask.id}`, this.newTask).subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex(task => task.id === this.newTask.id);
          this.tasks[index] = updatedTask;
          this.resetForm();
        },
        error: (err) => console.error('Erreur lors de la modification de la tâche', err)
      });
    } else {
      this.http.post(url, this.newTask).subscribe({
        next: (createdTask) => {
          this.tasks.push(createdTask);
          this.resetForm();
        },
        error: (err) => console.error('Erreur lors de l\'ajout de la tâche', err)
      });
    }
  }

  deleteTask(taskId: number): void {
    this.http.delete(`${environment.apiUrl}/tasks/${taskId}`).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      error: (err) => console.error('Erreur lors de la suppression de la tâche', err),
    });
  }

  editTask(task: any): void {
    this.newTask = { ...task };
  }

  resetForm(): void {
    this.newTask = { id: null, title: '', description: '' };
  }
}
