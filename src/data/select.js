export const selectData = {
  id: 'select',
  name: 'Select',
  category: 'Form',
  description: 'Select allows the user to select a value from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the select field'
    },
    {
      name: 'desc_sel',
      description: 'Description for the select field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/select/1.png`,
      code: `
@include('widget::components.design-parts.select', [
    'title' => 'title',
    'desc_sel' => 'desc_sel',
    'name' => 'name',
    'options' => [
        '1'  => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3',
    ]
])
    `
    },
    {
      id: '2',
      image: `${process.env.PUBLIC_URL}/assets/images/select/2.png`,
      code: ``
    },
  ]
}; 