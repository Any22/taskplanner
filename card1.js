    class Card {
        constructor(id,cname,pic,description,assignee,dDate,st)
        {
        this.id = id ;
        this.cname  = cname ;
        this.pic  = pic   ;
        this.description=description;
        this.assignee = assignee;
        this.dDate=dDate;
        this.st=st;
       
        }
        htmlString() {
            let html="";
                    html = `<div id ="cList_${this.id}" class="card">
                            <h1>${this.cname}</h1>
                            <img src="sample.jpg" alt="Denim Jeans" style="width:100%">
                            <p>${this.description}</p>
                            <p>${this.assignee}</p>
                            <p>${this.dDate}</p>
                            <p>${this.st}</p>
                            <p>${this.id}</p>
                            <p><button class="delete btn btn-primary" id="dbutton_${this.id}"> Delete</button></p>
                            <p><button class="Edit btn btn-primary" id="ebutton_${this.id}"> Edit</button></p>
                            </div>`;  
                          return html;
         }
         toElement() {
            const htmlElement = this.htmlString(); //assigning function to var
            const element = document.createRange().createContextualFragment(htmlElement);
            element.querySelector("button.Edit").addEventListener("click", edifunc);
            element.querySelector("button.delete").addEventListener("click", delfunc);
            return element;
        }

    }
    class CardManager{
        constructor(master) {
        this.cardArr=[];
        this.currentId = parseInt(localStorage.getItem('currentId')) || 1;
        localStorage.setItem('currentId',this.currentId);
        this.master =master;
        }
            addcard(cname,pic,description,assignee,dDate,st){
                    const nCard=new Card(`nCard${this.currentId++}`,cname,pic,description,assignee,dDate,st);//creates an instance of class card
                    this.cardArr.push(nCard);

                    localStorage.setItem('currentId',this.currentId);
                    let mynewcards = JSON.parse(localStorage.getItem("mycards")) || [];
                    mynewcards.push(nCard);
                    localStorage.setItem('mycards',JSON.stringify(mynewcards));
                }

            updateTask(id,cname,pic,description,assignee,dDate,st) {                  //Function to update TASK
                    // alert("I am in update function");
                    // alert(id);
                    let updated_id="";
                    for (let i=0; i<this.cardArr.length;i++) {
                        
                        if(this.cardArr[i].id == id) {
                        // alert(" im in update condition");
                        this.cardArr[i].cname = cname;
                        this.cardArr[i].description = description;
                        this.cardArr[i].assignee = assignee; 
                        this.cardArr[i].dDate = dDate;
                        this.cardArr[i].st = st;
                        updated_id  =  id ;
                    // updating in local storage
                        let mynewcards= JSON.parse(localStorage.getItem("mycards"));
                        mynewcards[i].cname = cname;
                        mynewcards[i].description = description;
                        mynewcards[i].assignee = assignee; 
                        mynewcards[i].dDate = dDate;
                        mynewcards[i].st = st;
                        localStorage.setItem('mycards',JSON.stringfy(mynewcards));
                        break;
                        }
                        }
                    }
            deletFunc(id)
            {
                    for (let i=0 ; i<this.cardArr.length; i++)
                        {
                            if (this.cardArr[i].id == id ){
                            // alert ("in delete" + i +" "+ this.cardArr[i].cname);
                            this.cardArr.splice(i,1);                               //An array (Array) containing the deleted elements.
                            
                            let mynewcards= JSON.parse(localStorage.getItem("mycards"));
                            mynewcards.splice(i,1);
                            localStorage.setItem('mycards',JSON.stringfy(mynewcards));
                            break;
                            }
                        }
            
            }                     
            displayListHtml(){
                  
                    // alert("I am in display");
                    // this.master.innerHTML ="";
                    // this.cardArr.forEach((nCard) => {
                    // let taskElement = nCard.toElement();
                    // this.master.append(taskElement);
                    // });
                    // getting from local storage
                    let mynewcards= JSON.parse(localStorage.getItem("mycards")) || this.cardArr ;
                    alert(mynewcards.length);
                    for (let i=0 ;i<mynewcards.length;i++){
                    const tasks = new Card(id,cname,pic,description,assignee,dDate,st);
                    mynewcards[i].id;
                 
                    mynewcards[i].cname;
                    mynewcards[i].pic;
                    mynewcards[i].description;
                    mynewcards[i].assignee;
                    mynewcards[i].dDate;
                    mynewcards[i].st;
                    console.log(mynewcards[i]);
                    }
                    // mynewcards.forEach((nCard) => {
                    // alert(JSON.stringify(nCard, null, 4));
                    // let taskElement = nCard.toElement(); 
                    // alert("hello");
                    // this.master.append(taskElement);
                    // });
                    localStorage.setItem('mycards',JSON.stringify(mynewcards));
                    }
                    
    }                                             
                
                
        
        let taskcontainer = document.querySelector("#taskcontainer"); 
        const cardDeck=new CardManager(taskcontainer);                 //create an instance of card manager to access the members
         
        //adding tasks
        let tname    = document.querySelector("#text1");                //accepting user input from form
        let tdes     = document.querySelector("#des");   
        let assignee = document.querySelector("#assignee");
        let dDate = document.querySelector("#dDate");
        let sTatus = document.querySelector("#stAtus");
        let addButton=document.querySelector("#addButton");
        // validation
        let nmErrMsg = document.querySelector("#nmErrMsg"); 
        let nmErrMsg1 = document.querySelector("#nmErrMsg1");
        let nmErrMsg2 = document.querySelector("#nmErrMsg2");
        let nmErrMsg3 = document.querySelector("#nmErrMsg3");
        cardDeck.displayListHtml();
        addButton.onclick= function(){
        // alert("here i am card deck");
        let validStatus ;
      
        if ( tname.value == "" || tname.value.length < 5)
           {   
              
              nmErrMsg.innerHTML="*Please ,fill this field with atleast 8 characters";
              nmErrMsg.style.color="red";
              tname.style.borderColor = "red";
                 tname.focus();
              validStatus = false;
              // break;
           } else 
           {
             
              validStatus = true;
              
           }
     
        if (tdes.value == "" || tdes.value.length < 10)                               
           
           { 
              nmErrMsg1.innerHTML="*Please ,fill this field with atleast 15 characters";
              nmErrMsg1.style.color="red";
              tdes.style.borderColor = "red"; 
              tdes.focus(); 
              validStatus= false; 
              //  break;
           } else 
           {
              
              tdes.style.borderColor = "green";
              nmErrMsg1.innerHTML="looks good";
              nmErrMsg1.style.color="green";
              validStatus = true;
           }
         
        if (assignee.value == "" || assignee.value.length < 5)                               
           
             { 
              nmErrMsg2.innerHTML="*Please ,fill this field with atleast 8 characsters";
              nmErrMsg2.style.color="red";
              assignee.style.borderColor = "red"; 
              assignee.focus(); 
              validStatus= false; 
              //  break;
             } 
             else 
             {
                    
                assignee.style.borderColor = "green";
                nmErrMsg2.innerHTML="looks good";
                nmErrMsg2.style.color="green";
                validStatus = true;
             }
             if (validStatus==true)
             {
                nmErrMsg.innerHTML="looks good";
                nmErrMsg.style.color="green";
                tname.style.borderColor = "green";
                //code before the pause
                cardDeck.addcard(tname.value,"test",tdes.value,assignee.value,dDate.value,sTatus.value);
                cardDeck.displayListHtml();
               setTimeout(function(){
                $("#myModal").modal("hide");
                resetFields();
             }, 900);
                
               
             }else 
             {
               alert("Please, fill the mandatory fields");
             }
       
          
       }
        
    function resetFields(){
        
        tname.value    = null;
        tdes.value     = null;
        assignee.value = null;
        dDate.value   = null;
        sTatus.value  = null;
        nmErrMsg.innerHTML="";
        nmErrMsg1.innerHTML="";
        nmErrMsg2.innerHTML="";
        tname.style.borderColor = "lightgrey";
        tdes.style.borderColor = "lightgrey"; 
        assignee.style.borderColor = "lightgrey"; 
        
    }


        function edifunc(){
            // alert("i am in editfun");
            let taskElement = event.target.closest(".Edit");                       
            let edtIdArr = taskElement.id.split("_");                               //spliting the id by underscore. i.e . dbuton_id 
            let retreiveId = edtIdArr[1];
            alert(retreiveId);
            
            for (let i=0; i<cardDeck.cardArr.length ; i++){
                if (retreiveId == cardDeck.cardArr[i].id) {
                document.querySelector("#tId").value    =cardDeck.cardArr[i].id;
                document.querySelector("#ename").value    = cardDeck.cardArr[i].cname ; 
                document.querySelector("#edes").value      = cardDeck.cardArr[i].description;  
                document.querySelector("#eAssignee").value = cardDeck.cardArr[i].assignee;  
                document.querySelector("#edDate").value   = cardDeck.cardArr[i].dDate;  
                document.querySelector("#estAtus").value  = cardDeck.cardArr[i].st;  
                break;
                }    
            }
            $('#ediTModal').modal('show');
        }
        
        let upDateButton = document.querySelector("#upDateButton");
        
        upDateButton.onclick = function() {
         
         let tempId = document.querySelector("#tId").value; 
        
         let tempname = document.querySelector("#ename").value; //accepting user input from form
         let tempdesc = document.querySelector("#edes").value;   
         let tempassign = document.querySelector("#eAssignee").value; 
         let tempdueDate = document.querySelector("#edDate").value;
         let tempstatus = document.querySelector("#estAtus").value;
         
        
         cardDeck.updateTask(tempId, tempname,"test" ,tempdesc, tempassign, tempdueDate, tempstatus);
         cardDeck.displayListHtml();
        
         $('#ediTModal').modal('hide');
      }
    
    
       function delfunc(){
        //  alert("i am in delete function");
        let taskElement = event.target.closest(".delete");                      //see line 74.
        let delIdArr = taskElement.id.split("_");                               //spliting the id by underscore. i.e . dbuton_id 
        let retreiveId = delIdArr[1];
        alert(retreiveId);
        cardDeck.deletFunc(retreiveId);
        cardDeck.displayListHtml();
        }
    
    


    
    
        


       
        

