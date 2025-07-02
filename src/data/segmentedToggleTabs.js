export const segmentedToggleTabsData = {
  id: 'segmentedToggleTabs',
  name: 'Segmented Toggle Tabs',
  category: 'Form',
  description: 'SegmentedToggleTabs allows the user to select an option from a list of options',
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
      name: 'input_name',
      description: 'Name for the segmented toggle alignment field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleTabs/basic.png`,
      code: `
@include('widget::components.template-parts.tab-group',[
  'title' => 'title',
  'desc' => 'desc',
  'tabs' => [
      [
          'option' => 'options_1',
          'value' => 'options_1',
          'id' => 'example_options_1',
      ],
      [
          'option' => 'options_2',
          'value' => 'options_2',
          'id' => 'example_options_2',
      ],
]])

<div class="tile-column example_options_1">
  {{-- content --}}
</div>

<div class="tile-column example_options_2">
  {{-- content --}}
</div>
`
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleTabs/2.png`,
      code: `
@include('widget::components.template-parts.tab-group', [
    'title' => 'title',
    'desc' => 'desc',
    'input_name' => 'name',
    'full_width' => true,
    'tabs' => [
        [
            'option' => 'Option 1',
            'value' => 'option_1',
            'icon' => '
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2353_3208" fill="white">
                        <path d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V7C12 7.55228 11.5523 8 11 8H1C0.447715 8 0 7.55228 0 7V1Z"/>
                        </mask>
                        <path d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V7C12 7.55228 11.5523 8 11 8H1C0.447715 8 0 7.55228 0 7V1Z" fill="var(--w-primary-color)"/>
                        <path class="not-fill" d="M0 0H12H0ZM12 8H0H12ZM0 8C-2.20914 8 -4 6.20914 -4 4C-4 1.79086 -2.20914 0 0 0H4C4 0 4 0.447715 4 1V7C4 7.55228 4 8 4 8H0ZM12 0V8V0Z" fill="black" mask="url(#path-1-inside-1_2353_3208)"/>
                    </svg>

            '
        ],
        [
            'option' => 'Option 2',
            'value' => 'option_2',
            'icon' => '
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2353_3210" fill="white">
                        <path d="M7 0C7.55228 0 8 0.447715 8 1L8 11C8 11.5523 7.55228 12 7 12L1 12C0.447715 12 0 11.5523 0 11L0 1C0 0.447715 0.447715 0 1 0L7 0Z"/>
                        </mask>
                        <path d="M7 0C7.55228 0 8 0.447715 8 1L8 11C8 11.5523 7.55228 12 7 12L1 12C0.447715 12 0 11.5523 0 11L0 1C0 0.447715 0.447715 0 1 0L7 0Z" fill="var(--w-primary-color)"/>
                        <path class="not-fill" d="M8 0L8 12L8 0ZM0 12L0 0L0 12ZM0 0C0 -2.20914 1.79086 -4 4 -4C6.20914 -4 8 -2.20914 8 0V4C8 4 7.55228 4 7 4L1 4C0.447715 4 0 4 0 4L0 0ZM8 12L0 12L8 12Z" fill="black" mask="url(#path-1-inside-1_2353_3210)"/>
                    </svg>
                    '
        ],
        [
            'option' => 'Option 3',
            'value' => 'option_3',
            'icon' =>  '
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2353_3213" fill="white">
                        <path d="M1 12C0.447715 12 0 11.5523 0 11L0 1C0 0.447715 0.447715 0 1 0L7 0C7.55228 0 8 0.447716 8 1L8 11C8 11.5523 7.55228 12 7 12L1 12Z"/>
                        </mask>
                        <path d="M1 12C0.447715 12 0 11.5523 0 11L0 1C0 0.447715 0.447715 0 1 0L7 0C7.55228 0 8 0.447716 8 1L8 11C8 11.5523 7.55228 12 7 12L1 12Z" fill="var(--w-primary-color)"/>
                        <path class="not-fill" d="M0 12L0 0L0 12ZM8 0L8 12L8 0ZM8 12C8 14.2091 6.20914 16 4 16C1.79086 16 0 14.2091 0 12L0 8C0 8 0.447715 8 1 8H7C7.55228 8 8 8 8 8V12ZM0 0L8 0L0 0Z" fill="black" mask="url(#path-1-inside-1_2353_3213)"/>
                    </svg>

            '
        ],
        [
            'option' => 'Option 4',
            'value' => 'option_4',
            'icon' =>  '
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2353_3216" fill="white">
                        <path d="M12 7C12 7.55228 11.5523 8 11 8L1 8C0.447715 8 0 7.55228 0 7L0 1C0 0.447715 0.447716 0 1 0L11 0C11.5523 0 12 0.447715 12 1L12 7Z"/>
                        </mask>
                        <path d="M12 7C12 7.55228 11.5523 8 11 8L1 8C0.447715 8 0 7.55228 0 7L0 1C0 0.447715 0.447716 0 1 0L11 0C11.5523 0 12 0.447715 12 1L12 7Z" fill="var(--w-primary-color)"/>
                        <path class="not-fill" d="M12 8L0 8L12 8ZM0 0L12 0L0 0ZM12 0C14.2091 0 16 1.79086 16 4C16 6.20914 14.2091 8 12 8L8 8C8 8 8 7.55228 8 7V1C8 0.447715 8 0 8 0H12ZM0 8L0 0L0 8Z" fill="black" mask="url(#path-1-inside-1_2353_3216)"/>
                    </svg>


            '
        ],
    ]
])
`
    },
  ]
}; 