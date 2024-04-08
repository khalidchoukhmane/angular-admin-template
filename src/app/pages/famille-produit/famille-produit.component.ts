import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FpDeleteDialogComponent } from './fp-delete-dialog/fp-delete-dialog.component';
import { HttpClient } from '@angular/common/http';
import { FamilleProduit } from '../../model/fp.model';

@Component({
  selector: 'app-famille-produit',
  templateUrl: './famille-produit.component.html',
  styleUrl: './famille-produit.component.css'
})
export class FamilleProduitComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['technical_no', 'fp_name', 'date','operation'];
  dataSource !: MatTableDataSource<FamilleProduit>;
  
  constructor(private dialog: MatDialog, private http: HttpClient){}

  famille_produit : Array<FamilleProduit> = [];

  ngOnInit(): void {
    this.http.get<Array<FamilleProduit>>('http://localhost:8089/famille-produit')
    .subscribe({
      next : data => { 
        this.dataSource = new MatTableDataSource(data);
        console.log(this.famille_produit);
    },
    error: err => {
      console.log(err);
    }
  })
}


























  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteItem(item: string): void {
    const dialogRef = this.dialog.open(FpDeleteDialogComponent, {
      data: { item } // Pass data about the item to delete
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If result is true, delete the item
        //this.items = this.items.filter(i => i !== item);
        console.log("element deleted")
      }
    });
  }

}

export interface PeriodicElement {
  technical_no: number;
  fp_name: string;
  data: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {technical_no: 1, fp_name: 'Hydrogen', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Helium', data: new Date()},
  {technical_no: 2, fp_name: 'Hydro', data: new Date()},
];