export const headingData = {
  id: 'heading',
  name: 'Title & Description',
  category: 'Form',
  description: 'Title & Description allows the user to enter a title and description',
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