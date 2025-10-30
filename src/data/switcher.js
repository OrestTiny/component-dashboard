export const switcherData = {
  id: 'switcher',
  name: 'Switcher',
  category: 'Form',
  description: 'Switcher allows the user to select a value from a list of options',
  parameters: [
    {
      name: 'title_s',
      description: 'Title for the text range field'
    },
    {
      name: 'desc_s',
      description: 'Description for the text range field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/switcher/basic.png`,
      code: `
@include('widget::components.design-parts.switcher_secondary', [
    'title_s' => 'title',
    'desc_s' => 'desc',
    'name' => 'name',
])
    `
    },
    {
      id: '2',
      image: `${process.env.PUBLIC_URL}/assets/images/switcher/2.png`,
      code: `
<div class="tile-column">
    @include('widget::components.design-parts.title_desc', [
        'title' => 'event_calendar_event_details_settings_title',
        'desc' => 'event_calendar_event_details_settings_desc',
    ])

    <div class="tile-column__group">
        @include('widget::components.design-parts.switcher_secondary', [
            'title_s' => 'event_calendar_show_description_title',
            'desc_s' => 'event_calendar_show_description_desc',
            'name' => 'show_description',
        ])

        <div class="tile-column">
            @include('widget::components.design-parts.switcher_secondary', [
                'title_s' => 'event_calendar_show_price_title',
                'desc_s' => 'event_calendar_show_price_desc',
                'name' => 'show_price',
            ])

            @include('widget::components.design-parts.position', [
                'position_title' => 'event_calendar_price_alignment_title',
                'position_desc' => 'event_calendar_price_alignment_desc',
                'class' => 'price_alignment',
                'attr' => 'style="max-width: 200px;"',
                'addClass' => 'col-2',
                'custom_positions' => [
                    [
                        "text" => 'Horizontal',
                        "value" => "horizontal",
                        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_16182_149765)">
                                        <g clip-path="url(#clip1_16182_149765)">
                                        <path d="M9.95773 3.75491C9.71611 3.75491 9.52023 3.94381 9.52023 4.17679C9.52023 4.40978 9.71611 4.59866 9.95773 4.59866H15.0404V14.401H10.022C9.78041 14.401 9.58452 14.59 9.58452 14.8229C9.58452 15.0559 9.78041 15.2448 10.022 15.2448H15.4779C15.7195 15.2448 15.9154 15.0559 15.9154 14.8229V4.17682C15.9154 3.94384 15.7195 3.75495 15.4779 3.75495L9.95773 3.75491ZM7.65621 15.2448C7.89783 15.2448 8.09371 15.0558 8.09371 14.8229C8.09371 14.5899 7.89783 14.401 7.65621 14.401H4.875V4.59863H7.49849C7.7401 4.59863 7.93598 4.40975 7.93598 4.17676C7.93598 3.94377 7.7401 3.75488 7.49849 3.75488H4.4375C4.19588 3.75488 4 3.94377 4 4.17676V14.8229C4 15.0558 4.19588 15.2447 4.4375 15.2447L7.65621 15.2448Z" fill="currentColor"/>
                                        <path d="M10.3953 0.921874C10.3953 0.688887 10.1994 0.5 9.95776 0.5C9.71614 0.5 9.52026 0.688887 9.52026 0.921874V18.0782C9.52026 18.3111 9.71614 18.5 9.95776 18.5C10.1994 18.5 10.3953 18.3111 10.3953 18.0782V0.921874Z" fill="currentColor"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3333 4.35742H10V14.6431H15.3333V4.35742Z" fill="currentColor"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_16182_149765">
                                        <rect width="20" height="20" fill="currentColor"/>
                                        </clipPath>
                                        <clipPath id="clip1_16182_149765">
                                        <rect width="12" height="18" fill="currentColor" transform="translate(4 0.5)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>',
                    ],
                    [
                        "text" => 'Vertical',
                        "value" => "vertical",
                        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_16182_149775)">
                                    <g clip-path="url(#clip1_16182_149775)">
                                    <path d="M3.75491 10.0423C3.75491 10.2839 3.94381 10.4798 4.17679 10.4798C4.40978 10.4798 4.59866 10.2839 4.59866 10.0423L4.59866 4.9596L14.401 4.9596L14.401 9.97798C14.401 10.2196 14.59 10.4155 14.8229 10.4155C15.0559 10.4155 15.2448 10.2196 15.2448 9.97798L15.2448 4.52207C15.2448 4.28047 15.0559 4.0846 14.8229 4.0846L4.17682 4.0846C3.94384 4.0846 3.75495 4.28047 3.75495 4.52207L3.75491 10.0423ZM15.2448 12.3438C15.2448 12.1022 15.0558 11.9063 14.8229 11.9063C14.5899 11.9063 14.401 12.1022 14.401 12.3438L14.401 15.125L4.59863 15.125L4.59863 12.5015C4.59863 12.2599 4.40975 12.064 4.17676 12.064C3.94377 12.064 3.75488 12.2599 3.75488 12.5015L3.75488 15.5625C3.75488 15.8041 3.94377 16 4.17676 16L14.8229 16C15.0558 16 15.2447 15.8041 15.2447 15.5625L15.2448 12.3438Z" fill="currentColor"/>
                                    <path d="M0.921874 9.6045C0.688887 9.6045 0.5 9.80038 0.5 10.042C0.5 10.2836 0.688887 10.4795 0.921874 10.4795L18.0782 10.4795C18.3111 10.4795 18.5 10.2836 18.5 10.042C18.5 9.80038 18.3111 9.6045 18.0782 9.6045L0.921874 9.6045Z" fill="currentColor"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.35718 4.66667L4.35718 10L14.6429 10L14.6429 4.66667L4.35718 4.66667Z" fill="currentColor"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_16182_149775">
                                    <rect width="20" height="20" fill="currentColor" transform="matrix(0 -1 1 0 0 20)"/>
                                    </clipPath>
                                    <clipPath id="clip1_16182_149775">
                                    <rect width="12" height="18" fill="currentColor" transform="matrix(0 -1 1 0 0.5 16)"/>
                                    </clipPath>
                                    </defs>
                                </svg>',
                    ]
                ]
            ])
        </div>

        @include('widget::components.design-parts.switcher_secondary', [
            'title_s' => 'event_calendar_show_location_title',
            'desc_s' => 'event_calendar_show_location_desc',
            'name' => 'show_location',
        ])

        @include('widget::components.design-parts.switcher_secondary', [
            'title_s' => 'event_calendar_show_speaker_title',
            'desc_s' => 'event_calendar_show_speaker_desc',
            'name' => 'show_speaker',
        ])

        @include('widget::components.design-parts.switcher_secondary', [
            'title_s' => 'event_calendar_show_cta_button_title',
            'desc_s' => 'event_calendar_show_cta_button_desc',
            'name' => 'show_cta_button',
        ])
    </div>
</div>
    `
    },
  ]
}; 