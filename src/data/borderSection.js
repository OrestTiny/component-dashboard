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
    'title_m_o' => 'border_style_title',
    'desc_m_o' => 'border_style_desc',
    'options' => [
        [
            'path' => 'widget::components.design-parts.color',
            'path_data' => [
                'color_title' => 'title_color',
                'key' => 'widgetObjectKey'
            ]
        ],
        [
            'path' => 'widget::components.design-parts.number',
            'path_data' => [
                'number_title' => 'title_border_width',
                'key' => 'widgetObjectKey',
                'unit' => 'px'
            ]
        ],
        [
            'path' => 'widget::components.design-parts.number',
            'path_data' => [
                'number_title' => 'title_border_radius',
                'key' => 'widgetObjectKey',
                'unit' => 'px'
            ]
        ],
    ]
])
    `
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/borderSection/2.png`,
      code: `
@include('widget::components.template-parts.tab-group', [
  'title' => 'border_style_title',
  'desc' => 'border_style_desc',
  'input_name' => 'name',
  'tabs' => [
      [
          'option' => 'default',
          'value' => 'default',
          'path' => 'widget::components.template-parts.multiple-options',
          'path_data' => [
              'options' => [
                  [
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_color',
                          'key' => 'widgetObjectKey'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_border_width',
                          'key' => 'widgetObjectKey',
                          'unit' => 'px'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_border_radius',
                          'key' => 'widgetObjectKey',
                          'unit' => 'px'
                      ]
                  ]
              ]
          ]
      ],
      [
          'option' => 'on_hover',
          'value' => 'on_hover',
          'path' => 'widget::components.template-parts.multiple-options',
          'path_data' => [
              'options' => [
                  [
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_color_hover',
                          'key' => 'widgetObjectKey_hover'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_border_width_hover',
                          'key' => 'widgetObjectKey_hover',
                          'unit' => 'px'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_border_radius_hover',
                          'key' => 'widgetObjectKey_hover',
                          'unit' => 'px'
                      ]
                  ]
              ]
          ]
      ]
  ]
])
    `
    },
  ]
}; 