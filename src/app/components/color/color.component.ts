import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor:Color

  constructor(private colorservice: ColorService) {}

  ngOnInit(): void {
    this.getColors()
  }

  getColors() {
    this.colorservice.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  clearCurrentColor() {
    this.currentColor = { colorId: 0, colorName: '' };
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClass() {
    if (!this.currentColor || this.currentColor.colorId == 0) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
