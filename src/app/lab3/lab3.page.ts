import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {
  data: any = [];
  data_users: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/646409eab89b1e22999f23dc';
  loading: any;
  max: number = 0;
  min: number = 100;

  constructor(public loadingController: LoadingController) {}

  async download() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'downloading Tasks...',
    });
    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[i]);
        while (this.data[i] != undefined) {
          this.data_users.push(this.data[i][0]);
          i++;
        }
        // this.getMaxAge();
        // this.getMinAge();
        this.loading.dismiss();
      });
  }

  ngOnInit() {

  }
}

interface Articles {
  author : string,
  title : string,
  newspaper : string,
  issueNumber : number
  pageNumber : number
}