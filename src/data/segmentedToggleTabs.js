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
    {
      id: '3',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleTabs/3.png`,
      code: `
@include('widget::components.template-parts.tab-group', [
    'title' => 'title',
    'addit_class' => 'in-row',
    'input_name' => 'image_fit',
    'tabs' => [
        [
            'option' => 'image_height_cover_n',
            'value' => 'cover',
            'icon' => '
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3136 7.11568C11.8234 7.11568 12.2367 6.7024 12.2367 6.1926C12.2367 5.6828 11.8234 5.26953 11.3136 5.26953C10.8038 5.26953 10.3906 5.6828 10.3906 6.1926C10.3906 6.7024 10.8038 7.11568 11.3136 7.11568Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46154 10.8066C3.71644 10.8066 3.92308 11.0132 3.92308 11.2681C3.92308 11.9694 3.92408 12.4569 3.96418 12.8141C4.00463 13.1745 4.07655 13.3023 4.13614 13.3619C4.19568 13.4215 4.3233 13.4936 4.6837 13.5343C5.04095 13.5746 5.52879 13.5758 6.23077 13.5758C6.48567 13.5758 6.69231 13.7825 6.69231 14.0374C6.69231 14.2923 6.48567 14.4989 6.23077 14.4989H6.22336C5.54669 14.4989 4.99979 14.4989 4.58019 14.4516C4.16223 14.4044 3.7703 14.3018 3.48305 14.0143C3.19585 13.7267 3.09374 13.3347 3.04686 12.9171C2.99999 12.4995 3 11.9558 3 11.284V11.2681C3 11.0132 3.20664 10.8066 3.46154 10.8066Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5433 10.8066C14.7982 10.8066 15.0048 11.0132 15.0048 11.2681V11.2755C15.0048 11.9522 15.0048 12.4991 14.9574 12.9187C14.9103 13.3367 14.8077 13.7286 14.5201 14.0159C14.2326 14.303 13.8406 14.4052 13.423 14.452C13.0054 14.4989 12.4617 14.4989 11.7899 14.4989H11.774C11.5191 14.4989 11.3125 14.2923 11.3125 14.0374C11.3125 13.7825 11.5191 13.5758 11.774 13.5758C12.4753 13.5758 12.9628 13.5748 13.32 13.5347C13.6804 13.4943 13.8082 13.4224 13.8678 13.3628C13.9274 13.3032 13.9995 13.1756 14.0402 12.8152C14.0805 12.4579 14.0817 11.9701 14.0817 11.2681C14.0817 11.0132 14.2883 10.8066 14.5433 10.8066Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3125 2.96154C11.3125 2.70664 11.5191 2.5 11.774 2.5H11.7814C12.4581 2.5 13.005 2.5 13.4246 2.54735C13.8426 2.59451 14.2345 2.69706 14.5217 2.98464C14.8089 3.27217 14.911 3.66415 14.9579 4.08183C15.0048 4.4994 15.0048 5.04306 15.0048 5.71493V5.73077C15.0048 5.98567 14.7982 6.19231 14.5433 6.19231C14.2883 6.19231 14.0817 5.98567 14.0817 5.73077C14.0817 5.02947 14.0807 4.54202 14.0406 4.18479C14.0002 3.8244 13.9282 3.69664 13.8686 3.63697C13.8091 3.57737 13.6815 3.50527 13.3211 3.4646C12.9638 3.42429 12.476 3.42308 11.774 3.42308C11.5191 3.42308 11.3125 3.21644 11.3125 2.96154Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21493 2.5H6.23077C6.48567 2.5 6.69231 2.70664 6.69231 2.96154C6.69231 3.21644 6.48567 3.42308 6.23077 3.42308C5.52947 3.42308 5.04202 3.42408 4.68479 3.46418C4.3244 3.50463 4.19664 3.57655 4.13697 3.63614C4.07736 3.69568 4.00527 3.8233 3.9646 4.1837C3.92429 4.54095 3.92308 5.02879 3.92308 5.73077C3.92308 5.98567 3.71644 6.19231 3.46154 6.19231C3.20664 6.19231 3 5.98567 3 5.73077V5.72336C3 5.04669 3 4.49979 3.04735 4.0802C3.09451 3.66223 3.19706 3.2703 3.48464 2.98305C3.77217 2.69585 4.16415 2.59374 4.58183 2.54686C4.9994 2.49999 5.54306 2.5 6.21493 2.5Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46154 5.26953C3.71644 5.26953 3.92308 5.47617 3.92308 5.73107V11.2695C3.92308 11.5244 3.71644 11.7311 3.46154 11.7311C3.20664 11.7311 3 11.5244 3 11.2695V5.73107C3 5.47617 3.20664 5.26953 3.46154 5.26953Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5396 5.26953C14.7945 5.26953 15.0012 5.47617 15.0012 5.73107V11.2695C15.0012 11.5244 14.7945 11.7311 14.5396 11.7311C14.2847 11.7311 14.0781 11.5244 14.0781 11.2695V5.73107C14.0781 5.47617 14.2847 5.26953 14.5396 5.26953Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.77344 2.96154C5.77344 2.70664 5.98008 2.5 6.23498 2.5H11.7734C12.0283 2.5 12.235 2.70664 12.235 2.96154C12.235 3.21644 12.0283 3.42308 11.7734 3.42308H6.23498C5.98008 3.42308 5.77344 3.21644 5.77344 2.96154Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.77344 14.0378C5.77344 13.7829 5.98008 13.5762 6.23498 13.5762H11.7734C12.0283 13.5762 12.235 13.7829 12.235 14.0378C12.235 14.2927 12.0283 14.4993 11.7734 14.4993H6.23498C5.98008 14.4993 5.77344 14.2927 5.77344 14.0378Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02407 8.63522C6.84383 8.45493 6.5516 8.45493 6.37136 8.63522L4.98674 10.0198C4.8065 10.2 4.8065 10.4923 4.98674 10.6725C5.16698 10.8528 5.45921 10.8528 5.63946 10.6725L6.69771 9.61433L8.67908 11.5956C8.85928 11.7758 9.15148 11.7758 9.33178 11.5956C9.51198 11.4153 9.51198 11.1231 9.33178 10.9429L8.96598 10.5771L9.92878 9.61433L12.3717 12.0571C12.5519 12.2374 12.8441 12.2374 13.0244 12.0571C13.2046 11.8769 13.2046 11.5847 13.0244 11.4044L10.2551 8.63522C10.0749 8.45493 9.78268 8.45493 9.60238 8.63522L8.31328 9.92443L7.02407 8.63522Z" fill="currentColor"/>
                        <path d="M17.1712 0.647047C17.1477 0.441267 16.9619 0.293457 16.7562 0.316897L13.4028 0.698927C13.1971 0.722367 13.0493 0.908187 13.0727 1.11396C13.0961 1.31974 13.282 1.46755 13.4877 1.44411L16.4685 1.10453L16.808 4.08525C16.8315 4.29103 17.0173 4.43884 17.2231 4.41539C17.4288 4.39195 17.5767 4.20613 17.5532 4.00036L17.1712 0.647047ZM14.6921 3.94008L17.0921 0.922937L16.5051 0.456047L14.1051 3.47319L14.6921 3.94008Z" fill="currentColor"/>
                        <path d="M1.23195 0.315631C1.02548 0.299361 0.844916 0.453561 0.828656 0.660031L0.563676 4.02461C0.547416 4.23107 0.701606 4.41163 0.908076 4.42789C1.11455 4.44415 1.2951 4.28996 1.31136 4.08349L1.5469 1.09275L4.53764 1.32829C4.74411 1.34455 4.92467 1.19036 4.94093 0.983891C4.95719 0.777421 4.80299 0.596871 4.59653 0.580611L1.23195 0.315631ZM3.99131 3.37765L1.48767 0.445941L0.917336 0.933001L3.42098 3.8647L3.99131 3.37765Z" fill="currentColor"/>
                        <path d="M17.395 16.7374C17.6013 16.7191 17.7537 16.5371 17.7355 16.3308L17.4379 12.9689C17.4196 12.7626 17.2376 12.6102 17.0313 12.6284C16.825 12.6467 16.6726 12.8287 16.6908 13.035L16.9553 16.0234L13.967 16.2879C13.7607 16.3061 13.6083 16.4882 13.6265 16.6945C13.6448 16.9008 13.8268 17.0532 14.0331 17.0349L17.395 16.7374ZM14.1653 14.1762L17.1212 16.6513L17.6027 16.0763L14.6469 13.6012L14.1653 14.1762Z" fill="currentColor"/>
                        <path d="M0.826481 16.6789C0.830691 16.8859 1.00196 17.0504 1.20902 17.0462L4.58332 16.9776C4.79039 16.9734 4.95483 16.8021 4.95063 16.595C4.94642 16.388 4.77515 16.2235 4.56808 16.2277L1.5687 16.2887L1.50774 13.2893C1.50353 13.0823 1.33226 12.9178 1.12519 12.922C0.918132 12.9262 0.753682 13.0975 0.757892 13.3046L0.826481 16.6789ZM3.60103 13.6306L0.930902 16.4115L1.4719 16.931L4.14203 14.15L3.60103 13.6306Z" fill="currentColor"/>
                    </svg>

            '
        ],
        [
            'option' => 'image_height_contain_n',
            'value' => 'contain',
            'icon' => '
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="stroke-fill" d="M9.5 5C10.0523 5 10.5 4.55229 10.5 4C10.5 3.44772 10.0523 3 9.5 3C8.9477 3 8.5 3.44772 8.5 4C8.5 4.55229 8.9477 5 9.5 5Z" fill="black"/>
                        <path class="stroke-fill" d="M1 9.5C1 12.491 1.0055 12.5 4 12.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="stroke-fill" d="M10 12.5C12.991 12.5 13 12.4945 13 9.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="stroke-fill" d="M13 3.5C13 0.509 12.9945 0.5 10 0.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="stroke-fill" d="M4 0.5C1.009 0.5 1 0.5055 1 3.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="stroke-fill" d="M1 3.5V9.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round"/>
                        <path class="stroke-fill" d="M13 9.5V3.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round"/>
                        <path class="stroke-fill" d="M10 0.5H4" stroke="black" stroke-miterlimit="1" stroke-linecap="round"/>
                        <path class="stroke-fill" d="M4 12.5H10" stroke="black" stroke-miterlimit="1" stroke-linecap="round"/>
                        <path class="stroke-fill" d="M3 8.5L4.5 7L7 9.5" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="stroke-fill" d="M6.5 8.5L8 7L11 10" stroke="black" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    '
        ],
    ]
])
`
    },
  ]
}; 