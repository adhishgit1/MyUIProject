import { Component, OnInit } from "@angular/core";
import { DateService } from "../services/date.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface User {
  name: string;
  id: string;
  username: string;
  phone: string;
}

@Component({
  selector: "app-choose-date",
  templateUrl: "./choose-date.component.html",
  styleUrls: ["./choose-date.component.scss"],
})
export class ChooseDateComponent implements OnInit {
  dateSelected: string;
  dateSelectedFlag = false;
  users: User[];

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource: User[];
  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.dateService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.dataSource = this.users;
      },
      (error) => {
        console.log("error");
      }
    );
  }

  inputEvent($event) {
    this.dateSelectedFlag = true;
    console.log($event.value);
    this.dateSelected = $event.value;
  }
  changeEvent(event) {
    console.log(event.value);
  }
}
