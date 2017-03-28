export const company = {
  name: 'Company A',
  description: ' Company Description',
  images: ['http://placehold.it/750x450', 'http://placehold.it/850x550'],
  logo: 'http://placehold.it/750x450',
  opensAt: '8AM',
  closesAt: '10PM',
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
