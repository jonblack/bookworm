import DS from 'ember-data';
import config from '../config/environment';


export default DS.JSONAPIAdapter.extend({
  host: config.ApiUrl,
  namespace: config.ApiPrefix
});
