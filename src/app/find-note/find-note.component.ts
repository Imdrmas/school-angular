import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddNoteComponent } from '../add-note/add-note.component';
import { Note } from '../modal/Modal';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-find-note',
  templateUrl: './find-note.component.html',
  styleUrls: ['./find-note.component.css']
})
export class FindNoteComponent implements OnInit {
  note: Note = {} as Note;
  idNote: number;

  constructor(private route: ActivatedRoute, private noteService: NoteService,  private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idNote = this.route.snapshot.params.idNote;
        this.noteService.findNote(this.idNote).subscribe(note => {
          this.note = note;
        })
      }
    )
  }

  ngOnInit(): void {
  }
  deleteNote(idNote: number) {
   if(confirm('Are you sure')) {
     this.noteService.deleteNote(idNote).subscribe(() => {
      window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-exams`)
     })
   }
  }
  updateNote(idNote: number) {
    this.dialog.open(AddNoteComponent, {
      data: {idNote},
      height: '300px',
      width: '400px',
    });
  }
}
