import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';

interface Question {
  questiontext: string;
  username: string;
}

interface QuestionId extends Question {
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questionsCollection: AngularFirestoreCollection<Question>;
  questions: any;

  username: string;
  questiontext: string;

  questionDoc: AngularFirestoreDocument<Question>;
  questionOverview: Observable<Question>;

  constructor(public afs: AngularFirestore) { }

  ngOnInit() {
    this.questionsCollection = this.afs.collection('questions');
    this.questions = this.questionsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Question;
          const id = a.payload.doc.id;
          return {id, data};
        })
      }));
  }

  addQuestion() {
    this.afs.collection('questions').add({'user': ProfileComponent.name, 'text': this.questiontext});
  }

  /*getQuestion(questionId){
    console.log(questionId);
    this.questionDoc = this.afs.doc('questions/' + questionId);
    this.questionOverview = this.questionDoc.valueChanges();
  }*/

  deleteQuestion(questionId) {
    this.afs.doc('questions/' + questionId).delete();
  }

}
