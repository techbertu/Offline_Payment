define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'offlinepayment',
                component: 'TechBertu_OfflinePayment/js/view/payment/method-renderer/offlinepayment-method'
            }
        );
        return Component.extend({});
    }
);