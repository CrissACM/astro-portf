import { ACCENT_STORAGE_KEY, applyAccent, DEFAULT_ACCENT } from '../lib/accent';

export const initAccentPicker = () => {
  const menu = document.querySelector<HTMLDetailsElement>('[data-accent-menu]');
  const customInput = document.querySelector<HTMLInputElement>('[data-custom-accent]');
  const presets = document.querySelectorAll<HTMLButtonElement>('[data-accent-preset]');

  const syncControls = (color: string) => {
    if (customInput) customInput.value = color;
    presets.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.accentPreset === color));
    });
  };

  const selectAccent = (color: string, persist = true) => {
    const properties = applyAccent(color, { persist });
    if (properties) syncControls(properties.color);
  };

  presets.forEach((button) => {
    button.addEventListener('click', () => {
      selectAccent(button.dataset.accentPreset ?? '');
      menu?.removeAttribute('open');
    });
  });
  customInput?.addEventListener('input', () => selectAccent(customInput.value));
  selectAccent(localStorage.getItem(ACCENT_STORAGE_KEY) ?? DEFAULT_ACCENT, false);

  document.addEventListener('click', (event) => {
    if (menu?.open && !menu.contains(event.target as Node)) menu.removeAttribute('open');
  });

  return {
    close: () => menu?.removeAttribute('open'),
  };
};
