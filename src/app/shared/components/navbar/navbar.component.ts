import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../../core/services/dark-mode.service';

/**
 * Navigation bar component. Displays site navigation links and a dark/light
 * toggle. On mobile screens a hamburger menu reveals the links. The dark mode
 * preference is stored using the DarkModeService.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuOpen = false;

  constructor(private darkMode: DarkModeService) {}

  ngOnInit(): void {
    // Initialize the theme on startup. Without this call the system preference
    // or stored preference would not be applied until the first toggle.
    this.darkMode.init();
  }

  /**
   * Toggles the mobile menu open/closed.
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closes the mobile menu. Useful when navigating to another route.
   */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Toggles between dark and light mode using the service.
   */
  toggleTheme(): void {
    this.darkMode.toggle();
  }

  /**
   * Returns whether dark mode is currently enabled.
   */
  get isDark(): boolean {
    return this.darkMode.isDarkMode();
  }
}