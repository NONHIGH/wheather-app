import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() submited = new EventEmitter<string>();
  inputSearch = new FormControl('');
  constructor() {}
  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search) => search?.trim()), //quitar espacios en el principio y fin
        debounceTime(850), //debounce o retraso o delay del metodo para que se ejecute el evento
        distinctUntilChanged(), //no emitir evento si el valor actual es igual al  valor anterior
        filter((search) => search !== ''), //filtro para palabras, puedo poner un regex
        tap((search) => this.submited.emit(search))
      )
      .subscribe();
  }
}
