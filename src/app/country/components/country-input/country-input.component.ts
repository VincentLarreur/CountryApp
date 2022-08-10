import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  query: string = ''
  
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( query => {
        this.onDebounce.emit(this.query);
      });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  keyPressed (event: any) {
    this.debouncer.next(this.query)
  }

}
