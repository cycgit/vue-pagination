    var navBar = new Vue({
        el: '.page-bar',
        data: {
            all: 20,
            cur: 1,
        },
        computed: {
            indexs: function(){
              var left = 1
              var right = this.all
              var ar = [] 
              if(this.all>= 11){
                if(this.cur > 5 && this.cur < this.all-4){
                        left = this.cur - 5
                        right = this.cur + 4
                }else{
                    if(this.cur<=5){
                        left = 1
                        right = 10
                    }else{
                        right = this.all
                        left = this.all -9
                    }
                }
             }
            while (left <= right){
                ar.push(left)
                left ++
            }   
            return ar
           },
           showLast: function(){
                if(this.cur == this.all){
                    return false
                }
                return true
           },
           showFirst: function(){
                if(this.cur == 1){
                    return false
                }
               return true
           }
        },
        methods: {
            btnClick: function(data){
                if(data != this.cur){
                    this.cur = data
                }
            }
        },
        watch: {
            cur: function(oldValue , newValue){
                    console.log(arguments)
            }
        }
      


        
    })