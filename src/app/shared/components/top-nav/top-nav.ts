import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  imports: [CommonModule],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.css',
})
export class TopNav implements OnInit {
  @Output() actionEmitter = new EventEmitter();
  isDarkMode = false;
  constructor() {}
  ngOnInit(): void {
    // On component load, check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  logout() {
    const payload = {
      type: 'LOGOUT',
    };
    this.actionEmitter.emit(payload);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
