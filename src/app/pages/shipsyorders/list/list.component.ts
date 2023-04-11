import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShipsyOrder } from 'src/app/core/models/shipsyorder/shipsyorder';
import { ShipsyOrderClient } from 'src/app/core/requests/shipsyorder-client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'id',
    'cn',
    'phone',
    'customer',
    'note',
    'status',
    'tries',
    'inviteSms',
    'formSms',
    'addressSubmit',
    'whatsAppSms',
    'business',
    'time',
    'address',
    'saudiShortAddress',
    'googleMapsUrl',
    'what3Word',
    'actions'
  ];
  dataSource!: MatTableDataSource<ShipsyOrder>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private client: ShipsyOrderClient) {}

  ngOnInit(): void {
    this.client.list().subscribe(
      (shipsyorders) => {
        this.dataSource = new MatTableDataSource(shipsyorders.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        
      }
    );
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
