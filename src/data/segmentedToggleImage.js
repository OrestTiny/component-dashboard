export const segmentedToggleImageData = {
  id: 'segmentedToggleImage',
  name: 'Segmented Toggle Image',
  category: 'Form',
  description: 'SegmentedToggleImage allows the user to select an image from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the segmented toggle alignment field'
    },
    {
      name: 'desc',
      description: 'Description for the segmented toggle alignment field'
    },
    {
      name: 'addit_class',
      description: ''
    },
    {
      name: 'img_size',
      description: 'image name - "example.svg|example.png|...", default path - "/assets/images/image-radios/*.svg|*.png..."'
    },
    {
      name: 'svg',
      description: 'svg code'
    },
    {
      name: 'addit_class',
      description: 'teaser-img-pos,'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleImage/basic.png`,
      code: `
@include('widget::components.design-parts.image_radio', [
  'title' => 'title',
  'desc' => 'desc',
  'input_name' => 'name',
  'img_size' => 46,
  'options' => [
    [
        'value' => 'value',
        'text' => 'text',
        'svg' => 'svg',
      ],
      [
          'value' => 'value',
          'text' => 'text',
          'svg' => 'svg',
      ],
  ],
])
`
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleImage/2.png`,
      code: `
@include('widget::components.design-parts.image_radio', [
  'title' => 'title',
  'input_name' => 'name',
  'addit_class' => 'teaser-img-pos',
  'options' => [
      [
          'value' => 'option_1',
          'text' => 'Option 1',
          'img' => 'option_1.svg'
      ],
      [
          'value' => 'option_2',
          'text' => 'Option 2',
          'img' => 'option_2.svg'
      ],
      [
          'value' => 'option_3',
          'text' => 'Option 3',
          'img' => 'option_3.svg'
      ],
      [
          'value' => 'option_4',
          'text' => 'Option 4',
          'img' => 'option_4.svg'
      ],
      [
          'value' => 'option_5',
          'text' => 'Option 5',
          'img' => 'option_5.svg'
      ]
  ]
])
`
    },
    {
      id: '3',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleImage/3.png`,
      code: `
@include('widget::components.design-parts.image_radio', [
    'input_name' => 'icon',
    'addit_class' => 'teaser-img-pos',
    'options' => [
        [
            'value' => 'icon1',
            'img' => 'assets/images/radios/top_btn_arrow1.svg'
        ],
        [
            'value' => 'icon2',
            'img' => 'assets/images/radios/top_btn_arrow2.svg'
        ],
        [
            'value' => 'icon3',
            'img' => 'assets/images/radios/top_btn_arrow3.svg'
        ],
        [
            'value' => 'icon4',
            'img' => 'assets/images/radios/top_btn_arrow4.svg'
        ],
        [
            'value' => 'icon5',
            'img' => 'assets/images/radios/top_btn_arrow5.svg'
        ],
        [
            'value' => 'icon6',
            'img' => 'assets/images/radios/top_btn_arrow6.svg'
        ],
    ]
])
`
    },
  ]
}; 