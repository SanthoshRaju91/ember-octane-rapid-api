import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  const [ firstCurrency, secondCurrency ] = params;
  return (firstCurrency / secondCurrency).toFixed(2);
});
