import { Component } from '@angular/core';
import { ContentResponse, ContentResponseNumbers } from './models/content-response';
import { GetInfo } from './models/getInfo'
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularProject';

  info: any;
  numbers : any;
  constructor(private infoService: InfoService) { 
    this.info = new ContentResponse();
    this.numbers = new ContentResponseNumbers();
  }

  ngOnInit() {
    this.infoService.getInfo().subscribe((data: any) => {
      console.log(data)
      this.info.hostname = data.hostname;
      this.info.date = data.date;
      this.info.author = data.author;
    });
    this.infoService.getNumbers().subscribe((result : any) => {
      console.log(result)
      this.numbers.author = result.author;
      this.numbers.count = result.count;
      this.numbers.sum = result.sum;
    });
  }
}