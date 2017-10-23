import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {

  public isDesktop: boolean;
  public isActive: boolean;
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  

  ngOnInit() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      this.isDesktop = true;
      this.isActive = false;
    } else {
      this.isDesktop = false;
      this.isActive = true;
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      let number = this.document.documentElement.scrollTop || document.body.scrollTop || 0
      if (number > 200) {
        this.isActive = true;
      } 
    }
  }
}