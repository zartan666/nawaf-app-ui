export const company = {
  name: 'Company A',
  description_en: 'Company Description',
  description_ar: ' شركة ا  شركة ا  شركة ا  شركة ا ',
  images: ['http://placehold.it/750x450', 'http://placehold.it/850x550'],
  logo: 'http://placehold.it/750x450',
  opensAt: '08:00',
  closesAt: '22:00',
  services: [
    {
      name: 'Facial',
      items: [
        {
          name: 'Hair Facial',
          price: 200,
        },
        {
          name: 'Chin Facial',
          price: 100,
        },
      ],
    },
    {
      name: 'Bleaching',
      items: [
        {
          name: 'Hair Bleaching',
          price: 200,
        },
        {
          name: 'Chin Bleaching',
          price: 100,
        },
      ],
    },
  ],
  facilities: [
    {
      name: 'Payment',
      value: 'Cash, Knet',
    },
    {
      name: 'Free Parking',
      value: 'Available',
    },
  ],
};

export const companies = [
  company,
  company,
  company,
  company
];
