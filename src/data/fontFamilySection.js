export const fontFamilySectionData = {
  id: 'fontFamilySection',
  name: 'Font Family Section',
  category: 'Form',
  description: 'Font Family Section allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/fontFamilySection/basic.png`,
      code: `
<div class="tile-column">
    @include('widget::components.design-parts.title_desc', [
        'title' => 'title',
        'desc' => 'desc',
    ])

    <div class="two-column">
        @include('widget::components.design-parts.google_fonts_select',[
            'title_g' => 'title',
            'key' => 'widgetObjectKey_font'
        ])
        @include('widget::components.design-parts.font_weight', [
            'title_w' => 'title',
            'key' => 'widgetObjectKey_weight'
        ])
    </div>

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'key' => 'widgetObjectKey_size',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'key' => 'widgetObjectKey_line_height',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])
</div>
    `
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/fontFamilySection/secondary.png`,
      code: `
@include('widget::components.template-parts.tab-group',[
  'title' => 'font_section_title',
  'desc' => 'font_section_desc',
  'input_name' => 'name',
  'full_width' => false,
  'tabs' => [
      [
          'option' => 'default_option',
          'value' => 'default',
          'id' => 'w-for-example-default-unique-id',
      ],
      [
          'option' => 'hover_option',
          'value' => 'hover',
          'id' => 'w-for-example-hover-unique-id',
      ],
]])

<div class="tile-column w-for-example-default-unique-id" >
    <div class="two-column">
        @include('widget::components.design-parts.google_fonts_select',[
            'title_g' => 'title',
            'key' => 'widgetObjectKey_font'
        ])
        @include('widget::components.design-parts.font_weight', [
            'title_w' => 'title',
            'key' => 'widgetObjectKey_weight'
        ])
    </div>

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'key' => 'widgetObjectKey_size',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'key' => 'widgetObjectKey_line_height',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])
</div>

<div class="tile-column w-for-example-hover-unique-id">
    <div class="two-column">
        @include('widget::components.design-parts.google_fonts_select',[
            'title_g' => 'title_hover',
            'key' => 'widgetObjectKey_font_hover'
        ])
        @include('widget::components.design-parts.font_weight', [
            'title_w' => 'title_hover',
            'key' => 'widgetObjectKey_weight_hover'
        ])
    </div>

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title_hover',
        'items' => [
            [
                'key' => 'widgetObjectKey_size_hover',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title_hover',
        'items' => [
            [
                'key' => 'widgetObjectKey_line_height_hover',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])
</div>
    `
    },    
  ]
}; 