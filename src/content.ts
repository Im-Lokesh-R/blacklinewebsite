// ============================================
// BLACK LINE | Detailing Studio
// Centralized content — edit everything here
// ============================================

export const site = {
  name: 'BLACK LINE',
  subname: 'DETAILING STUDIO',
  tagline: 'DETAILING | PROTECTION | PERFECTION',
  heroHeadline: ['PERFECTION', 'IS IN THE', 'DETAILS.'],
  aboutHeadline: "We don't wash cars.\nWe restore them.",
  contactHeadline: ["Let's make", 'it shine.'],
};

export const about = {
  image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp',
  story:
    'BLACK LINE was founded on a simple obsession: every vehicle deserves to look better than the day it left the showroom. What started as a one-bay workshop has grown into a full-fledged detailing, protection, and customization studio — but the philosophy hasn\u2019t changed. We treat every car as if it\u2019s our own, because the difference between clean and flawless is measured in microns.',
  counters: [
    { label: 'Years in Business', value: 8, suffix: '+' },
    { label: 'Cars Detailed', value: 1200, suffix: '+' },
    { label: 'Happy Clients', value: 950, suffix: '+' },
  ],
};

export type Service = {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  { id: 'ceramic-coating', number: '01', name: 'Ceramic Coating', description: 'Lock in a glass-like shine that repels water, dirt, and UV damage for years.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp' },
  { id: 'ppf', number: '02', name: 'Paint Protection Film', description: 'Self-healing transparent film that absorbs stone chips, scratches, and road debris.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp' },
  { id: 'exterior-detailing', number: '03', name: 'Exterior Detailing', description: 'Deep clean, decontamination, and protection for every exterior surface.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp' },
  { id: 'interior-detailing', number: '04', name: 'Interior Detailing', description: 'Sanitise, condition, and restore every surface inside the cabin.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp' },
  { id: 'foam-wash', number: '05', name: 'Foam Wash', description: 'pH-neutral foam bath that lifts dirt without touching the paint.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp' },
  { id: 'paint-correction', number: '06', name: 'Paint Correction', description: 'Machine polishing to remove swirl marks, oxidation, and holograms.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp' },
  { id: 'vinyl-wrapping', number: '07', name: 'Vinyl Wrapping', description: 'Full or partial colour changes with premium cast vinyl films.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp' },
  { id: 'headlight-restoration', number: '08', name: 'Headlight Restoration', description: 'Cloudy, yellowed lenses restored to factory clarity and protection.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp' },
  { id: 'windshield-coating', number: '09', name: 'Windshield Coating', description: 'Hydrophobic coating that sheets rain away for safer driving.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp' },
  { id: 'sunfilm', number: '10', name: 'Sunfilm', description: 'Heat-rejecting window films that keep the cabin cool and protected.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp' },
  { id: 'modifications', number: '11', name: 'Modifications', description: 'Performance and aesthetic upgrades, installed and tuned in-house.', image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp' },
];

export type Work = {
  id: string;
  title: string;
  services: string[];
  image: string;
  hasSlider: boolean;
  beforeImage?: string;
  afterImage?: string;
};

export const works: Work[] = [
  { id: 'w1', title: 'BMW M5 Competition', services: ['Paint Correction', 'Ceramic Coating'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp', hasSlider: false },
  { id: 'w2', title: 'Audi RS7 Sportback', services: ['PPF', 'Exterior Detailing'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp', hasSlider: false },
  { id: 'w3', title: 'Mercedes-AMG G63', services: ['Vinyl Wrapping', 'Foam Wash'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp', hasSlider: false },
  { id: 'w4', title: 'Porsche 911 Carrera S', services: ['Paint Correction', 'Ceramic Coating'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp', hasSlider: true, beforeImage: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp', afterImage: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp' },
  { id: 'w5', title: 'Range Rover Velar', services: ['Interior Detailing', 'Sunfilm'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp', hasSlider: false },
  { id: 'w6', title: 'Lamborghini Huracán', services: ['PPF', 'Paint Correction'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p5.webp', hasSlider: false },
  { id: 'w7', title: 'Toyota Supra GR', services: ['Headlight Restoration', 'Windshield Coating'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp', hasSlider: true, beforeImage: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp', afterImage: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p4.webp' },
  { id: 'w8', title: 'Bentley Continental GT', services: ['Exterior Detailing', 'Ceramic Coating'], image: '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p3.webp', hasSlider: false },
];

export const process = [
  { number: '01', title: 'Inspect', description: 'Every panel, every gap, every imperfection — documented before we begin.' },
  { number: '02', title: 'Prep & Correct', description: 'Decontamination, machine polishing, and surface correction to factory finish.' },
  { number: '03', title: 'Protect', description: 'Coatings, films, and sealants applied with surgical precision.' },
  { number: '04', title: 'Deliver', description: 'Final inspection under studio lighting. You see the difference.' },
];

export const reviews = [
  {
    name: 'Anbumozhi 123',
    meta: '12 reviews · 3 photos',
    timing: '2 months ago',
    highlight: 'Reasonable price',
    body: 'I had a very good experience with the 7 years PPF and stickering work. The quality of the work was excellent, and the finishing was very neat and professional. The workers were skilled, friendly, and completed the work properly. Overall, I am very happy with the service and would definitely recommend them.',
  },
  {
    name: 'Bragadeeshwaran G',
    meta: '2 reviews · 1 photo',
    timing: '2 months ago',
    highlight: 'BLACK. BOLD. BEAST.',
    body: 'Got my Mercedes-Benz CLA 200 transformed with Full Black PPF at Blackline. The finish, attention to detail, and overall transformation were excellent.',
  },
  {
    name: 'Saraswathy J',
    meta: 'Local Guide · 11 reviews · 34 photos',
    timing: 'a week ago',
    highlight: 'Great price',
    body: 'Even though they are a new shop, their professional level is very high. The service was neat and well finished.',
  },
  {
    name: 'Mohammed Murshith',
    meta: '6 reviews',
    timing: '2 months ago',
    highlight: 'Good work and satisfied',
    body: 'Good work and satisfied with the service. The team was professional and delivered a clean finish.',
  },
  {
    name: 'Mr Madhan',
    meta: '2 reviews · 1 photo',
    timing: '19 hours ago',
    highlight: 'Great work very satisfied',
    body: 'Do visit them for the best work. Very satisfied with the result and the overall experience.',
  },
];

export const contact = {
  phones: ['+91 99403 31994', '+91 88258 02692', '+91 97909 95708'],
  whatsappNumber: '919940331994',
  whatsappDisplay: '+91 99403 31994',
  email: 'info@blackline.detailing',
  instagram: 'blackline.detailing',
  instagramUrl: 'https://instagram.com/blackline.detailing',
  address: '1st Main Rd, Poompuhar Nagar, Kolathur, Chennai, Tamil Nadu 600099',
  hours: 'Mon\u2013Sat: 9:00 AM \u2013 7:00 PM',
  hoursSun: 'Sun: Closed',
  // Google Maps embed URL — replace with your actual embed link
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123!2d80.2068!3d13.0674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzAwLjIiTiA4MMKwMTInMjQuNSJF!5e0!3m2!1sen!2sin!4v0000000000000',
};

export const socials = [
  { name: 'Instagram', url: 'https://instagram.com/blackline.detailing' },
  { name: 'WhatsApp', url: 'https://wa.me/919940331994' },
  { name: 'Facebook', url: 'https://facebook.com/blackline.detailing' },
  { name: 'YouTube', url: 'https://youtube.com/@blackline.detailing' },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const heroImage = '/images/Gemini_Generated_Image_dpwbs5dpwbs5dpwb_merged_p2.webp';
