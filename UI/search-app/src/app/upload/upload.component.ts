import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

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
      // Here you would handle the upload logic, e.g., send to a backend
      alert(`File '${this.selectedFile.name}' uploaded!`);
      this.selectedFile = null;
    }
  }
}
