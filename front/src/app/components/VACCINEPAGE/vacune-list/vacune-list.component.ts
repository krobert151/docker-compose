import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Vacune } from '../../../models/vacune.module';
import { VacuneService } from '../../../services/vacune.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vacune-list',
  templateUrl: './vacune-list.component.html',
  styleUrl: './vacune-list.component.css'
})
export class VacuneListComponent implements OnInit {
  def = true;
  items: Vacune[] = [];
  pageLength: number | undefined;
  page: number = 0;

  searchWord = new FormGroup({
    word: new FormControl('')
  })

  constructor(private vacuneService: VacuneService) { }

  ngOnInit(): void {
    this.loadData(false);
  }

  changePage($event: PageEvent): void {
    console.log($event);
    this.page = $event.pageIndex;
    this.loadData(true);
  }

  loadData(changingPage: boolean): void {
    if (!changingPage) {
      if (this.def) {
        this.page = 0;
        this.getItems();
      } else {
        this.page = 0;
        this.getItemsBySearch();
      }
    } else {
      if (this.def) {
        this.getItems();
      } else {
        this.getItemsBySearch();
      }
    }
  }

  search() {
    if (this.searchWord.value.word == "") {
      this.def = true;
    } else {
      this.def = false;
    }
    this.loadData(true)
  }

  getItems() {
    this.vacuneService.getAllVacine(this.page).subscribe(v => {
      this.items = v.content;
      this.pageLength = v.totalElements;
      this.page = v.pageable.pageNumber;
    })
  }

  getItemsBySearch() {
    this.vacuneService.getSearchVacineByName(this.page, this.searchWord.value.word!).subscribe(v => {
      this.items = v.content;
      this.pageLength = v.totalElements;
      this.page = v.pageable.pageNumber;
    })
  }
}
