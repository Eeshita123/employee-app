class SignUp {

    constructor(){
    
        this.input = createInput("");
        this.input1 = createInput("");
        this.button = createButton('Sign In');
    
    }
    
    hide(){
    
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.input.hide();
        this.input1.hide();
        this.button.hide();
        this.error.hide();
    
    }
    
        update(name ){
    
            
            database.ref("people/user").set({
    
                name:name
                
    
            })
    
        }

        update1( mobno){
    
            
            database.ref("people/user").set({
    
               
                mobileNumber:mobno
    
            })
    
        }
        
    display(){
    
        
        
        
        var title = createElement('h1');
        title.html("Welcome ___________ App . Sign In with your valid details");
        title.position(displayWidth/2 - 400, displayHeight/6);
    
        var title1 = createElement('h2');
        title1.html("Username - ");
        title1.position(displayWidth/2 - 250, displayHeight/3);
    
        var title2 = createElement('h2');
        title2.html("Mobile Number - ");
        title2.position(displayWidth/2 - 250, displayHeight/3 + 80);
    
    
        var error = createElement('h3');
        
        
    
        this.input.position(displayWidth/2 - 120, displayHeight/3 + 20);
        this.input1.position(displayWidth/2 - 60, displayHeight/3 + 100);
        this.button.position(displayWidth/2 - 80, displayHeight/2 + 250 );
    
       
        this.button.mousePressed(()=>{
    
            var name = this.input.value();
            var mobno = this.input.value();
    
            if(name === "" && mobno === ""){
    
                
                error.html("Please write your Valid details before Signing In");
                strokeWeight(2);
                stroke("red");
                error.position(displayWidth/2 - 250, displayHeight/2 + 90 );
    
            }
            else{
    
    
    
            
    
            title.hide();
            title1.hide();
            title2.hide();
            this.input.hide();
            this.input1.hide();
           this.button.hide();
           error.hide();
            
            
    
           verify = new Verification();
           verify.display();
    
            
    
    
            
            sign.update(name );
            sign.update(mobno );
            
        
            }
    
            })
    
    
    }
    
    
    }