import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Note } from '../modal/Modal';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  progressBar = false;
  note: Note = {} as Note;

  constructor(private noteService: NoteService, private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idNote) {
      this.noteService.findNote(this.data.idNote).subscribe(note => {
        this.note = note;
      })
    }
  }
addNote() {
  this.progressBar = true;
  if(this.data.idNote) {
    this.noteService.editNote(this.note, this.data.idNote).subscribe(note => {
      this.note = note;
      window.location.reload();
    })
  } else {
    this.noteService.addNote(this.note, this.data.idExam).subscribe(note => {
      this.note = note;
      window.location.reload();
    })
  }
}
}
