class XProduct extends HTMLElement{

  connectedCallback(){
    this.textContent='Testando componente';

  }
}

class XWrite extends HTMLElement{
  static get observedAttributes(){return ['name']}
  attributeChangedCallback(attr,oldValue,newValue){
    if(attr=='name'){
      this.textContent=newValue;
    }
  }
}

class XDiv extends HTMLElement{


  constructor(){
    super();

    var shadow= this.attachShadow({mode: 'open'});

    var div=document.createElement('div');
    div.innerHTML=this.getAttribute('content');
    div.style.color='#ffffff';
    div.style.background='#E91E63';
    div.style.fontSize = this.getAttribute('size');
     shadow.appendChild(div);
  }

}

class XBind extends HTMLElement{


  constructor(){
    super();

    var shadow= this.attachShadow({mode: 'open'});
    var div=document.createElement('div');
    var props=this.getAttribute('f-bind');
    var list=this.dynamicBind(props);

    div.appendChild(list);

    //  console.log(list);

     shadow.appendChild(div);
  }

     dynamicBind(props){
    /* eval('for(var '+props+'){console.log(item)}');
      obs eval é uma função que pega o valor de uma variavel e
      compara e executa como se fosse um comando ou objeto do
      javascript*/
        var result="";
        var ul=document.createElement('ul');
        var fora=undefined;
        for(const item of eval(props)){
                    
            result +='<li>'+item+'</li>';

        }
          ul.innerHTML=result;

            console.log(ul);
          return ul;
    }

}





customElements.define('x-product',XProduct);
customElements.define('x-write',XWrite);
customElements.define('x-div',XDiv);
customElements.define('x-bind',XBind);
