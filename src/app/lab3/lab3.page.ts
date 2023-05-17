import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

interface Article {
  author: string;
  title: string;
  newspaper: string;
  issueNumber: number;
  pageNumber: number;
}

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {
  data: Article[] = [];
  searchedAuthor: string = '';
  dataUrl = 'https://api.jsonbin.io/v3/b/64653c478e4aa6225e9efa1f';
  loading: any;

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
        this.data = json.record.articles;
        this.loading.dismiss();
      })
      .catch((error) => {
        console.error('Error:', error);
        this.loading.dismiss();
      });
  }

  searchAuthor(author: string) {
    this.searchedAuthor = author;
  }

  isSearchedAuthor(author: string) {
    return this.searchedAuthor === author;
  }

  ngOnInit() {
    this.download();
  }
}
