import { Component, OnInit } from "@angular/core";
import { GeocodingService } from "../../common/geocoding.service";

@Component({
  selector: "app-mapo",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapoComponent implements OnInit {
  title = 'Dux-Web | Admin Dashboard';
  address: string;

  constructor(
    private geocoder: GeocodingService
  ) {
    this.address = "";
  }

  ngOnInit() {
  }
}
