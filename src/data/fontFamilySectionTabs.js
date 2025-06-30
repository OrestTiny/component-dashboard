export const fontFamilySectionTabsData = {
  id: 'fontFamilySectionTabs',
  name: 'Font Family Section Tabs',
  category: 'Form',
  description: 'Font Family Section allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/fontFamilySectionTabs/basic.png`,
      code: `
@include('widget::components.template-parts.tab-group',[
  'title' => 'title',
  'desc' => 'desc',
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
            'name' => 'name'
        ])
        @include('widget::components.design-parts.font_weight', [
            'title_w' => 'title',
            'name' => 'name'
        ])
    </div>

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'name' => 'name',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title',
        'items' => [
            [
                'name' => 'name',
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
            'name' => 'name_hover'
        ])
        @include('widget::components.design-parts.font_weight', [
            'title_w' => 'title_hover',
            'name' => 'name_hover'
        ])
    </div>

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title_hover',
        'items' => [
            [
                'name' => 'name_hover',
                'min_max' => ['0', '100'],
                'unit' => 'px'
            ]
        ]
    ])

    @include('widget::components.design-parts.range_unit', [
        'title' => 'title_hover',
        'items' => [
            [
                'name' => 'name_hover',
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