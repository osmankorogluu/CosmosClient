import { Component } from '@angular/core';

import { cilList, cilShieldAlt } from '@coreui/icons';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  icons = { cilList, cilShieldAlt };
}
