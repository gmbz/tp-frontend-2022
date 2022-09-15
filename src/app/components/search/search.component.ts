import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm = new FormControl("");
  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value));
  }

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('search') searchEmitter = new EventEmitter<string>();
}
