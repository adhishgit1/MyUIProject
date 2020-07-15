import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface User {
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class DateService {
  dateUrl = "assets/config.json";

  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get(this.dateUrl);
  }

  getUsers(): Observable<Object> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
