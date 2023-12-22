import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Vacune } from '../../../models/vacune.module';
import { FormControl, FormGroup } from '@angular/forms';
import { VacuneService } from '../../../services/vacune.service';
import { PageEvent } from '@angular/material/paginator';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-vacune-list',
  templateUrl: './admin-vacune-list.component.html',
  styleUrl: './admin-vacune-list.component.css'
})
export class AdminVacuneListComponent implements OnInit {

  def = true;
  items: Vacune[] = [];
  pageLength: number | undefined;
  page: number = 0;
  actualVacune!: Vacune;

  searchWord = new FormGroup({
    word: new FormControl('')
  })

  newVacune = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  editVacune = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  private modalService = inject(NgbModal);
  closeResult = '';

  createModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  editModal(content: TemplateRef<any>, vacune: Vacune) {
    this.actualVacune = vacune;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  deleteModal(content: TemplateRef<any>, vacune: Vacune) {
    this.modalService.open(content, { ariaLabelledBy: 'delete-modal' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

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

  newVac() {
    this.vacuneService.newVacune(this.newVacune.value.name!, this.newVacune.value.description!).subscribe(v => {
      this.loadData(true);
    })
  }

  editVac(id: string) {
    this.vacuneService.editVacune(id, this.editVacune.value.name!, this.editVacune.value.description!).subscribe(v => {
      this.loadData(true);
    })
  }

  deleteVac(id: string) {
    this.vacuneService.deleteVacune(id).subscribe(v => {
      console.log("borrado");
      this.loadData(true);
    })
    this.modalService.dismissAll();

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
