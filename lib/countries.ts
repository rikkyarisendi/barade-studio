// lib/countries.ts
export type Country = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  format: string;
  minLength: number;
  maxLength: number;
};

export const COUNTRIES: Country[] = [
  // 🌏 Asia
  { code: 'id', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', format: '812-3456-7890', minLength: 10, maxLength: 13 },
  { code: 'sg', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', format: '9123 4567', minLength: 8, maxLength: 8 },
  { code: 'my', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', format: '12-345 6789', minLength: 9, maxLength: 10 },
  { code: 'th', name: 'Thailand', dialCode: '+66', flag: '🇹🇭', format: '81-234-5678', minLength: 9, maxLength: 10 },
  { code: 'ph', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', format: '917-123-4567', minLength: 10, maxLength: 11 },
  { code: 'vn', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳', format: '912-345-678', minLength: 9, maxLength: 11 },
  { code: 'jp', name: 'Japan', dialCode: '+81', flag: '🇯🇵', format: '90-1234-5678', minLength: 10, maxLength: 11 },
  { code: 'kr', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', format: '10-1234-5678', minLength: 10, maxLength: 11 },
  { code: 'cn', name: 'China', dialCode: '+86', flag: '🇨🇳', format: '138-1234-5678', minLength: 11, maxLength: 12 },
  { code: 'hk', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', format: '9123 4567', minLength: 8, maxLength: 8 },
  { code: 'tw', name: 'Taiwan', dialCode: '+886', flag: '🇹🇼', format: '912-345-678', minLength: 9, maxLength: 10 },
  { code: 'in', name: 'India', dialCode: '+91', flag: '🇮🇳', format: '98765 43210', minLength: 10, maxLength: 10 },
  { code: 'pk', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', format: '301-2345678', minLength: 10, maxLength: 11 },
  { code: 'bd', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', format: '1812-345678', minLength: 10, maxLength: 11 },
  { code: 'ae', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', format: '50-123-4567', minLength: 9, maxLength: 9 },
  { code: 'sa', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', format: '50-123-4567', minLength: 9, maxLength: 9 },
  { code: 'il', name: 'Israel', dialCode: '+972', flag: '🇮🇱', format: '50-123-4567', minLength: 9, maxLength: 10 },
  { code: 'tr', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', format: '532-123-4567', minLength: 10, maxLength: 11 },
  
  // 🌍 Europe
  { code: 'gb', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', format: '7911 123456', minLength: 10, maxLength: 10 },
  { code: 'de', name: 'Germany', dialCode: '+49', flag: '🇩🇪', format: '151 12345678', minLength: 10, maxLength: 12 },
  { code: 'fr', name: 'France', dialCode: '+33', flag: '🇫🇷', format: '6 12 34 56 78', minLength: 9, maxLength: 9 },
  { code: 'it', name: 'Italy', dialCode: '+39', flag: '🇮🇹', format: '312 345 6789', minLength: 9, maxLength: 10 },
  { code: 'es', name: 'Spain', dialCode: '+34', flag: '🇪🇸', format: '612 34 56 78', minLength: 9, maxLength: 9 },
  { code: 'nl', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', format: '6 12345678', minLength: 9, maxLength: 9 },
  { code: 'be', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', format: '470 12 34 56', minLength: 9, maxLength: 9 },
  { code: 'ch', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', format: '79 123 45 67', minLength: 9, maxLength: 9 },
  { code: 'at', name: 'Austria', dialCode: '+43', flag: '🇦🇹', format: '664 1234567', minLength: 9, maxLength: 10 },
  { code: 'pl', name: 'Poland', dialCode: '+48', flag: '🇵🇱', format: '512 345 678', minLength: 9, maxLength: 9 },
  { code: 'se', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', format: '70 123 45 67', minLength: 9, maxLength: 10 },
  { code: 'no', name: 'Norway', dialCode: '+47', flag: '🇳🇴', format: '412 34 567', minLength: 8, maxLength: 8 },
  { code: 'dk', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', format: '12 34 56 78', minLength: 8, maxLength: 8 },
  { code: 'fi', name: 'Finland', dialCode: '+358', flag: '🇫🇮', format: '40 1234567', minLength: 9, maxLength: 10 },
  { code: 'ru', name: 'Russia', dialCode: '+7', flag: '🇷🇺', format: '912 345-67-89', minLength: 10, maxLength: 11 },
  { code: 'ua', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦', format: '67 123 4567', minLength: 9, maxLength: 9 },
  { code: 'pt', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', format: '912 345 678', minLength: 9, maxLength: 9 },
  { code: 'gr', name: 'Greece', dialCode: '+30', flag: '🇬🇷', format: '691 234 5678', minLength: 10, maxLength: 10 },
  
  // 🌎 Americas
  { code: 'us', name: 'United States', dialCode: '+1', flag: '🇺🇸', format: '(555) 123-4567', minLength: 10, maxLength: 10 },
  { code: 'ca', name: 'Canada', dialCode: '+1', flag: '🇨🇦', format: '(555) 123-4567', minLength: 10, maxLength: 10 },
  { code: 'mx', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', format: '55 1234 5678', minLength: 10, maxLength: 10 },
  { code: 'br', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', format: '(11) 91234-5678', minLength: 10, maxLength: 11 },
  { code: 'ar', name: 'Argentina', dialCode: '+54', flag: '🇦🇷', format: '11 1234-5678', minLength: 10, maxLength: 11 },
  { code: 'cl', name: 'Chile', dialCode: '+56', flag: '🇨🇱', format: '9 1234 5678', minLength: 9, maxLength: 9 },
  { code: 'co', name: 'Colombia', dialCode: '+57', flag: '🇨🇴', format: '310 123 4567', minLength: 10, maxLength: 10 },
  { code: 'pe', name: 'Peru', dialCode: '+51', flag: '🇵🇪', format: '912 345 678', minLength: 9, maxLength: 9 },
  
  // 🌏 Oceania
  { code: 'au', name: 'Australia', dialCode: '+61', flag: '🇦🇺', format: '412 345 678', minLength: 9, maxLength: 9 },
  { code: 'nz', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', format: '21 123 4567', minLength: 9, maxLength: 10 },
  
  // 🌍 Africa
  { code: 'za', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', format: '82 123 4567', minLength: 9, maxLength: 9 },
  { code: 'ng', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', format: '802 123 4567', minLength: 10, maxLength: 11 },
  { code: 'ke', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', format: '712 345 678', minLength: 9, maxLength: 10 },
  { code: 'eg', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', format: '10 1234 5678', minLength: 10, maxLength: 11 },
  { code: 'ma', name: 'Morocco', dialCode: '+212', flag: '🇲🇦', format: '612-345678', minLength: 9, maxLength: 9 },
];

export const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'id')!;

export function getCountryByDialCode(dialCode: string): Country | undefined {
  return COUNTRIES.find(c => c.dialCode === dialCode);
}

export function validatePhoneByCountry(phone: string, country: Country): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const regex = /^[0-9]+$/;
  if (!regex.test(cleaned)) return false;
  return cleaned.length >= country.minLength && cleaned.length <= country.maxLength;
}