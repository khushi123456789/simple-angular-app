import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  template: `
  <mat-table [dataSource]="dataSource">
  <ng-container matColumnDef="name">
    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
    <mat-cell *matCellDef="let user"> {{user.name}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="email">
    <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
    <mat-cell *matCellDef="let user"> {{user.email}} </mat-cell>
  </ng-container>

  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
</mat-table>
  `,
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  displayedColumns = ['name', 'email'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users').subscribe((data: any) => {
      this.dataSource.data = data.data;
    });
  }
}
