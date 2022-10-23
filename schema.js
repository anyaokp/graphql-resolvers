const schema = `
type Address {
	index: String
	country: String
	region: String
	city: String
	street: String
	structure: String
	entrance: String
	flat: String
	floor: Int
	house: String
	housing: String
	metro: String
	notes: String
	text: String
	intercomCode: String
	isFlat: Boolean
	isOffice: Boolean
}

type Customer
 {
	id: ID!
	userStatus: [CustomerStatus]
	lastName: String
	firstName: String
	patronymic: String
	email: String
	birthday: String
	tags: [Tags]
	managerId: ID
	manager: User
	sex: Sex
	address: Address
	phone: String
	totalSumm: String
	averageSumm: String
	totalAmountOfOrders: String
	createdAt: String
	isEntity: Boolean
	entityInfo: EntityInfo
	ltv: String
	updatedAt: String!
}

enum CustomerStatus {
	vip
	bad
}

type Tags {
	name: String
	color: String
}

type EntityInfo
 {
	legalName: String
	fax: String
	INN: String
	KPP: String
	legalAddress: String
	OKPO: String
	OKONH: String
	checkingAccount: String
	corrAccount: String
	BIK: String
}

type ModelCustomerConnection {
	items: [Customer]!
}

input ModelCustomerFilterInput {
	id: String
	userStatus: String
	lastName: String
	firstName: String
	patronymic: String
	email: String
	birthday: String
	managerId: String
	sex: String
	phone: String
	totalSumm: String
	averageSumm: String
	totalAmountOfOrders: String
	createdAt: String
	isEntity: Boolean
	ltv: String
}

type ModelUserConnection {
	items: [User]!
	pagination: Pagination!
}

type Pagination {
	page: Int
	limit: Int
	totalPages: Int
	totalDocs: Int
}

input ModelUserFilterInput {
	id: String
	lastOrderDate: String
	lastName: String
	firstName: String
	patronymic: String
	email: String
	password: String
	confirmPassword: String
	position: String
	phone: String
	active: Boolean
	isAdmin: Boolean
	groups: String
	emailAlert: Boolean
	alertsWithSound: Boolean
	online: Boolean
	status: String
	averagCheck: Float
	salesAmount: Float
	totalAmountOfOrders: Int
	orderNumbers: [String]
	page: Int
	limit: Int
}
input CreateUserInput {
	id: ID
	lastOrderDate: String
	lastName: String
	firstName: String!
	patronymic: String
	email: String!
	position: String
	phone: String
	active: Boolean
	isAdmin: Boolean
	groups: [String]
	emailAlert: Boolean
	alertsWithSound: Boolean
	online: Boolean
	status: UserStatus
	averagCheck: Float
	salesAmount: Float
	totalAmountOfOrders: Int
	orderNumbers: [String]
}

input UpdateUserInput {
	id: ID!
	lastOrderDate: String
	lastName: String
	firstName: String
	patronymic: String
	email: String
	password: String
	confirmPassword: String
	position: String
	phone: String
	active: Boolean
	isAdmin: Boolean
	groups: [String]
	emailAlert: Boolean
	alertsWithSound: Boolean
	online: Boolean
	status: UserStatus
	averagCheck: Float
	salesAmount: Float
	totalAmountOfOrders: Int
	orderNumbers: [String]
}


enum Sex {
	M
	W
}

input TagsInput {
	name: String
	color: String
}

type User
 {
	id: ID!
	lastOrderDate: String
	lastName: String
	firstName: String!
	patronymic: String
	email: String!
	position: String
	phone: String
	active: Boolean
	isAdmin: Boolean
	groups: [String]
	emailAlert: Boolean
	alertsWithSound: Boolean
	online: Boolean
	status: UserStatus
	averagCheck: Float
	salesAmount: Float
	totalAmountOfOrders: Int
	orderNumbers: [String]
	createdAt: String!
	updatedAt: String!
}

enum UserStatus {
	free
	busy
	dinner
	break
}

type Country
{
  id: ID!
  name: String
}

input CreateCountryInput {
	id: ID
	name: String
  }

input UpdateCountryInput {
	id: ID!
	name: String
  }

input ModelCountryFilterInput {
	id: String
	name: String
	page: Int
	limit: Int
  }

type ModelCountryConnection {
	items: [Country]!
	pagination: Pagination!
}

type Region
{
  id: ID!
  countryId: ID!
  name: String
}

input CreateRegionInput {
	id: ID
	countryId: ID!
	name: String
  }

input UpdateRegionInput {
	countryId: ID
	id: ID!
	name: String
  }

input ModelRegionFilterInput {
	countryId: String
	id: String
	name: String
	page: Int
	limit: Int
  }

type ModelRegionConnection {
	items: [Region]!
	pagination: Pagination!
}

type City
{
  id: ID!
  countryId: ID!
  regionId: ID!
  name: String
}

input CreateCityInput {
	countryId: ID!
	regionId: ID!
	id: ID
	name: String,
  }

input UpdateCityInput {
	countryId: ID,
	regionId: ID,
	id: ID!,
	name: String,
  }

input ModelCityFilterInput {
	countryId: String
	regionId: String
	id: String
	name: String
	page: Int
	limit: Int
  }

type ModelCityConnection {
	items: [City]!
	pagination: Pagination!
}

type UserGroup {
  id: ID!
  name: String!
  code: String!
  rights: [Rights]
  isManager: Boolean
  beakdownOrderTypes: [String] 
  breakdownSites: [String]   
  makeBreakdownByOrderMethods: Boolean
  breakdownOrderMethods: [String] 
  isDeliveryMen: Boolean  # ответственный за доставку
  deliveryTypes: [String]
  restrictByDeliveryTypes: Boolean # предоставлять доступ...
  orderAccess: OrderAccess!
}

enum Rights {
	ROLE_ORDER_VIEW
	ROLE_ORDER_CREATE
	ROLE_ORDER_EDIT
	ROLE_ORDER_DELETE
	ROLE_ORDER_PRODUCTS_DELETE
	ROLE_ORDER_EXPORT
	ROLE_ORDER_COMBINE
	ROLE_ORDER_COPY
	ROLE_ORDER_SPLIT
	ROLE_CUSTOMER_VIEW
	ROLE_CUSTOMER_CREATE
	ROLE_CUSTOMER_EDIT
	ROLE_CUSTOMER_DELETE
	ROLE_CUSTOMER_EXPORT
	ROLE_CUSTOMER_TAG_CREATE
	ROLE_MANAGER_VIEW
	ROLE_MANAGER_EXPORT
	ROLE_ANALYTICS_ORDER_VIEW
	ROLE_ANALYTICS_CUSTOMER_VIEW
	ROLE_ANALYTICS_MANAGER_VIEW
	ROLE_ANALYTICS_PRODUCT_VIEW
	ROLE_ANALYTICS_COMMUNICATION_VIEW
	ROLE_ANALYTICS_FINANCE_VIEW
	ROLE_WEB_ANALYTICS_VIEW
	ROLE_PRODUCT_VIEW
	ROLE_PRODUCT_EXPORT
	ROLE_PRODUCT_EDIT
	ROLE_PRODUCT_CREATE
	ROLE_PRODUCT_DELETE
	ROLE_INVENTORY_EDIT
	ROLE_INVENTORY_EXPORT
	ROLE_PRODUCT_GROUP_VIEW
	ROLE_PRODUCT_GROUP_CREATE
	ROLE_PRODUCT_GROUP_DELETE
	ROLE_PRODUCT_GROUP_EDIT
	ROLE_TASK_MINE
	ROLE_TASK_VIEW
	ROLE_TASK_CREATE
	ROLE_TASK_OWN_EDIT
	ROLE_TASK_EDIT
	ROLE_TASK_DELETE
	ROLE_NOTIFICATION_SEND
	ROLE_SMS_VIEW
	ROLE_LETTER_VIEW
	ROLE_COMMON_MANAGE_FINANCES
	ROLE_ORDER_CHANGE_MANAGER
	ROLE_COST_VIEW
	ROLE_COST_CREATE
	ROLE_COST_EDIT
	ROLE_COST_DELETE
	ROLE_COST_EXPORT
	ROLE_DELIVERY_SHIPMENT_VIEW
	ROLE_DELIVERY_SHIPMENT_EDIT
	ROLE_DELIVERY_SHIPMENT_CREATE
	ROLE_SUPPORT_TICKET
	ROLE_SUPPORT_ONLINE_CHAT
	ROLE_PAYMENT_REFUND
	ROLE_LETTER_SEND
	ROLE_SMS_SEND
	ROLE_TELEPHONY_CALL_VIEW_SELF
	ROLE_CUSTOMER_PERSONAL_DISCOUNT_EDIT
	ROLE_ANALYTICS_MARKETING_VIEW
	ROLE_TELEPHONY_CALL_VIEW_ALL
  }

enum OrderAccess {
	full                        # ко всем заказам и клиентам
	only_mine                   # только к своим заказам и клиентам
	by_order_types_and_sites    # только к заказам и клиентам типов
}

input CreateUserGroupInput  {
	id: ID
	name: String!
	code: String!
	rights: [Rights]
	isManager: Boolean
	beakdownOrderTypes: [String]
	breakdownSites: [String]
	makeBreakdownByOrderMethods: Boolean
	breakdownOrderMethods: [String]
	isDeliveryMen: Boolean
	deliveryTypes: [String]
	restrictByDeliveryTypes: Boolean
	orderAccess: OrderAccess!
  }

input UpdateUserGroupInput {
	id: ID!
	name: String
	code: String
	rights: [Rights]
	isManager: Boolean
	beakdownOrderTypes: [String]
	breakdownSites: [String]
	makeBreakdownByOrderMethods: Boolean
	breakdownOrderMethods: [String]
	isDeliveryMen: Boolean
	deliveryTypes: [String]
	restrictByDeliveryTypes: Boolean
	orderAccess: OrderAccess
  }

input ModelUserGroupFilterInput {
	id: String
	name: String
	code: String
	rights: [Rights]
	isManager: Boolean
	beakdownOrderTypes: [String]
	breakdownSites: [String]
	makeBreakdownByOrderMethods: Boolean
	breakdownOrderMethods: [String]
	isDeliveryMen: Boolean
	deliveryTypes: [String]
	restrictByDeliveryTypes: Boolean
	orderAccess: OrderAccess
	page: Int
	limit: Int
  }

type ModelUserGroupConnection {
	items: [UserGroup]!
	pagination: Pagination!
}

type OrderType
 {
  id: ID!
  name: String!
  code: String!
  active: Boolean
  defaultForCRM: Boolean
  defaultForAPI: Boolean
  ordering: Int!
}

input CreateOrderTypeInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	defaultForCRM: Boolean
	defaultForAPI: Boolean
	ordering: Int!
  }

input UpdateOrderTypeInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForAPI: Boolean
	ordering: Int
  }

input ModelOrderTypeFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForAPI: Boolean
	ordering: Int
	page: Int
	limit: Int
  }

type ModelOrderTypeConnection {
	items: [OrderType]!
	pagination: Pagination!
}

type DeliveryType
{
  id: ID!
  name: String!
  code: String!
  integrationCode: IntegrationCode
  active: Boolean
  defaultForCrm: Boolean
  description: String
  availableCountries: [CountryCode]
  services: [Services]
  vatRate: VatRate
  defaultCost: String!
  defaultNetCost: String!
  calculationType: CalculationType!
  costDependsOnRegionWeight: Boolean
  costDependsOnDateTime: Boolean
  codMarkup: String
  limitByRegions: Boolean
  regionWeightCostConditions: [RegionWeightCostConditions]
  dateTimeCostConditions: [DateTimeCostConditions]
  paymentTypes: [PaymentTypesItem]
}

type DateTimeCostConditions {
	days: [Days]
	timeStart: String
	timeEnd: String
	value: String
	netValue: String
  }

enum Days {
	Mo 
	Tu 
	We 
	Th 
	Fr 
	Sa 
	Su
  }

type RegionWeightCostConditions {
	location: [LocationItem]
	weightFrom: String
	weightTo: String
	orderPriceFrom: String
	orderPriceTo: String
	netValueType: NetValueType
	netValue: String
	value: String
  }

enum NetValueType {
	fixed 
	subtract 
	subtract_percent 
  }

type LocationItem {
	countryId: ID
	region: [RegionItem]
  }
  
type RegionItem {
	regionId: ID
	regionName: String
	locality: [LocalityItem]
  }
  
type LocalityItem {
	localityId: ID
	localityName: String
  }

enum IntegrationCode {
	W # без интеграции
	D # доставка курьером
  }

enum CountryCode {
	RU
	UA
	BY
	KZ
  }

type PaymentTypesItem {
	paymentTypeCode: String
	paymentTypeName: String
	allowToUse: Boolean
	cashOnDelivery: Boolean
  }

type Services {
	name: String!
	characterCode: String!
	activity: Boolean
  }

enum VatRate {
	WITHOUT_NDS # Без НДС
	TN # 20%
	EI # 18%
	TW # 12%
	TE # 10%
	SE # 7%
	FI # 0.5%
	NU # 0%
  }
  
enum CalculationType {
	S #  Static
	D #  Dynamic
  }

input RegionWeightCostConditionsInput  {
	location: [LocationItemInput]
	weightFrom: String
	weightTo: String
	orderPriceFrom: String
	orderPriceTo: String
	netValueType: NetValueType
	netValue: String
	value: String
  }

input LocationItemInput  {
	countryId: ID
	region: [RegionItemInput]
  }
  
input RegionItemInput {
	regionId: ID
	regionName: String
	locality: [LocalityItemInput]
  }
  
input LocalityItemInput {
	localityId: ID
	localityName: String
  }

input PaymentTypesItemInput {
	paymentTypeCode: String
	paymentTypeName: String
	allowToUse: Boolean
	cashOnDelivery: Boolean
  }

input DateTimeCostConditionsInput {
	days: [Days]
	timeStart: String
	timeEnd: String
	value: String
	netValue: String
  }

input ServicesInput {
	name: String!
	characterCode: String!
	activity: Boolean
  }

input CreateDeliveryTypeInput {
	id: ID
	name: String,
	code: String,
	integrationCode: IntegrationCode
	active: Boolean
	defaultForCrm: Boolean
	description: String
	availableCountries: [CountryCode]
	services: [ServicesInput]
	vatRate: VatRate
	defaultCost: String,
	defaultNetCost: String,
	calculationType: CalculationType
	costDependsOnRegionWeight: Boolean
	costDependsOnDateTime: Boolean
	codMarkup: String
	limitByRegions: Boolean
	regionWeightCostConditions: [RegionWeightCostConditionsInput]
	dateTimeCostConditions: [DateTimeCostConditionsInput]
	paymentTypes: [PaymentTypesItemInput]
  }

input UpdateDeliveryTypeInput {
	id: ID!,
	name: String
	code: String
	integrationCode: IntegrationCode
	active: Boolean
	defaultForCrm: Boolean
	description: String
	availableCountries: [CountryCode]
	services: [ServicesInput]
	vatRate: VatRate
	defaultCost: String
	defaultNetCost: String
	calculationType: CalculationType
	costDependsOnRegionWeight: Boolean
	costDependsOnDateTime: Boolean
	codMarkup: String
	limitByRegions: Boolean
	regionWeightCostConditions: [RegionWeightCostConditionsInput]
	dateTimeCostConditions: [DateTimeCostConditionsInput]
	paymentTypes: [PaymentTypesItemInput]
  }

input ModelDeliveryTypeFilterInput {
	id: String
	name: String
	code: String
	integrationCode: IntegrationCode
	active: Boolean
	defaultForCrm: Boolean
	description: String
	availableCountries: [CountryCode]
	vatRate: VatRate
	defaultCost: String
	defaultNetCost: String
	calculationType: CalculationType
	costDependsOnRegionWeight: Boolean
	costDependsOnDateTime: Boolean
	codMarkup: String
	limitByRegions: Boolean
	page: Int
	limit: Int
  }

type ModelDeliveryTypeConnection {
	items: [DeliveryType]!
	pagination: Pagination!
}

type PaymentStatus {
  id: ID!
  name: String!
  code: String!
  active: Boolean
  defaultForCRM: Boolean
  defaultForApi: Boolean
  paymentComplete: Boolean
  ordering: Int
  description: String
  paymentTypes: [String]
}

input CreatePaymentStatusInput {
	id: ID
	name: String!,
	code: String!,
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	paymentComplete: Boolean
	ordering: Int
	description: String
	paymentTypes: [String]
  }

input UpdatePaymentStatusInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	paymentComplete: Boolean
	ordering: Int
	description: String
	paymentTypes: [String]
  }

input ModelPaymentStatusFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	paymentComplete: Boolean
	ordering: Int
	description: String
	paymentTypes: [String]
	page: Int
	limit: Int
  }

type ModelPaymentStatusConnection {
	items: [PaymentStatus]!
	pagination: Pagination!
}

type PaymentType {
  id: ID!
  name: String!
  code: String!
  active: Boolean
  defaultForCRM: Boolean
  defaultForApi: Boolean
  description: String
  paymentStatuses: [String]
}

input CreatePaymentTypeInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	description: String
	paymentStatuses: [String]
  }

input UpdatePaymentTypeInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	description: String
	paymentStatuses: [String]
  }

input ModelPaymentTypeFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForApi: Boolean
	description: String
	paymentStatuses: [String]
	page: Int
	limit: Int
  }

type ModelPaymentTypeConnection {
	items: [PaymentType]!
	pagination: Pagination!
}

type WareHouse
{
  id: ID!
  name: String!
  typeWarehouse: TypeWarehouse
  characterCode: String
  activity: Boolean
  description: String
  residueType: ResidueType
  ordering: Int
  country: ID
  regionId: ID
  cityId: ID
  region: Region
  city: City
  street: String
  house: String
  structure: String
  frame: String
  office: String
  address: String
  postcode: String
  underground: String
  coordinates: String

  weekOpeningHours: WeekOpeningHours

  contact: String
  phone: String
  email: String
}

input CreateWareHouseInput {
	id: ID
	name: String!
	typeWarehouse: TypeWarehouse
	characterCode: String
	activity: Boolean
	description: String
	residueType: ResidueType
	ordering: Int
	country: ID
	regionId: ID
	cityId: ID
	street: String
	house: String
	structure: String
	frame: String
	office: String
	address: String
	postcode: String
	underground: String
	coordinates: String
	weekOpeningHours: WeekOpeningHoursInput
	contact: String
	phone: String
	email: String
  }

input UpdateWareHouseInput {
	id: ID!
	name: String
	typeWarehouse: TypeWarehouse
	characterCode: String
	activity: Boolean
	description: String
	residueType: ResidueType
	ordering: Int
	country: ID
	regionId: ID
    cityId: ID
	street: String
	house: String
	structure: String
	frame: String
	office: String
	address: String
	postcode: String
	underground: String
	coordinates: String
	weekOpeningHours: WeekOpeningHoursInput
	contact: String
	phone: String
	email: String
  }

input WeekOpeningHoursInput {
	days: [Days]
	timeStart: String
	timeEnd: String
	value: String
	netValue: String
  }

enum TypeWarehouse {
	store_type_retail # розничный магазин
	store_type_online # интернет-магазин
	store_type_warehouse # склад
	store_type_supplier # склад поставщика
  }
  
type WeekOpeningHours {
	days: [Days]
	timeStart: String
	timeEnd: String
	value: String
	netValue: String
  }
  
enum ResidueType {
	numerical
	cash
  }

input ModelWareHouseFilterInput {
	id: String
	name: String
	typeWarehouse: TypeWarehouse
	characterCode: String
	activity: Boolean
	description: String
	residueType: ResidueType
	ordering: Int
	country: String
	regionId: String
    cityId: String
	street: String
	house: String
	structure: String
	frame: String
	office: String
	address: String
	postcode: String
	underground: String
	coordinates: String
	contact: String
	phone: String
	email: String
	page: Int
	limit: Int
  }

type ModelWareHouseConnection {
	items: [WareHouse]!
	pagination: Pagination!
}

type Shop
{
  id: ID!
  name: String!
  url: String!
  code: String!
  country: ID
  description: String
  active: Boolean
  ordering: Int
  phone: String
  address: String
  postCode: String
  warehousesAvailable: WarehousesAvailable
  excludedStores: [ExcludedStoresItem]
}

enum WarehousesAvailable {
	Y # да
	N # нет
  }

type ExcludedStoresItem {
	wareHouseId: ID
	wareHouseName: String
  }

input ExcludedStoresItemInput {
	wareHouseId: ID
	wareHouseName: String
  }

input CreateShopInput {
	id: ID
	name: String!
	url: String!
	code: String!
	country: ID
	description: String
	active: Boolean
	ordering: Int
	phone: String
	address: String
	postCode: String
	warehousesAvailable: WarehousesAvailable
	excludedStores: [ExcludedStoresItemInput]
  }

input UpdateShopInput {
	id: ID!
	name: String
	url: String
	code: String
	country: ID
	description: String
	active: Boolean
	ordering: Int
	phone: String
	address: String
	postCode: String
	warehousesAvailable: WarehousesAvailable
	excludedStores: [ExcludedStoresItemInput]
  }

input ModelShopFilterInput {
	id: String
	name: String
	url: String
	code: String
	country: String
	description: String
	active: Boolean
	ordering: Int
	phone: String
	address: String
	postCode: String
	warehousesAvailable: WarehousesAvailable
	page: Int
	limit: Int
  }

type ModelShopConnection {
	items: [Shop]!
	pagination: Pagination!
}

type Contragent
{
  id: ID!
  code: String!
  countryId: ID!
  vatRate: VatRate
  contragentType: ContragentType!
  INN: String
  legalName: String
  OKPO: String
  KPP: String
  OGRNIP: String
  legalAddress: String
  OGRN: String
  certificateNumber: String
  certificateDate: String
  BIK: String
  corrAccount: String
  bank: String
  bankAccount: String
  bankAddress: String
}

input CreateContragentInput {
  id: ID
  code: String!
  countryId: ID!
  vatRate: VatRate
  contragentType: ContragentType!
  INN: String
  legalName: String
  OKPO: String
  KPP: String
  OGRNIP: String
  legalAddress: String
  OGRN: String
  certificateNumber: String
  certificateDate: String
  BIK: String
  corrAccount: String
  bank: String
  bankAccount: String
  bankAddress: String
}

input UpdateContragentInput {
	id: ID!
	code: String
	countryId: ID
	vatRate: VatRate
	contragentType: ContragentType
	INN: String
	legalName: String
	OKPO: String
	KPP: String
	OGRNIP: String
	legalAddress: String
	OGRN: String
	certificateNumber: String
	certificateDate: String
	BIK: String
	corrAccount: String
	bank: String
	bankAccount: String
	bankAddress: String
  }

input ModelContragentFilterInput {
	id: String
	code: String
	countryId: String
	vatRate: VatRate
	contragentType: ContragentType
	INN: String
	legalName: String
	OKPO: String
	KPP: String
	OGRNIP: String
	legalAddress: String
	OGRN: String
	certificateNumber: String
	certificateDate: String
	BIK: String
	corrAccount: String
	bank: String
	bankAccount: String
	bankAddress: String
	page: Int
	limit: Int
}

enum ContragentType {
	legal_entity
	enterpreneur
  }

type ModelContragentConnection {
	items: [Contragent]!
	pagination: Pagination!
}

type OrderMethod
{
  id: ID!
  name: String!
  code: String!
  active: Boolean
  defaultForCRM: Boolean
  defaultForAPI: Boolean
}

input CreateOrderMethodInput {
  id: ID
  name: String!
  code: String!
  active: Boolean
  defaultForCRM: Boolean
  defaultForAPI: Boolean
}

input UpdateOrderMethodInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForAPI: Boolean
  }

input ModelOrderMethodFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	defaultForCRM: Boolean
	defaultForAPI: Boolean
	page: Int
	limit: Int
}

type ModelOrderMethodConnection {
	items: [OrderMethod]!
	pagination: Pagination!
}

type Bucket
{
  id: ID!
  customerId:  ID!
  products: [BucketItem]
}

type BucketItem {
	productId: ID!
	configurationId: String
	weight: String
	promotionId: String
	quantity: Int!
  }

input CreateBucketInput {
	id: ID
	customerId: ID!
	products: [BucketItemInput]
  }

input UpdateBucketInput {
	id: ID!
	customerId: ID
	products: [BucketItemInput]
  }

input BucketItemInput {
	productId: ID!
	configurationId: String
	weight: String
	promotionId: String
	quantity: Int!
  }

input ModelBucketFilterInput {
	id: String
	customerId: String
	page: Int
	limit: Int
  }

type ModelBucketConnection {
	items: [Bucket]!
	pagination: Pagination!
}

type Favorites
{
  id: ID!
  customerId: ID!
  products: [String]
}

input CreateFavoritesInput {
	id: ID
	customerId: ID!
	products: [String]
}

input UpdateFavoritesInput {
	id: ID!
	customerId: ID
	products: [String]
}

input ModelFavoritesFilterInput {
	id: String
	customerId: String
	products: [String]
	page: Int
	limit: Int
}

type ModelFavoritesConnection {
	items: [Favorites]!
	pagination: Pagination!
}

type PriceType {
	id: ID!
	name: String!
	code: String!
	active: Boolean
	isPromotionalPrice: Boolean
	basePrice: BasePrice
	ordering: Int
	description: String
	groups: [String]     
	filterExpression: String
	geo: RegionalRestrictions
  }
  
  type RegionalRestrictions {
	  location: [LocationItem]
	}
  
  enum BasePrice {
	  N 
	  Y 
	}
  
input CreatePriceTypeInput {
	  id: ID
	  name: String!
	  code: String!
	  active: Boolean
	  isPromotionalPrice: Boolean
	  basePrice: BasePrice
	  ordering: Int
	  description: String
	  groups: [String]
	  filterExpression: String
	  geo: RegionalRestrictionsInput
	}

input RegionalRestrictionsInput {
		location: [LocationItemInput]
	  }

input UpdatePriceTypeInput {
		id: ID!
		name: String
		code: String
		active: Boolean
		isPromotionalPrice: Boolean
		basePrice: BasePrice
		ordering: Int
		description: String
		groups: [String]
		filterExpression: String
		geo: RegionalRestrictionsInput
	  }

input ModelPriceTypeFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	isPromotionalPrice: Boolean
	basePrice: BasePrice
	ordering: Int
	description: String
	groups: [String]
	filterExpression: String
	geo: RegionalRestrictionsInput
	page: Int
	limit: Int
}

type ModelPriceTypeConnection {
		items: [PriceType]!
		pagination: Pagination!
	}

type Courier {
	id: ID!
	lastName: String
	firstName: String!
	patronymic: String
	email: String
	phone: String
	active: Boolean
	description: String
  }

input CreateCourierInput {
	id: ID
	lastName: String
	firstName: String!
	patronymic: String
	email: String
	phone: String
	active: Boolean
	description: String
}

input UpdateCourierInput {
	id: ID!
	lastName: String
	firstName: String
	patronymic: String
	email: String
	phone: String
	active: Boolean
	description: String
}

input ModelCourierFilterInput {
	id: String
	lastName: String
	firstName: String
	patronymic: String
	email: String
	phone: String
	active: Boolean
	description: String
	page: Int
	limit: Int
}

type ModelCourierConnection {
	items: [Courier]!
	pagination: Pagination!
}


type Unit
{
  id: ID!
  name: String!
  code: String!
  sym: String!
  active: Boolean
  default: Boolean
}

input CreateUnitInput {
	id: ID
	name: String!
	code: String!
	sym: String!
	active: Boolean
	default: Boolean
}

input UpdateUnitInput {
	id: ID!
	name: String
	code: String
	sym: String
	active: Boolean
	default: Boolean
}

input ModelUnitFilterInput {
	id: String
	name: String
	code: String
	sym: String
	active: Boolean
	default: Boolean
	page: Int
	limit: Int
}

type ModelUnitConnection {
	items: [Unit]!
	pagination: Pagination!
}

type CostGroup
{
  id: ID!
  name: String!
  code: String!
  active: Boolean
  ordering: Int
  color: String
}

input CreateCostGroupInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	ordering: Int
	color: String
}

input UpdateCostGroupInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	ordering: Int
	color: String
}

input ModelCostGroupFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	ordering: Int
	color: String
	page: Int
	limit: Int
}

type ModelCostGroupConnection {
	items: [CostGroup]!
	pagination: Pagination!
 }

 type CostItem
 {
  id: ID!
  name: String!
  code: String!
  active: Boolean
  ordering: Int
  group: ID!
  type: TypeExpanse!
  appliesToOrders: Boolean
  appliesToUsers: Boolean
}

enum TypeExpanse {
	fixed #постоянные
	variables #переменные
  }

input CreateCostItemInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	ordering: Int
	group: ID!
	type: TypeExpanse!
	appliesToOrders: Boolean
	appliesToUsers: Boolean
  }

input UpdateCostItemInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	ordering: Int
	group: ID
	type: TypeExpanse
	appliesToOrders: Boolean
	appliesToUsers: Boolean
  }

input ModelCostItemFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	ordering: Int
	group: String
	type: TypeExpanse
	appliesToOrders: Boolean
	appliesToUsers: Boolean
	page: Int
	limit: Int
}

type ModelCostItemConnection {
	items: [CostItem]!
	pagination: Pagination!
 }

type StatusGroup
{
 id: ID!
 name: String!
 code: String!
 active: Boolean
 ordering: Int!
 color: String
 default: Boolean
 type: Type
}

enum Type {
 default
 custom
}

input CreateStatusGroupInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	ordering: Int
	color: String
	default: Boolean
	type: Type
  }

input UpdateStatusGroupInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	ordering: Int
	color: String
	default: Boolean
	type: Type
  }

input ModelStatusGroupFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	ordering: Int
	color: String
	default: Boolean
	type: Type
	page: Int
	limit: Int
  }

type ModelStatusGroupConnection {
	items: [StatusGroup]!
	pagination: Pagination!
 }

type Status
{
 id: ID!
 name: String!
 code: String!
 active: Boolean
 ordering: Int!
 group: ID!
 groupInfo: StatusGroup
 color: String!
}

input CreateStatusInput {
	id: ID
	name: String!
	code: String!
	active: Boolean
	ordering: Int!
	group: ID!
	color: String!
  }

input UpdateStatusInput {
	id: ID!
	name: String
	code: String
	active: Boolean
	ordering: Int
	group: ID
	color: String
  }

input ModelStatusFilterInput {
	id: String
	name: String
	code: String
	active: Boolean
	ordering: Int
	group: String
	page: Int
	limit: Int
}

type ModelStatusConnection {
	items: [Status]!
	pagination: Pagination!
 }

type GeneralSettings
{
 id: ID!
 company: String!
 systemLanguage: SystemLanguage!
 listAvailableCountries: [String]
 defaultCurrency: String!
 timeZone: String!
 statusMatrix: StatusMatrix!
 workingTime: [WorkTime]
 noWorkingDates: [String]
 ipRestriction: String
 twoFactorAuth: String!
 productsQuantity: ProductsQuantity!
 weightAccuracy: WeightAccuracy!
 printingForms: PrintingForms!

}

enum SystemLanguage {
	R # русский
	E # английский
	S # испанский
  }
  
enum StatusMatrix {
	none # Не использовать
	order_types_only # Для типов заказов
	order_types_user_groups # Для типов заказов и групп пользователей
  }
  
type WorkTime {
	daysOfWeek: [Days]
	startTime: String
	endTime: String
	lunchStartTime: String
	lunchEndTime: String
  }

enum ProductsQuantity {
	W # Целое
	F # Дробное
  }

enum WeightAccuracy {
	G # Граммы
	M # Миллиграммы
  }
  
enum PrintingForms {
	D # Скачивать
	O # Открывать
  }

input CreateGeneralSettingsInput {
	id: ID
	company: String!
	systemLanguage: SystemLanguage!
	listAvailableCountries: [String]
	defaultCurrency: String!
	timeZone: String!
	statusMatrix: StatusMatrix!
	workingTime: [WorkTimeInput]
	noWorkingDates: [String]
	ipRestriction: String
	twoFactorAuth: String!
	productsQuantity: ProductsQuantity!
	weightAccuracy: WeightAccuracy!
	printingForms: PrintingForms!
  }

input UpdateGeneralSettingsInput {
	id: ID!
	company: String
	systemLanguage: SystemLanguage
	listAvailableCountries: [String]
	defaultCurrency: String
	timeZone: String
	statusMatrix: StatusMatrix
	workingTime: [WorkTimeInput]
	noWorkingDates: [String]
	ipRestriction: String
	twoFactorAuth: String
	productsQuantity: ProductsQuantity
	weightAccuracy: WeightAccuracy
	printingForms: PrintingForms
  }

input WorkTimeInput {
	daysOfWeek: [Days]
	startTime: String
	endTime: String
	lunchStartTime: String
	lunchEndTime: String
  }

input ModelGeneralSettingsFilterInput {
	id: ID
	company: String
	systemLanguage: SystemLanguage
	listAvailableCountries: [String]
	defaultCurrency: String
	timeZone: String
	statusMatrix: StatusMatrix
	noWorkingDates: [String]
	ipRestriction: String
	twoFactorAuth: String
	productsQuantity: ProductsQuantity
	weightAccuracy: WeightAccuracy
	printingForms: PrintingForms
	page: Int
	limit: Int
  }

type ModelGeneralSettingsConnection {
	items: [GeneralSettings]!
	pagination: Pagination!
 }

type TransitionStatuses
{
  id: ID!
  orderTypeId: ID
  orderType: OrderType
  userGroupId: ID
  userGroup: UserGroup
  matrix: String
}

input CreateTransitionStatusesInput {
	id: ID
	orderTypeId: ID
	userGroupId: ID
	matrix: String
  }

input UpdateTransitionStatusesInput {
	id: ID!
	orderTypeId: ID
	userGroupId: ID
	matrix: String
  }

input ModelTransitionStatusesFilterInput {
	id: String
	orderTypeId: String
	userGroupId: String
	matrix: String
	page: Int
	limit: Int
}

type ModelTransitionStatusesConnection {
	items: [TransitionStatuses]!
	pagination: Pagination!
 }

type Filter
{
 id: ID!
 name: String!
 filter: FilterItems!
}

type FilterItems {
	manager: String
	country: String
	email: String
	number: String
	fio: String
	statuses: [String]
  }

input FilterItemsInput {
	manager: String
	country: String
	email: String
	number: String
	fio: String
	statuses: [String]
  }

input CreateFilterInput {
	id: ID
	name: String!
	filter: FilterItemsInput!
  }

input UpdateFilterInput {
	id: ID!
	name: String
	filter: FilterItemsInput
  }

input ModelFilterFilterInput {
	id: String
	name: String
	page: Int
	limit: Int
  }

type ModelFilterConnection {
	items: [Filter]!
	pagination: Pagination!
 }

type PlatformSettings {
  id: ID!
  distribution: Distribution
  emailNotification: Boolean
}

enum Distribution {
  do_not_assign
  assign_evenly
}

input CreatePlatformSettingsInput {
	id: ID
	distribution: Distribution
  	emailNotification: Boolean
}

input UpdatePlatformSettingsInput {
	id: ID!
	distribution: Distribution
  	emailNotification: Boolean
}

input ModelPlatformSettingsFilterInput {
	id: String
	distribution: Distribution
  	emailNotification: Boolean
	page: Int
	limit: Int
}

type ModelPlatformSettingsConnection {
	items: [PlatformSettings]!
	pagination: Pagination!
 }

 input CreateCustomerInput {
	id: ID
	userStatus: [CustomerStatus]
	lastName: String
	firstName: String
	patronymic: String
	email: String
	birthday: String
	tags: [TagsInput]
	managerId: ID
	sex: Sex
	address: AddressInput
	phone: String
	totalSumm: String
	averageSumm: String
	totalAmountOfOrders: String
	createdAt: String
	isEntity: Boolean
	entityInfo: EntityInfoInput
	ltv: String
	customerBucketId: ID
}

input UpdateCustomerInput {
	id: ID!
	userStatus: [CustomerStatus]
	lastName: String
	firstName: String
	patronymic: String
	email: String
	birthday: String
	tags: [TagsInput]
	managerId: ID
	sex: Sex
	address: AddressInput
	phone: String
	totalSumm: String
	averageSumm: String
	totalAmountOfOrders: String
	createdAt: String
	isEntity: Boolean
	entityInfo: EntityInfoInput
	ltv: String
	customerBucketId: ID
}

input EntityInfoInput {
	legalName: String
	fax: String
	INN: String
	KPP: String
	legalAddress: String
	OKPO: String
	OKONH: String
	checkingAccount: String
	corrAccount: String
	BIK: String
}

input AddressInput {
	index: String
	country: String
	region: String
	city: String
	street: String
	structure: String
	entrance: String
	flat: String
	floor: Int
	house: String
	housing: String
	metro: String
	notes: String
	text: String
	intercomCode: String
	isFlat: Boolean
	isOffice: Boolean
}


input statusBlockInput {
	orderState: OrderState
	statusUpdatedAt: String
	statusId: ID
}

type statusBlock {
	orderState: OrderState
	statusUpdatedAt: String
	statusId: ID
	status: Status
}

enum OrderState {
	expired
	call
}

input CustomerInfoInput {
	lastName: String
	firstName: String
	patronymic: String
	email: String
	phone: String
	additionalPhone: String
}

type CustomerInfo {
	lastName: String
	firstName: String
	patronymic: String
	email: String
	phone: String
	additionalPhone: String
}

input AddressOrderInput {
	country: String
	region: String
	city: String
	postCode: String
	street: String
	metro: String
	house: String      # дом 
	apartment: String  # Квартира
	structure: String  # Строение
	block: String
	housing: String    # корпус
	entrance: String   # Подъезд
	floor: String      # этаж
}

type AddressOrder {
	country: String
	region: String
	city: String
	postCode: String
	street: String
	metro: String
	house: String      # дом 
	apartment: String  # Квартира
	structure: String  # Строение
	block: String
	housing: String    # корпус
	entrance: String   # Подъезд
	floor: String      # этаж
}

input PriceOrderInput {
	discountManualAmount: String
	discountManualPercent: String
	totalCost: String!
	discountAmount: String
	outcome: String!
}


type PriceOrder {
	discountManualAmount: String!
	discountManualPercent: String!
	totalCost: String!
	discountAmount: String!
	outcome: String!
}

input DeliveryInput {
	methodOfObtaining: MethodOfObtaining!
	deliveryTypeId: ID
	deliveryCost: String
	deliveryNetCost: String
}

type Delivery {
	methodOfObtaining: MethodOfObtaining!
	deliveryTypeId: ID
	deliveryCost: String
	deliveryNetCost: String
	delevetyType: DeliveryType
}

enum MethodOfObtaining {
	pick_up_point
	courier
}

enum PaymentStatusOrder {
	wait
	partial
	payed
}
input PaymentOrderInput {
	paymentSum: String!
	paymentStatus: PaymentStatusOrder!
	paymentTypeId: ID
	paidAt: String
	paymentAmount: String
    comment: String
}

type PaymentOrder {
	paymentSum: String!
	paymentStatus: PaymentStatusOrder!
	paymentTypeId: ID
	paymentType: PaymentType
	paidAt: String
	paymentAmount: String
    comment: String
}

input ShippmentOrderInput {
	shipmentStore: String,
	shipmentDate: String,
	shipped: Boolean
}

type ShippmentOrder {
	shipmentStore: String,
	shipmentDate: String,
	shipped: Boolean
}


input ExpensesInput {
	period: String
	sum: String
	articleCosts: String
	comment: String
}

type Expenses {
	period: String
	sum: String
	articleCosts: String
	comment: String
} 

input PropertyInput {
	key: String
	value: String
}

type Property{
	key: String
	value: String
}

input OrderItemInput {
	productId:  String!
    configurationId:  String
	weight:  String
    comment:  String
	promotionId:  String
	productName:  String!
	quantity:  String 
	properties: [ PropertyInput ]
	vendorCode:  String 
	status:  String 
	initialPrice: String!
	priceTypeId: ID
	discountTotal: String  
	discountManualAmount: String 
	discountManualPercent: String 
    vatRate: VatRate
	purchasePrice: String!
	image: String 
	url: String
}

type OrderItem {
	productId:  String!
    configurationId:  String
	weight:  String
    comment:  String
	promotionId:  String
	productName:  String!
	quantity:  String 
	properties: [ Property ]
	vendorCode:  String 
	status:  String 
	initialPrice: String 
	priceTypeId: ID
	discountTotal: String  
	discountManualAmount: String 
	discountManualPercent: String 
    vatRate: VatRate
	purchasePrice: String 
	image: String 
	url: String
}

input UpdateOrderInput {
	statusBlock: statusBlockInput
	number: String
	ordering: Int
	managerId: ID
	orderTypeId: ID!
	customerId: ID!
	customerInfo: CustomerInfoInput
	address: AddressOrderInput
	price: PriceOrderInput!,
	delivery: DeliveryInput
	payment: PaymentOrderInput,
	shippment: ShippmentOrderInput,
	intercomCode: String
	promocode: String
	additionalInfo: String
	customerComment: String
	managerComment: String
	comment: String
	expenses: [ExpensesInput],
	expensesResult: String
	orderItems: [OrderItemInput]
}

input CreateOrderInput {
	statusBlock: statusBlockInput
	number: String
	ordering: Int
	managerId: ID
	orderTypeId: ID!
	customerId: ID!
	customerInfo: CustomerInfoInput
	address: AddressOrderInput
	price: PriceOrderInput!,
	delivery: DeliveryInput
	payment: PaymentOrderInput,
	shippment: ShippmentOrderInput,
	intercomCode: String
	promocode: String
	additionalInfo: String
	customerComment: String
	managerComment: String
	comment: String
	expenses: [ExpensesInput],
	expensesResult: String
	orderItems: [OrderItemInput]
}

type Order {
	id: ID!
	statusBlock: statusBlock
	number: String
	ordering: Int
	managerId: ID
	manager: User
	orderTypeId: ID!
	orderType: OrderType
	customerId: ID!
	customer: Customer
	customerInfo: CustomerInfo
	address: AddressOrder
	price: PriceOrder!
	delivery: Delivery
	payment: PaymentOrder
	shippment: ShippmentOrder
	intercomCode: String
	promocode: String
	additionalInfo: String
	customerComment: String
	managerComment: String
	comment: String
	expenses: [Expenses],
	expensesResult: String
	orderItems: [OrderItem]
}

input ModelOrderFilterInput {
	createdAt: String
	orderStatus: String
	userStatus: String
	paymentStatus: String
	number: String
	ordering: Int
	country: String
	managerId: String
	orderTypeId: String
	wrapperId: String
	customerId: String
	lastName: String
	firstName: String
	patronymic: String
	email: String
	phone: String
	statusUpdatedAt: String
	additionalPhone: String
	discountManualAmount: String
	discountManualPercent: String
	totalCost: String
	discountAmount: String
	outcome: String
	shipmentStore: String
	shipmentDate: String
	shipped: Boolean
	deliveryTypeId: String
	postCode: String
	region: String
	city: String
	underground: String
	street: String
	metro: String
	house: String
	apartment: String
	structure: String
	block: String
	housing: String
	entrance: String
	floor: String
	intercomCode: String
	promocode: String
	additionalInfo: String
	deliveryCost: String
	deliveryNetCost: String
	paymentSum: String
	customerComment: String
	managerComment: String
	expensesResult: String
	methodOfObtaining: String
	comment: String
	page: Int
	limit: Int
}

type ModelOrderConnection {
	items: [Order]
	pagination: Pagination!
}
type RootMutation {
	createCustomer(input: CreateCustomerInput!): Customer
	updateCustomer(input: UpdateCustomerInput!): Customer
	deleteCustomer(id: ID!): Customer
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
	createCountry(input: CreateCountryInput!): Country
	updateCountry(input: UpdateCountryInput!): Country
	deleteCountry(id: ID!): Country
	createRegion(input: CreateRegionInput!): Region
	updateRegion(input: UpdateRegionInput!): Region
	deleteRegion(id: ID!): Region
	createCity(input: CreateCityInput!): City
	updateCity(input: UpdateCityInput!): City
	deleteCity(id: ID!): City
	createUserGroup(input: CreateUserGroupInput!): UserGroup
	updateUserGroup(input: UpdateUserGroupInput!): UserGroup
	deleteUserGroup(id: ID!): UserGroup
	createOrderType(input: CreateOrderTypeInput!): OrderType
	updateOrderType(input: UpdateOrderTypeInput!): OrderType
	deleteOrderType(id: ID!): OrderType
	createDeliveryType(input: CreateDeliveryTypeInput!): DeliveryType
	updateDeliveryType(input: UpdateDeliveryTypeInput!): DeliveryType
	deleteDeliveryType(id: ID!): DeliveryType
	createPaymentStatus(input: CreatePaymentStatusInput!): PaymentStatus
	updatePaymentStatus(input: UpdatePaymentStatusInput!): PaymentStatus
	deletePaymentStatus(id: ID!): PaymentStatus
	createPaymentType(input: CreatePaymentTypeInput!): PaymentType
	updatePaymentType(input: UpdatePaymentTypeInput!): PaymentType
	deletePaymentType(id: ID!): PaymentType
	createWareHouse(input: CreateWareHouseInput!): WareHouse
	updateWareHouse(input: UpdateWareHouseInput!): WareHouse
	deleteWareHouse(id: ID!): WareHouse
	createShop(input: CreateShopInput!): Shop
	updateShop(input: UpdateShopInput!): Shop
	deleteShop(id: ID!): Shop
	createContragent(input: CreateContragentInput!): Contragent
	updateContragent(input: UpdateContragentInput!): Contragent
	deleteContragent(id: ID!): Contragent
	createOrderMethod(input: CreateOrderMethodInput!): OrderMethod
	updateOrderMethod(input: UpdateOrderMethodInput!): OrderMethod
	deleteOrderMethod(id: ID!): OrderMethod
	createBucket(input: CreateBucketInput!): Bucket
	updateBucket(input: UpdateBucketInput!): Bucket
	deleteBucket(id: ID!): Bucket
	createFavorites(input: CreateFavoritesInput!): Favorites
	updateFavorites(input: UpdateFavoritesInput!): Favorites
	deleteFavorites(id: ID!): Favorites
	createPriceType(input: CreatePriceTypeInput!): PriceType
	updatePriceType(input: UpdatePriceTypeInput!): PriceType
	deletePriceType(id: ID!): PriceType
	createCourier(input: CreateCourierInput!): Courier
	updateCourier(input: UpdateCourierInput!): Courier
	deleteCourier(id: ID!): Courier
	createUnit(input: CreateUnitInput!): Unit
	updateUnit(input: UpdateUnitInput!): Unit
	deleteUnit(id: ID!): Unit
	createCostGroup(input: CreateCostGroupInput!): CostGroup
	updateCostGroup(input: UpdateCostGroupInput!): CostGroup
	deleteCostGroup(id: ID!): CostGroup
	createCostItem(input: CreateCostItemInput!): CostItem
	updateCostItem(input: UpdateCostItemInput!): CostItem
	deleteCostItem(id: ID!): CostItem
	createStatusGroup(input: CreateStatusGroupInput!): StatusGroup
	updateStatusGroup(input: UpdateStatusGroupInput!): StatusGroup
	deleteStatusGroup(id: ID!): StatusGroup
	createStatus(input: CreateStatusInput!): Status
	updateStatus(input: UpdateStatusInput!): Status
	deleteStatus(id: ID!): Status
	createGeneralSettings(input: CreateGeneralSettingsInput!): GeneralSettings
	updateGeneralSettings(input: UpdateGeneralSettingsInput!): GeneralSettings
	deleteGeneralSettings(id: ID!): GeneralSettings
	createTransitionStatuses(input: CreateTransitionStatusesInput!): TransitionStatuses
	updateTransitionStatuses(input: UpdateTransitionStatusesInput!): TransitionStatuses
	deleteTransitionStatuses(id: ID!): TransitionStatuses
	createFilter(input: CreateFilterInput!): Filter
	updateFilter(input: UpdateFilterInput!): Filter
	deleteFilter(id: ID!): Filter
	createPlatformSettings(input: CreatePlatformSettingsInput!): PlatformSettings
	updatePlatformSettings(input: CreatePlatformSettingsInput!): PlatformSettings
	deletePlatformSettings(id: ID!): PlatformSettings
	createOrder(input: CreateOrderInput!): Order
	updateOrder(input: UpdateOrderInput!): Order
	deleteOrder(id: ID!): Order
}

type RootQuery {
	getCustomerById(id: ID!): Customer
	listCustomers(filter: ModelCustomerFilterInput): ModelCustomerConnection
	getUser(id: String!): User
	listUsers(filter: ModelUserFilterInput): ModelUserConnection
	getCountry(id: String!): Country
	listCountries(filter: ModelCountryFilterInput): ModelCountryConnection
	listRegions(filter: ModelRegionFilterInput): ModelRegionConnection
	getRegion(id: String!): Region
	listCities(filter: ModelCityFilterInput): ModelCityConnection
	getCity(id: String!): City
	listUserGroups(filter: ModelUserGroupFilterInput): ModelUserGroupConnection
	getUserGroup(id: String!): UserGroup
	listOrderTypes(filter: ModelOrderTypeFilterInput): ModelOrderTypeConnection
	getOrderType(id: String!): OrderType
	listDeliveryTypes(filter: ModelDeliveryTypeFilterInput): ModelDeliveryTypeConnection
	getDeliveryType(id: ID!): DeliveryType
	listPaymentStatuses(filter: ModelPaymentStatusFilterInput): ModelPaymentStatusConnection
	getPaymentStatus(id: ID!): PaymentStatus
	listPaymentTypes(filter: ModelPaymentTypeFilterInput): ModelPaymentTypeConnection
	getPaymentType(id: ID!): PaymentType
	listWareHouses(filter: ModelWareHouseFilterInput): ModelWareHouseConnection
	getWareHouse(id: ID!): WareHouse
	listShops(filter: ModelShopFilterInput): ModelShopConnection
	getShop(id: ID!): Shop
	listContragents(filter: ModelContragentFilterInput): ModelContragentConnection
	getContragent(id: ID!): Contragent
	listOrderMethods(filter: ModelOrderMethodFilterInput): ModelOrderMethodConnection
	getOrderMethod(id: ID!): OrderMethod
	listBuckets(filter: ModelBucketFilterInput): ModelBucketConnection
	getBucket(id: ID!): Bucket
	listFavorites(filter: ModelFavoritesFilterInput): ModelFavoritesConnection
	getFavorites(id: ID!): Favorites
	listPriceTypes(filter: ModelPriceTypeFilterInput): ModelPriceTypeConnection
	getPriceType(id: ID!): PriceType
	listCouriers(filter: ModelCourierFilterInput): ModelCourierConnection
	getCourier(id: ID!): Courier
	listUnits(filter: ModelUnitFilterInput): ModelUnitConnection
	getUnit(id: ID!): Unit
	listCostGroups(filter: ModelCostGroupFilterInput): ModelCostGroupConnection
	getCostGroup(id: ID!): CostGroup
	listCostItems(filter: ModelCostItemFilterInput): ModelCostItemConnection
	getCostItem(id: ID!): CostItem
	listStatusGroups(filter: ModelStatusGroupFilterInput): ModelStatusGroupConnection
	getStatusGroup(id: ID!): StatusGroup
	listStatuses(filter: ModelStatusFilterInput): ModelStatusConnection
	getStatus(id: ID!): Status
	listGeneralSettings(filter: ModelGeneralSettingsFilterInput): ModelGeneralSettingsConnection
	getGeneralSettings(id: ID!): GeneralSettings
	listTransitionStatuses(filter: ModelTransitionStatusesFilterInput): ModelTransitionStatusesConnection
	getTransitionStatuses(id: ID!): TransitionStatuses
	listFilters(filter: ModelFilterFilterInput): ModelFilterConnection
	getFilter(id: ID!): Filter
	listPlatformSettings(filter: ModelPlatformSettingsFilterInput): ModelPlatformSettingsConnection
	getPlatformSettings(id: ID!): PlatformSettings
	listOrders(filter: ModelOrderFilterInput): ModelOrderConnection
	getOrder(id: ID!): Order
}

schema {
	query: RootQuery
	mutation: RootMutation
}
`

module.exports = schema
