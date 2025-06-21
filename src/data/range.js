export const rangeData = {
  id: 'range',
  name: 'Range',
  category: 'Form',
  description: 'Range allows the user to select a value from a range',
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
      image: `${process.env.PUBLIC_URL}/assets/images/range/basic.png`,
      code: `
@include('widget::components.design-parts.range_unit', [
    'title' => 'title',
    'items' => [
        [
            'name' => 'name',
            'min_max' => ['0', '340'],
            'unit' => 'px'
        ]
    ]
])
    `
    },
  ]
}; 