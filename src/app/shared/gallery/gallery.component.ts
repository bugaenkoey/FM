import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/datas.service';
import { GALLERY } from 'src/app/mock-nailServices';
// import { DatasService } from '../datas.service';
// import { GALLERY } from '../mock-nailServices';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  
  // items =["Tom", "Bob", "Sam", "Bill"];

  constructor(public datasService: DatasService) { }

  ngOnInit(): void {
  }
public galery:string[] = GALLERY;

getGalery(){


}



}
