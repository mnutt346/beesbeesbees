var RetiredForagerBee = function() {
    ForagerBee.call(this);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
};

RetiredForagerBee.prototype = new ForagerBee();

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage() {
    return 'I am too old, let me play cards instead';
}