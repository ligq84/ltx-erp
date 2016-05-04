import Customers from "./containers/Customers"
import Customer from "./containers/Customer"
import AddCustomer from "./containers/AddCustomer"
module.exports = [{
  path: 'customers',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, Customers)
    })
  }
},
{
  path: 'addCustomer',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, AddCustomer)
    })
  }
},{
  path: 'customer',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, Customer)
    })
  }
},
]
