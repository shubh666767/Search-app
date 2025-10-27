import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  fileInput: any;

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe({
        next: () => {
          
          alert(`File '${this.selectedFile!.name}' uploaded!`);
         // this.selectedFile.name = null;
          this.selectedFile = null;
          this.fileInput.value = '';
          console.log(this.selectedFile);
        },
        error: (err) => {
          this.selectedFile = null;
          console.log(err);
          throw new Error(err);
        //  alert('Upload failed.');
        }
      });
    }
  }
}
