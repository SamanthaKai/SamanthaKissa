// Independent website concepts. None of these were commissioned, and none of the businesses
// named here are clients. Technologies are what the prototype source files actually use.
//
// liveUrl: add the published prototype URL here. While it is empty, the page says so
// instead of showing a link.

export const explorationsNotice =
  'These are unsolicited concept redesigns I made for practice. They were not commissioned, and I have no business relationship with, or endorsement from, the businesses named. Photography inside the prototypes comes from the businesses’ own public websites or is used for illustration, and belongs to its owners.'

export const explorations = [
  {
    slug: 'legacy-courts',
    title: 'Legacy Courts',
    subject: 'Serviced apartments · Ntinda, Kampala',
    objective:
      'Rethink a serviced-apartment website around the question guests actually arrive with: is there a room for my dates? The concept puts a booking request bar directly under the hero and routes requests to WhatsApp, which is how many guests in Kampala already prefer to book.',
    features: [
      'Check-in, check-out, guests and stay-type form in the first screen',
      'Booking requests handed off to WhatsApp',
      'Key facts surfaced as a short row of figures',
      'Separate layouts checked at desktop and phone widths',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Fonts (Fraunces, Inter)'],
    liveUrl: '',
    previews: [
      { src: '/images/legacy-courts-desktop.webp', width: 1280, height: 800, alt: 'Legacy Courts concept, desktop view of the hero and booking bar', label: 'Desktop' },
      { src: '/images/legacy-courts-phone.webp', width: 420, height: 705, alt: 'Legacy Courts concept, phone view', label: 'Phone' },
    ],
  },
  {
    slug: 'wilsen-hotel',
    title: 'Wilsen Hotel Nansana',
    subject: 'Hotel · Wilsen Mall, Nansana',
    objective:
      'Design a calm, upmarket presence for a hotel on Hoima Road, with a reservation panel that shows an estimated price as soon as dates and a room type are chosen, so there is no guesswork before contacting reception.',
    features: [
      'Reservation panel with live estimated total',
      'Room, dining, events and gallery sections',
      'Booking handed off to WhatsApp, with no payment taken',
      'Two alternative concept directions explored before the final one',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Fonts (Marcellus, Jost)'],
    liveUrl: '',
    previews: [
      { src: '/images/wilsen-hotel-desktop.webp', width: 1280, height: 800, alt: 'Wilsen Hotel concept, desktop view with the reservation panel', label: 'Desktop' },
      { src: '/images/wilsen-hotel-phone.webp', width: 390, height: 844, alt: 'Wilsen Hotel concept, phone view', label: 'Phone' },
    ],
  },
  {
    slug: 'imperial-group',
    title: 'Imperial Group',
    subject: 'Hotel collection · Kampala and Entebbe',
    objective:
      'Bring seven hotels and apartments under one clear group website, so visitors can compare properties, find conference venues and book directly, with a dedicated page for each property. The concept includes a full property page for the Entebbe resort.',
    features: [
      'Group landing page introducing seven properties',
      'Meetings and events given their own entry point',
      'A complete property page for one resort as a template for the rest',
      'Direct booking call to action throughout',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Fonts (DM Serif Display, DM Sans)'],
    liveUrl: '',
    previews: [
      { src: '/images/imperial-desktop.webp', width: 1280, height: 800, alt: 'Imperial Group concept, desktop view of the group landing page', label: 'Desktop' },
    ],
  },
]
