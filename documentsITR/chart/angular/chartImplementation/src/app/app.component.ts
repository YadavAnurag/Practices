import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data-service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'chartImplementation';

  constructor(private dataService: DataService) { }



  subTitle = Subscription;
  ngOnInit() {
    this.dataService.sendData(this.title);
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.title = data.msg + data.position;
    });
  }
  ngOnDestroy() { }
}