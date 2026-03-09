import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericServices<T> {
  protected http = inject(HttpClient);
  protected abstract apiUrl: string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.apiUrl + id);
  }

  create(model: T): Observable<void> {
    return this.http.post<void>(this.apiUrl, model);
  }

  update(model: T): Observable<void> {
    return this.http.put<void>(this.apiUrl, model);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
}
