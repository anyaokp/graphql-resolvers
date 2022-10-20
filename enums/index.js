const Rights = [
  'ROLE_ORDER_VIEW',
  'ROLE_ORDER_CREATE',
  'ROLE_ORDER_EDIT',
  'ROLE_ORDER_DELETE',
  'ROLE_ORDER_PRODUCTS_DELETE',
  'ROLE_ORDER_EXPORT',
  'ROLE_ORDER_COMBINE',
  'ROLE_ORDER_COPY',
  'ROLE_ORDER_SPLIT',
  'ROLE_CUSTOMER_VIEW',
  'ROLE_CUSTOMER_CREATE',
  'ROLE_CUSTOMER_EDIT',
  'ROLE_CUSTOMER_DELETE',
  'ROLE_CUSTOMER_EXPORT',
  'ROLE_CUSTOMER_TAG_CREATE',
  'ROLE_MANAGER_VIEW',
  'ROLE_MANAGER_EXPORT',
  'ROLE_ANALYTICS_ORDER_VIEW',
  'ROLE_ANALYTICS_CUSTOMER_VIEW',
  'ROLE_ANALYTICS_MANAGER_VIEW',
  'ROLE_ANALYTICS_PRODUCT_VIEW',
  'ROLE_ANALYTICS_COMMUNICATION_VIEW',
  'ROLE_ANALYTICS_FINANCE_VIEW',
  'ROLE_WEB_ANALYTICS_VIEW',
  'ROLE_PRODUCT_VIEW',
  'ROLE_PRODUCT_EXPORT',
  'ROLE_PRODUCT_EDIT',
  'ROLE_PRODUCT_CREATE',
  'ROLE_PRODUCT_DELETE',
  'ROLE_INVENTORY_EDIT',
  'ROLE_INVENTORY_EXPORT',
  'ROLE_PRODUCT_GROUP_VIEW',
  'ROLE_PRODUCT_GROUP_CREATE',
  'ROLE_PRODUCT_GROUP_DELETE',
  'ROLE_PRODUCT_GROUP_EDIT',
  'ROLE_TASK_MINE',
  'ROLE_TASK_VIEW',
  'ROLE_TASK_CREATE',
  'ROLE_TASK_OWN_EDIT',
  'ROLE_TASK_EDIT',
  'ROLE_TASK_DELETE',
  'ROLE_NOTIFICATION_SEND',
  'ROLE_SMS_VIEW',
  'ROLE_LETTER_VIEW',
  'ROLE_COMMON_MANAGE_FINANCES',
  'ROLE_ORDER_CHANGE_MANAGER',
  'ROLE_COST_VIEW',
  'ROLE_COST_CREATE',
  'ROLE_COST_EDIT',
  'ROLE_COST_DELETE',
  'ROLE_COST_EXPORT',
  'ROLE_DELIVERY_SHIPMENT_VIEW',
  'ROLE_DELIVERY_SHIPMENT_EDIT',
  'ROLE_DELIVERY_SHIPMENT_CREATE',
  'ROLE_SUPPORT_TICKET',
  'ROLE_SUPPORT_ONLINE_CHAT',
  'ROLE_PAYMENT_REFUND',
  'ROLE_LETTER_SEND',
  'ROLE_SMS_SEND',
  'ROLE_TELEPHONY_CALL_VIEW_SELF',
  'ROLE_CUSTOMER_PERSONAL_DISCOUNT_EDIT',
  'ROLE_ANALYTICS_MARKETING_VIEW',
  'ROLE_TELEPHONY_CALL_VIEW_ALL',
]

const OrderAccess = [
  'full', // ко всем заказам и клиентам
  'only_mine', // только к своим заказам и клиентам
  'by_order_types_and_sites', // только к заказам и клиентам указанных
]

const UserStatus = ['free', 'busy', 'dinner', 'break']

const IntegrationCode = [
  'W', // без интеграции
  'D', // доставка курьером
]

const CountryCode = ['RU', 'UA', 'BY', 'KZ']

const VatRate = [
  'WITHOUT_NDS', // Без НДС
  'TN', // 20%
  'EI', // 18%
  'TW', // 12%
  'TE', // 10%
  'SE', // 7%
  'FI', // 0.5%
  'NU', // 0%
]

const CalculationType = [
  'S', // Static
  'D', // Dynamic
]

const NetValueType = [
  'fixed', // фиксированная
  'subtract', // стоимость минус
  'subtract_percent', // стоимость минус  %
]

const Days = [
  'Mo', // Понедельник
  'Tu', // Вторник
  'We', // Среда
  'Th', // Четверг
  'Fr', // Пятница
  'Sa', // Суббота
  'Su', // Воскресенье
]

const TypeWarehouse = [
  'store_type_retail', // розничный магазин
  'store_type_online', // интернет-магазин
  'store_type_warehouse', // склад
  'store_type_supplier', //склад поставщика
]

const ResidueType = ['numerical', 'cash']

const WarehousesAvailable = [
  'Y', // да
  'N', // нет
]

const ContragentType = ['legal_entity', 'enterpreneur']

module.exports = {
  Rights,
  OrderAccess,
  UserStatus,
  IntegrationCode,
  CountryCode,
  VatRate,
  CalculationType,
  NetValueType,
  Days,
  TypeWarehouse,
  ResidueType,
  WarehousesAvailable,
  ContragentType,
}
