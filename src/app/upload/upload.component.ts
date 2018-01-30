import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http'

import {UploadService} from './upload.service'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {

  progressValue: number = 0

  uploadForm: FormGroup

  constructor(private upService: UploadService, private fb: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      //required validation will only work because of a directive -> InputFileDirective
      fileToUpload: this.fb.control('', [Validators.required])
    })
  }

  send(){

    console.log()

    let files = this.uploadForm.get('fileToUpload').value
    if(files && files[0]){

      let formData = new FormData()
      formData.append('myFile', files[0])

      this.upService.upload(formData).subscribe(event=>{
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          this.progressValue = Math.round(100 * event.loaded / event.total);
          console.log(`File is ${this.progressValue}% uploaded.`);

        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      })
    }
  }

}
