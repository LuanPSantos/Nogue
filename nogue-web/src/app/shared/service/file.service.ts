import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../model/image.model';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class FileService {

  FILE_URL = BASE_URL + '/files';

  constructor(private http: HttpClient) {

  }

  public uploadImage(formData: FormData): Observable<Image> {
    return this.http.post<Image>(`${this.FILE_URL}/images`, formData);
  }

  public deleteImage(imageName: string): Observable<void> {
    return this.http.delete<void>(`${this.FILE_URL}/images/${imageName}`);
  }
}
