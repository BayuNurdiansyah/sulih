// Data global situs. Ubah di sini, otomatis berlaku di semua halaman.

export const SITE_NAME = 'Sulih';
export const SITE_URL = 'https://sulih.vercel.app';
export const SITE_TITLE = 'Sulih: Modernisasi Aplikasi PHP Lama ke Laravel';
export const SITE_DESCRIPTION =
	'Sulih memperbarui aplikasi PHP native dan CodeIgniter lama ke Laravel secara bertahap. Data tetap utuh dan aplikasi tetap jalan selama proses. Dari Yogyakarta.';

export const OWNER_NAME = 'Ahmad Bayu Nurdiansyah';
export const CITY = 'Yogyakarta';

// Nomor WhatsApp format internasional tanpa tanda +, misal 6281234567890
export const WHATSAPP_NUMBER = '62895363736136';
export const GITHUB_URL = 'https://github.com/BayuNurdiansyah';

export const LANDING_PATH = '/jasa-migrasi-php-ke-laravel/';

export function waLink(message = 'Halo Sulih, saya ingin konsultasi migrasi aplikasi ke Laravel.') {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
	{ href: LANDING_PATH, label: 'Layanan' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/tentang/', label: 'Tentang' },
	{ href: '/kontak/', label: 'Kontak' },
];
