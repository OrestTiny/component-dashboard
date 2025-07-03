export const colorPickerData = {
  id: 'colorPicker',
  name: 'Color Picker',
  category: 'Form',
  description: 'Color Picker allows the user to select a color',
  parameters: [
    {
      name: 'title',
      description: 'Title for the color picker field'
    },
    
    {
      name: 'desc',
      description: 'Description for the color picker field'
    },
    {
      name: 'color_class',
      description: 'Class for the color picker field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPicker/1.png`,
      code: `
@include('widget::components.design-parts.color', [
    'color_class' => 'class',
    'key' => 'key,
    'hide_heading' => true
])
    `
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPicker/2.png`,
      code: `
@include('widget::components.design-parts.block_color', [
    'title' => 'title',
    'desc' => 'desc',
    'color_class' => 'class',
])
    `
    },
    {
      id: 'multiple',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPicker/3.png`,
      code: `
@include('widget::components.template-parts.multiple-options', [
    'title_m_o' => 'color_style_title',
    'desc_m_o' => 'color_style_desc',
    'options' => [
        [
            'path' => 'widget::components.design-parts.color',
            'path_data' => [
                'color_title' => 'title_color',
                'key' => 'widgetObjectKey'
            ]
        ],
        [
            'path' => 'widget::components.design-parts.color',
            'path_data' => [
                'color_title' => 'title_background',
                'key' => 'widgetObjectKey',
            ]
        ],
        [
            'path' => 'widget::components.design-parts.color',
            'path_data' => [
                'color_title' => 'title_border',
                'key' => 'widgetObjectKey',
            ]
        ],
    ]
])
    `
    },
    {
      id: '4',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPicker/4.png`,
      code: `
@include('widget::components.template-parts.tab-group', [
  'title' => 'color_style_title',
  'desc' => 'color_style_desc',
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
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_background',
                          'key' => 'widgetObjectKey',
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_border',
                          'key' => 'widgetObjectKey',
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
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_background_hover',
                          'key' => 'widgetObjectKey_hover',
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.color',
                      'path_data' => [
                          'color_title' => 'title_border_hover',
                          'key' => 'widgetObjectKey_hover',
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