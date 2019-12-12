import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'firebase-demo';
<<<<<<< HEAD
  courses$;
  course$;
  author$;
  constructor(db: AngularFireDatabase)
  {
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');

  }

=======
  countries: Observable<Course[]>;
  constructor(db: AngularFireDatabase)
  {
    db.list('/courses').valueChanges().subscribe(
      courses => {
        this.courses = courses;
        console.log(this.courses);
      }
    );

  }
>>>>>>> ff15c2472ee054d5f345189567a9f67b1dfb2587
}
