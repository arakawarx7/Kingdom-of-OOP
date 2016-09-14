'use strict';
module.exports = class  LivingTHings{
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name(name){
    if (typeof name !== 'string'){
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }
  get uniCellular(){
    if (this._uniCellular === true ){
      return true;
    } else {
      return false;
    }
  }set uniCellular(uniCellular){
    if (typeof _uniCellular !== 'string'){
      throw new TypeError('uniCellular must be string');
    }

    this._uniCellular = uniCellular;
  }
  get multiCellular(){
    if (this.uniCellular === true){
      return true;
    } else {
      return false;
    }
   }
  set multiCellular(multiCellular){
    if (typeof multiCellular !== 'string'){
      throw new TypeError('multiCellular must be string');
    }
    this._uniCellular = multiCellular;
  }
    get eukayote(){
      if (this._trueNucleus === true){
        return true;
      } else {
        return false;
      }
   }
   set eukayote(eukayote){
    if (typeof _trueNucleus !== 'string'){
      throw new TypeError('multiCellular must be string');
    }
    this._trueNucleus = eukayote;
  }

  get prokayote(){
        if (this._trueNucleus === true){
          return true;
        } else {
          return false;
        }
     }
   set prokayote(prokayote){
    if (typeof _trueNucleus !== 'string'){
      throw new TypeError('trueNucleus must be string');
    }
    this._trueNucleus = prokayote;
  }
  get anaerobic(){
    if (this._trueNucleus === true){
        return true;
    } else {
      return false;
      }
  }
  set anaerobic(anaerobic){
    if (typeof _anaerobic !== 'string'){
      throw new TypeError('anaerobic must be string');
    }
    this._trueNucleus = anaerobic;
  }
  get asexual(){
      if (this._asexual === true){
        return true;
      } else {
        return false;
      }
   }
   set asexual(asexual){
    if (typeof _asexual !== 'string'){
      throw new TypeError('asexual must be string');
    }
    this._asexual = asexual;
  }
  get sexual(){
      if (this._asexual === true){
        return true;
      } else {
        return false;
      }
   }
   set sexual(sexual){
    if (typeof _asexual !== 'string'){
      throw new TypeError('asexual must be string');
    }
    this._asexual = sexual;
  }
  get mobile(){
      if (this._mobile === true){
        return true;
      } else {
        return false;
      }
   }
   set mobile(mobile){
    if (typeof _mobile !== 'string'){
      throw new TypeError('mobile must be string');
    }
    this._mobile = mobile;
  }
  get immoblie(){
      if (this._mobile === true){
        return true;
      } else {
        return false;
      }
   }
   set immoblie(mobile){
    if (typeof immoblie !== 'string'){
      throw new TypeError('immoblie must be string');
    }
    this._mobile = mobile ;
  }
};