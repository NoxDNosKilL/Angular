import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Universidad ESAN";
  fullName = "Fernando";
  objCurso: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any>("https://nodejs2021.noxdnoskill.repl.co/")
      .subscribe((data) => {
        console.log(data);
        this.objCurso = data;
      });
  }
}
