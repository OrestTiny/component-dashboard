export const checkboxListData = {
  id: 'checkboxList',
  name: 'Checkbox List',
  category: 'Form',
  description: 'Checkbox List allows the user to select multiple options',
  parameters: [],
  sections: [
    {
      id: '1',
      image: `${process.env.PUBLIC_URL}/assets/images/checkboxList/1.png`,
      code: `
@include('widget::components.design-parts.checkbox_list', [
    'title_cl' => 'title',
    'desc_cl' => 'description',
    'name_cl' => 'name',
    'custom_options' => [
        [
            "text" => 'All',
            "value" => "all"
        ],
        [
            "text" => 'Headline 1',
            "value" => "h1"
        ],
        [
            "text" => 'Headline 2',
            "value" => "h2"
        ],
    ]
])
    `
    },
    {
      id: '1',
      image: `${process.env.PUBLIC_URL}/assets/images/checkboxList/2.png`,
      code: `
@include('widget::components.design-parts.position', [
    'position_title' => 'title',
    'position_desc' => 'desc',
    'addClass' => 'one-row',
    'attr' => 'style="max-width: 100%;"',
    'name' => 'name',
    'checkboxList' => true,
    'custom_positions' => [
        [
            "text" => 'Sun',
            "value" => "sun"
        ],
        [
            "text" => 'Mon',
            "value" => "mon"
        ],
        [
            "text" => 'Tue',
            "value" => "tue"
        ],
        [
            "text" => 'Wed',
            "value" => "wed"
        ],
        [
            "text" => 'Thu',
            "value" => "thu"
        ],
        [
            "text" => 'Fri',
            "value" => "fri"
        ],
        [
            "text" => 'Sat',
            "value" => "sat"
        ]
    ]
])

    `
    },
  ]
}; 