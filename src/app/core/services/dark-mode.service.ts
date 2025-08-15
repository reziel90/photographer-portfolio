import { Injectable } from '@angular/core';

/**
 * A simple service that manages dark/light theme toggling. It persists the
 * user's preference in localStorage and applies the Tailwind `dark` class to the
 * root `<html>` element accordingly. This pattern is inspired by the Tailwind
 * dark mode setup described in Joey McKenzie's article on implementing dark
 * mode in Angular【158837813946145†L56-L71】.
 */
@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private readonly storageKey = 'darkModeEnabled';

  /**
   * Determines if dark mode is currently enabled by inspecting the `html` tag.
   */
  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  /**
   * Toggles dark mode on or off. When enabled, the `dark` class is added to
   * `<html>` so that Tailwind dark variants take effect. The preference is
   * stored in localStorage for persistence across page reloads.
   */
  toggle(): void {
    const htmlEl = document.documentElement;
    const currentlyEnabled = htmlEl.classList.contains('dark');
    if (currentlyEnabled) {
      htmlEl.classList.remove('dark');
      localStorage.setItem(this.storageKey, 'false');
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem(this.storageKey, 'true');
    }
  }

  /**
   * Initializes the theme on application startup. If a user preference exists
   * in localStorage it takes precedence; otherwise, the system colour
   * preference is used【158837813946145†L56-L71】.
   */
  init(): void {
    const stored = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'true' || (stored === null && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }
}