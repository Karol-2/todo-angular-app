import { Component, computed, Input, signal, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../models/user.model';
import { CardComponent } from "../../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input() selected: boolean = false;

  @Output() select = new EventEmitter<string>();

  // signal inputs
  // avatar = input.required<string>();
  // name = input.required<string>();

  // sinal version
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }


  // selectedUser = signal( DUMMY_USERS[randomIndex]);

  // // with using signals
  // imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);

  // // without signals with zone.js
  // // get imagePath() {
  // //   return 'assets/users/' + this.selectedUser.avatar;
  // // }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
