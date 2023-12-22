import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/get-all-patients.interface';
import { PatientService } from '../../../services/patient.service';
import { NgbDateStruct, NgbModal, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { DependentsByPatientResponse } from '../../../models/dependents-by-patient.interface';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrl: './patients-page.component.css'
})
export class PatientsPageComponent implements OnInit {
  patientList: Patient[] = [];
  pageNumber: number = 0;
  count: number = 0;
  selectedPatient?: Patient;
  dependentsList: DependentsByPatientResponse[] = [];
  birthDate: NgbDateStruct | null = null;


  constructor(
    private patientService: PatientService,
    config: NgbOffcanvasConfig,
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) {
    config.position = 'end';
    config.backdropClass = 'bg-dark';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.patientService.GetAll(this.pageNumber - 1).subscribe(resp => {
      this.patientList = resp.content;
      this.count = resp.totalElements;
    });
  }
  openOffcanvas(patientDetails: any, patient: Patient) {
    this.patientService.GetById(patient.id).subscribe(resp => {
      this.selectedPatient = resp;
      this.offcanvasService.open(patientDetails);

      this.patientService.GetDependents(patient.id).subscribe(resp => {
        this.dependentsList = resp;
        this.isDepentListEmpty();
      });
    });
  }
  isDepentListEmpty() {
    if (this.dependentsList.length <= 1) {
      return true;
    } else {
      return false;
    }
  }

  deletePatient(id: string) {
    this.patientService.deletePatientById(id).subscribe(
      () => {
        console.log("Paciente borrado");
        location.reload();
      },
      error => {
        if (error.status === 400)
          window.alert('Error: Cant delete patients with dependents or those who are in charge of a patient.');
      }
    );
  }

  createModal(createPatient: any) {
    this.modalService.open(createPatient);
  }

  newPatient = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(''),
    dni: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    fotoUrl: new FormControl(''),
    password: new FormControl(''),
  })

  createPat() {
    console.log("edad en guiri" + this.birthDate);
    const formattedDate = this.birthDate
      ? `${String(this.birthDate.day).padStart(2, '0')}-${String(this.birthDate.month).padStart(2, '0')}-${this.birthDate.year}`
      : '';
    console.log("españo" + formattedDate);
    this.patientService.createPatient(
      this.newPatient.value.name!,
      this.newPatient.value.lastName!,
      formattedDate,
      this.newPatient.value.dni!,
      this.newPatient.value.email!,
      this.newPatient.value.phoneNumber!,
      this.newPatient.value.fotoUrl!,
      this.newPatient.value.password!,
    ).subscribe(() => {
      console.log("Paciente creado");
      this.closeModal();
      location.reload();
    },
      error => {
        if (error.status === 400)
          window.alert('Error: Cant create patients with the same email, or something go wrong');
      }
    );
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  updateBirthDate(newDate: NgbDateStruct | null): void {
    this.birthDate = newDate;
  }
}
