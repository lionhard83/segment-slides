import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  sliderOptions = { pager: true, autoHeight: true }

  constructor(
  ) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
