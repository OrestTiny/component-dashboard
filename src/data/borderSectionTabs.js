export const borderSectionTabsData = {
  id: 'borderSectionTabs',
  name: 'Border Section Tabs',
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
    {
      name: 'full_width',
      description: 'boolean'
    },
    {
      name: 'options',
      description: '[color, number]'
    },
    {
      name: 'tabs',
      description: '[option, value] - must be unique'
    },

  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/borderSectionTabs/basic.png`,
      code: `
@include('widget::components.template-parts.tab-group', [
  'title' => 'title',
  'desc' => 'description',
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
                          'color_title' => 'title_hover',
                          'color_class' => 'class_hover'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_hover',
                          'number_class' => 'class_hover',
                          'unit' => 'px'
                      ]
                  ],
                  [
                      'path' => 'widget::components.design-parts.number',
                      'path_data' => [
                          'number_title' => 'title_hover',
                          'number_class' => 'class_hover',
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