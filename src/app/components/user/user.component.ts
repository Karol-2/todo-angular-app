import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
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
