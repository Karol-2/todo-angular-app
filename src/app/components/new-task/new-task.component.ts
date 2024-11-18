import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/new-task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  constructor(private tasksService: TasksService){}

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.close.emit()
  }
  
}
