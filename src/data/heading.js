export const headingData = {
  id: 'heading',
  name: 'Heading',
  category: 'Form',
  description: 'Heading allows the user to enter a heading',
  parameters: [
    {
      name: 'title',
      description: 'Title for the heading field'
    },
    
    {
      name: 'desc',
      description: 'Description for the heading field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/heading/basic.png`,
      code: `
@include('widget::components.design-parts.title_desc', [
    'title' => 'title',
    'desc' => 'desc',
])
    `
    },
  ]
}; 