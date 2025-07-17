export const numberInputData = {
  id: 'numberInput',
  name: 'Number Input',
  category: 'Form',
  description: 'Number Input allows the user to enter a number',
  parameters: [

    {
      name: 'number_title',
      description: 'Title for the number input field'
    },
    {
      name: 'number_desc',
      description: 'Description for the number input field'
    },
    {
      name: 'addit_class',
      description: 'in-row'
    },    
    {
      name: 'number_class',
      description: 'CSS class name for the number input field'
    },
    {
      name: 'unit',
      description: 'Unit for the number input field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/numberInput/basic.png`,
      code: `
@include('widget::components.design-parts.number', [
  'number_title' => 'title',
  'number_desc' => 'desc',
  'number_name' => 'name',
  'addit_class' => 'in-row',
  'unit' => 'px'
])
    `
    },
  ]
}; 