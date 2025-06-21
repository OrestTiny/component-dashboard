export const textInputData = {
  id: 'textinput',
  name: 'Text Input',
  category: 'Form',
  description: 'TextInput allows the user to enter text',
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
      name: 'additClass',
      description: 'CSS class name for section'
    },
    {
      name: 'class',
      description: 'CSS class name for input'
    },
    {
      name: 'name',
      description: 'Name attribute for the input'
    },
    {
      name: 'infoText',
      description: 'Info text for the input'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/textInput/basic.png`,
      code: `
@include('widget::components.design-parts.text', [
    'title' => 'title',
    'desc' => 'desc',
    'name' => 'name',
])
    `
    },
  ]
}; 