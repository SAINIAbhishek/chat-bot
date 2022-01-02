import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  emojiPickerVisible = false;

  message = '';

  form: FormGroup = this._formBuilder.group({
    message: ['', [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public emojiClicked(event: any) {
    this.form.setValue({
      message: this.form.get('message').value + event.emoji.native
    });
    this.emojiPickerVisible = false;
  }

  public submit() {
  }
}
