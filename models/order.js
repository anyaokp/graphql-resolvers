const mongoose = require('mongoose');
const { ORDER_STATE, PAYMENT_STATUS_ORDER, METHOD_OF_OBTAINING, VAT_RATE } = require('../constants');

const OrderSchema = new mongoose.Schema(
  {
    statusBlock: {
      orderState: [
        {
          type: String,
          enum: ORDER_STATE
        }
      ],
      statusUpdatedAt: { type: String, default: new Date() },
      statusId: {
        type: String,
        ref: 'Status'
      }
    },
    number: { type:  String  },
    ordering: { type:  Number },
    managerId: {
      type: String,
      ref: 'User',
    },
    orderTypeId:  {
      type: String,
      ref: 'Order-type',
    },
    customerId: {
      type: String,
      ref: 'Customer',
    },
    customerInfo: {
      lastName: { type: String},
      firstName: { type: String},
      patronymic: { type: String},
      email: { type: String},
      phone: { type: String},
      additionalPhone: { type: String}
    },
    address: {
      country: { type: String, requred: true  },
      region: { type: String, requred: true  },
      city: { type: String, requred: true  },
      postCode: { type: String, requred: true  },
      street: { type: String, requred: true },
      metro: { type: String, default: null },
      house: { type: String, default: null },      // дом 
      apartment: { type: String, default: null },  // Квартира
      structure: { type: String, default: null },  // Строение
      block: { type: String, default: null },
      housing: { type: String, default: null },    // корпус
      entrance: { type: String, default: null },   // Подъезд
      floor: { type: String, default: null },      // этаж
    },
    price: {
      discountManualAmount: { 
        type: String,
        required: true,
        default: '0'
      },
      discountManualPercent: { 
        type: String,
        required: true,
        default: '0'
      },
      totalCost: { 
        type: String,
        required: true,
        default: '0'
      },
      discountAmount: { 
        type: String,
        required: true,
        default: '0'
      },
      outcome: { 
        type: String,
        required: true,
        default: '0'
      }  
    },
    delivery: {
      methodOfObtaining: {
        type: String,
        required: true,
        enum: METHOD_OF_OBTAINING
      },// способ получения
      deliveryTypeId: {
        type: String,
        ref: 'Delivery-type',
      },
      deliveryCost: {type: String, default: '0'},
      deliveryNetCost: {type: String, default: '0'}
    },
    payment: {
      paymentSum: { type: String, required: true },
      paymentStatus: {
        type: String,
        required: true,
        enum: PAYMENT_STATUS_ORDER
      },
      paymentTypeId: {
        type: String,
        ref: 'Payment-type',
      },
      paidAt: { type: String },
      paymentAmount: { type: String },
      comment: { type: String, default: null }
    },
    shippment: {
      shipmentStore:  { type: String, default: null },
      shipmentDate: { type: String, default: null },
      shipped: { 
        type: Boolean,
        required: true,
        default: false
      },
    },
  
    intercomCode: { type: String, default: null },
    promocode: { type: String, default: null },
    additionalInfo: { type: String, default: null },
    customerComment: { type: String, default: null },
    managerComment: { type: String, default: null },
    comment: { type: String, default: null },
    expenses: [
      {
        period: { type: String },
        sum: { type: String },
        articleCosts: { type: String },
        comment: { type: String }
      }
    ],
    expensesResult: { type: String },
    orderItems: [
      {
        productId:  { type: String },
        configurationId:  { type: String },
        weight:  { type: String },
        comment:  { type: String, default: null },
        promotionId:  { type: String },
        productName:  { type: String },
        quantity:  { type: String }, 
        properties: [
          {
            key: { type: String },
            value: { type: String }
          }
        ],
        vendorCode:  { type: String }, 
        status:  { type: String }, 
        initialPrice: { type: String, required: true }, 
        priceTypeId: {
          type: String,
          ref: 'Price-type'
        },
        discountTotal: { type: String, required: true, default: '0' },  
        discountManualAmount: { type: String, required: true, default: '0'}, 
        discountManualPercent: { type: String, required: true, default: '0' }, 
        vatRate: { 
          type: String,
          required: true,
          enum: VAT_RATE
        },
        purchasePrice: { type: String, required: true }, 
        image: { type: String }, 
        url: { type: String }
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

OrderSchema.set('toObject', { virtuals: true })
OrderSchema.set('toJSON', { virtuals: true })

OrderSchema.virtual('id').get(function(){
  return this._id
});

OrderSchema.virtual('status', {
  ref: 'Status',
  localField: 'statusBlock.statusId', 
  foreignField: '_id',
  justOne : true 
});

OrderSchema.virtual('manager', {
  ref: 'User',
  localField: 'managerId', 
  foreignField: '_id',
  justOne : true
});

OrderSchema.virtual('orderType', {
  ref: 'Order-type',
  localField: 'orderTypeId', 
  foreignField: '_id' ,
  justOne : true
});

OrderSchema.virtual('customer', {
  ref: 'Customer',
  localField: 'customerId', 
  foreignField: '_id' ,
  justOne : true
});

OrderSchema.virtual('deliveryType', {
  ref: 'Delivery-type',
  localField: 'delivery.deliveryTypeId', 
  foreignField: '_id',
  justOne : true
})


OrderSchema.virtual('paymentType', {
  ref: 'Payment-type',
  localField: 'payment.paymentTypeId', 
  foreignField: '_id' ,
  justOne : true
})


OrderSchema.virtual('statusBlock.status').get(function () {
  return this?.status
});

OrderSchema.virtual('delivery.deliveryType').get(function () {
  return this?.deliveryType
});


OrderSchema.virtual('payment.paymentType').get(function () {
  return this?.paymentType
});

OrderSchema.set("toObject", {
  virtuals: true,
  transform(doc, ret) {
    delete ret?.status
    delete ret?.deliveryType
    delete ret?.paymentType
    delete ret._id
  }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
