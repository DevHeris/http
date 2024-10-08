import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
})
export class DocsComponent {
  logConfig: any;

  constructor(private service: ConfigService) {
    // this.logConfig = this.service.fetchJSONData();
  }
}

// Within a component, you can combine @if with the async pipe to render the UI for the data only after it's finished loading:
// import { AsyncPipe } from '@angular/common';
// @Component({
//   standalone: true,
//   imports: [AsyncPipe],
//   template: `
//     @if (user$ | async; as user) {
//     <p>Name: {{ user.name }}</p>
//     <p>Biography: {{ user.biography }}</p>
//     }
//   `,
// })
// export class UserProfileComponent {
//   @Input() userId!: string;
//   user$!: Observable<User>;
//   constructor(private userService: UserService) {}
//   ngOnInit(): void {
//     this.user$ = this.userService.getUser(this.userId);
//   }
// }
