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

type RootMutation {
	putCustomer(id: ID!, title: String!): Customer
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
}

type RootQuery {
	getCustomerById(id: ID!): Customer
	listCustomers(filter: ModelCustomerFilterInput): ModelCustomerConnection
	getUser(id: String!): User
	listUsers(filter: ModelUserFilterInput): ModelUserConnection
}

schema {
	query: RootQuery
	mutation: RootMutation
}
`

module.exports = schema