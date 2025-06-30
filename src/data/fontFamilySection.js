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
    `
    },
  ]
}; 