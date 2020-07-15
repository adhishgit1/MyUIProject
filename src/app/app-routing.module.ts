import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChooseDateComponent } from "./choose-date/choose-date.component";

const routes: Routes = [
  { path: "", redirectTo: "/choose-date", pathMatch: "full" },
  { path: "choose-date", component: ChooseDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
