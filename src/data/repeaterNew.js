export const repeaterNewData = {
  id: 'repeaterNew',
  name: 'Repeater New',
  category: 'Form',
  description: 'Repeater New allows the user to enter a repeater new',
  parameters: [
    {
      name: 'prefix',
      description: 'Prefix for the repeater field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/repeaterNew/1.png`,
      code: `
{{-- php code --}}

@include('widget::components.common.new_repeater', [
    'prefix' => $pre,
    'title' => 'title',
    'desc' => 'desc',
    'repeater_id' => 'repeater_id',
    'item_id' => 'item_id'
]) 

<template data-item-id="item_id">
    <div>
        <div class="js-new-repeater-opener">
            @include('widget::components.common.new_repeater_opener', [
                'translation' => $pre . '_item',
            ])
        </div>

        <div class="js-new-repeater-content" data-repeater-item-type="">
            <div class="tile-layout">
                @include('widget::components.design-parts.widget_header', [
                    'w_btn_class' => 'js-repeater-field__content-btn',
                    'w_title' => $pre,
                ])

                @include('widget::components.design-parts.text', [
                    'title' => 'title',
                    'desc' => 'desc',
                    'name' => 'name',
                ])

                {{-- repeater content --}}

            </div>
        </div>
    </div>
</template>



{{-- js code--}}

const repeater = new NewRepeater({
    wrapper: widgetWrap[0],
    obj: widgetObj,
    createItemCallback: createItemCallback,
    repeaterId: 'repeater_id',
    itemId: 'item_id',
    deleteItemCallback: () => deBounce(() => rebuildOneWidget(widgetObj), 200),
    hideItemCallback: () => deBounce(() => rebuildOneWidget(widgetObj), 200),
    widgetObj: widgetObj,
    dragDropRebuild: true,
});

function createItemCallback(
    itemObj1,
    itemEl,
    repeater,
    isClone = false) {
    let itemObj = {};

    if (!itemObj1) {
        itemObj.id = makeId(6);
        itemObj.hidden = false;

        itemObj.name = styleObj.name;
    } else {
        itemObj = itemObj1;
    }

    const fields = [
        {name: 'name'},
    ];

    bundleGlobalFields({
        wrap: $(itemEl),
        obj: itemObj,
        fields: fields,
        callback: () => {

            if (isLoaded) {
                deBounce(addStyling(globalWidgetJson), 200);
                deBounce(() => rebuildOneWidget(widgetObj), 200);
            }
        }
    });

    return itemObj;
}

      `
    },
  ]
}; 