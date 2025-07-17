export const textAreaData = {
  id: 'textarea',
  name: 'Text Area',
  category: 'Form',
  description: 'TextArea allows the user to enter text',
  parameters: [
    {
      name: 'title',
      description: 'Title for the text input field'
    },
    {
      name: 'desc',
      description: 'Description for the text input field'
    },
    {
      name: 'name',
      description: 'Name attribute for the input'
    },
  ],
  sections: [
    {
      id: '1',
      image: `${process.env.PUBLIC_URL}/assets/images/textArea/1.png`,
      code: `
@include('widget::components.design-parts.textarea', [
    'title' => 'title',
    'desc' => 'desc',
    'name' => 'name',
])
    `
    },
  ]
}; 