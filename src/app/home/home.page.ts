import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  categories = [];
  highlights = [];
  featured = [];

  catSlideOpts = {
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10,
    freeMode: true,

  };

  highlightSlideOpts = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true
  };

  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true
  };

  showLocationDetail = false;


  constructor(private http: HttpClient) {}

  
  ngOnInit(): void {
      this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json').subscribe((res: any) => {
        console.log(res);
        this.categories = res.categories;
        this.highlights = res.highlights;
        this.featured = res.featured;
      });
  }

  doRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 2000)
  }

  onScroll(ev){
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 50;
  }


}
