<?php


namespace TechBertu\OfflinePayment\Model\Payment;

class Offline extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "offlinepayment";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}
