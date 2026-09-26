import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-location-search',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './location-search.html',
  styleUrl: './location-search.scss',
})
export class LocationSearch implements OnInit{
  weatherLocationControl = new FormControl();
  constructor(){}

  ngOnInit(){

  }
}
