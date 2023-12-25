import customersData from '../data/customers.json';
import productsData from '../data/products.json';
import ordersData from '../data/orders.json';
import suppliersData from '../data/suppliers.json';

const dataSources = {
  0: customersData,
  1: productsData,
  2: suppliersData,
  3: ordersData,
};

export default function Table(data) {
  const infoStore = dataSources[data] || []; // Get data source based on the index or default to an empty array

  const Headers = Object.keys(infoStore[0] || {}); // Extract headers from the first row (if available)
  const rows = infoStore.slice(1).map(row => Object.values(row)); // Extract rows excluding header row

  return { Headers, rows };
}
