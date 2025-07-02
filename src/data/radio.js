export const radioData = {
  id: 'radio',
  name: 'Radio',
  category: 'Form',
  description: 'Radio allows the user to select a value from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the radio field'
    },
    {
      name: 'desc',
      description: 'Description for the radio field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/radio/1.png`,
      code: `
@include('widget::components.design-parts.simple_radio', [
    'title_s_r' => 'title',
    'input_name' => 'name',
    'options' => [
        [
            'value' => 'option_1',
            'text' => 'Option 1',
        ],
        [
            'value' => 'option_2',
            'text' => 'Option 2',
        ]
    ]
])
    `
    },
  ]
}; 