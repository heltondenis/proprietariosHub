import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Correção: importe Router de @angular/router
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-imoveis',
  standalone: true,
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss'],
  imports: [CommonModule, NzDividerModule, CommonModule, NzTableModule],
})

export class ImoveisComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() { }

  navigateToImoveis() {
  this.router.navigate(['/imoveis']);
}

dataSet = [
  { name: 'John Doe', age: 30, address: 'New York No. 1 Lake Park' },
  // Mais dados...
];

}

