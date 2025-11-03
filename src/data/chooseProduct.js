export const chooseProductData = {
  id: 'chooseProduct',
  name: 'Choose Product',
  category: 'Form',
  description: 'Choose Product allows the user to choose a product',
  parameters: [
    {
      name: 'title',
      description: 'Title for the heading field'
    },

    {
      name: 'desc',
      description: 'Description for the heading field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: [`${process.env.PUBLIC_URL}/assets/images/chooseProduct/1.png`, `${process.env.PUBLIC_URL}/assets/images/chooseProduct/2.png`],
      code: `
// php code      
<div class="w-choose-product-select">
    <h4 style="margin-bottom: 6px;">{{ __('create_widget.widgetName_choose_product_title', [], $lang) }}</h4>
    @include('offer::components.product_select', ['btn_text' => 'add_product_modal'])
</div>


// js code
const productModal = new ChooseProductModal(
    $(widgetStyles).find('.w-choose-product-select'),
    newWidgetObj,
    () => { isLoaded && deBounce(rebuildWidget, 500); },
    1
);

productModal.getInitialProducts();
productModal.renderChosenProducts(newWidgetObj.products || []);

    `
    },
  ]
}; 