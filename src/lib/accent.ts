export const ACCENT_STORAGE_KEY = 'accent-color';
export const DEFAULT_ACCENT = '#a3ff12';

const HEX_COLOR_PATTERN = /^#[0-9a-f]{6}$/i;

export const normalizeAccent = (color: string): string | null =>
  HEX_COLOR_PATTERN.test(color) ? color.toLowerCase() : null;

export const getAccentProperties = (color: string) => {
  const normalized = normalizeAccent(color);
  if (!normalized) return null;

  const rgb = [
    Number.parseInt(normalized.slice(1, 3), 16),
    Number.parseInt(normalized.slice(3, 5), 16),
    Number.parseInt(normalized.slice(5, 7), 16),
  ] as const;
  const [red, green, blue] = rgb.map((value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  return {
    color: normalized,
    contrast: luminance > 0.42 ? '#061114' : '#ffffff',
    rgb: rgb.join(', '),
  };
};

export const applyAccent = (
  color: string,
  { persist = true, root = document.documentElement }: { persist?: boolean; root?: HTMLElement } = {},
) => {
  const properties = getAccentProperties(color);
  if (!properties) return null;

  root.style.setProperty('--accent', properties.color);
  root.style.setProperty('--accent-rgb', properties.rgb);
  root.style.setProperty('--accent-contrast', properties.contrast);
  if (persist) localStorage.setItem(ACCENT_STORAGE_KEY, properties.color);

  return properties;
};
