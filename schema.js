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

type Tags {
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

type RootMutation {
	putCustomer(id: ID!, title: String!): Customer
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
}

schema {
	query: RootQuery
	mutation: RootMutation
}
`

module.exports = schema
