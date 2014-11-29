module.exports = function(content){

  this.content = content;
  this.date = new Date();

  this.isOld = function(){

    var now = new Date();
    var diff = now.getTime() - this.date.getTime();

    // 1分以上経ってる
    if((diff / (1000 * 60)) > 1){
      return true;
    }else{
      return false;
    }
  };

  console.log(this.date, this.content);

};

