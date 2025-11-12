export const notiInfoData = {
  id: 'noti_info',
  name: 'Notice Info',
  category: 'Form',
  description: 'Notice Info allows the user to display a notice information',
  parameters: [
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/notiInfo/1.png`,
      code: `
@include('widget::components.design-parts.notice_info', [
    'text' => 'text',
])
    `
    },
  ]
}; 