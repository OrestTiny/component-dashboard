export const spacingData = {
  id: 'spacing',
  name: 'Spacing',
  category: 'Form',
  description: 'Spacing allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/spacing/basic.png`,
      code: `
    @include('widget::components.design-parts.spaces', [
        {{-- Desktop--}}

        'input_m_t' => 'w-popup-margin-top',
        'input_m_r' => 'w-popup-margin-right',
        'input_m_b' => 'w-popup-margin-bottom',
        'input_m_l' => 'w-popup-margin-left',

        'input_p_t' => 'w-content-padding-t',
        'input_p_r' => 'w-content-padding-r',
        'input_p_b' => 'w-content-padding-b',
        'input_p_l' => 'w-content-padding-l',

        {{-- Mobile--}}

        'input_m_t_m' => 'w-popup-margin-top',
        'input_m_r_m' => 'w-popup-margin-right',
        'input_m_b_m' => 'w-popup-margin-bottom',
        'input_m_l_m' => 'w-popup-margin-left',

        'input_p_t_m' => 'w-content-padding-t-m',
        'input_p_r_m' => 'w-content-padding-r-m',
        'input_p_b_m' => 'w-content-padding-b-m',
        'input_p_l_m' => 'w-content-padding-l-m',
    ])
    `
    },
  ]
}; 