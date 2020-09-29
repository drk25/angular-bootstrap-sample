import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import items from '../../../assets/content.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  page: string;
  public listItems: { item: string }[];
  public contents: { item: string }[];
  public headerContent: { item: string }; 
  public footerContent: { item: string };
  public listHeader: { item: string };
  constructor(private _Activatedroute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.listItems = items[this.page]['listItems'];
      this.contents = items[this.page]['contents'];
      this.headerContent = items[this.page]['headerContent'];
      this.footerContent = items[this.page]['footerContent'];
      this.listHeader = items[this.page]['listHeader'];
    });
  }
}
