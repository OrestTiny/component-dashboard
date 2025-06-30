export const borderSectionData = {
  id: 'borderSection',
  name: 'Border Section',
  category: 'Form',
  description: 'Border Section allows the user to select a value from a range',
  parameters: [
    {
      name: 'title',
      description: 'Description for the heading field'
    },
    {
      name: 'desc',
      description: 'Description for the heading field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/borderSection/basic.png`,
      code: `
@include('widget::components.template-parts.multiple-options', [
    'title_m_o' => 'title',
    'desc_m_o' => 'desc',
    'options' => [
        [
            'path' => 'widget::components.design-parts.color',
            'path_data' => [
                'color_title' => 'title',
                'color_class' => 'class'
            ]
        ],
        [
            'path' => 'widget::components.design-parts.number',
            'path_data' => [
                'number_title' => 'title',
                'number_class' => 'class',
                'unit' => 'px'
            ]
        ],
        [
            'path' => 'widget::components.design-parts.number',
            'path_data' => [
                'number_title' => 'title',
                'number_class' => 'class',
                'unit' => 'px'
            ]
        ],
    ]
])
    `
    },
  ]
}; 