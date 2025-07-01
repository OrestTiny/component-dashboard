export const repeaterData = {
  id: 'repeater',
  name: 'Repeater',
  category: 'Form',
  description: 'Repeater allows the user to enter a repeater',
  parameters: [
    {
      name: 'prefix',
      description: 'Prefix for the repeater field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/repeater/basic.png`,
      code: `
@include('widget::components.popup.sections-styles.common-components.repeater_section', ['prefix' => 'widgetName'])


<div class="js-repeater-field-data hide">
    <div class="w-repeater-field js-repeater-field">
        @include('widget::components.popup.sections-styles.common-components.repeater_opener', ['translation' => 'widgetName'])

        <div class="w-repeater-field__content js-repeater-field__content">
            <div class="w-repeater-field__content-inner">
                <div class="tile-layout">
                      @include('widget::components.design-parts.widget_header', [
                          'w_btn_class' => 'js-repeater-field__content-btn',
                          'w_title' => $pre . '_item_title',
                      ])

                      {{-- repeater content --}}
                </div>
            </div>
        </div>
    </div>
</div>

    `
    },
  ]
}; 