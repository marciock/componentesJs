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
    var classStyle=this.getAttribute('class');

    var list=this.dynamicBind(props);

      list.className=classStyle;
  //  div.appendChild(list);

    //  console.log(list);

     shadow.appendChild(list);
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

class SelectOptions extends HTMLElement{
  constructor(){
    super();
    var shadow= this.attachShadow({mode: 'open'});

    //create select element



    var drop=document.createElement('select');
    // get Attributes
    var myData=eval(this.getAttribute('opt'));
   var attrClass=this.getAttribute('class');

  //    drop.classList.add(attrClass);

    //appendChild
      //mydiv.appendChild(drop);

    // generating data-bind
      this.inBind(myData,drop);


      shadow.innerHTML=`
        <style>
          @import url("bootstrap/css/bootstrap.min.css");
        </style>
      `;
     shadow.appendChild(drop);

  }
  inBind(data,dom){

      for(var item in data){
        var opt=new Option(data[item],item);

          console.log(data);
           dom.options.add(opt);
      }
  }
}


class MaterialMedia extends HTMLElement { //use materialize css, cards, and video classes css from
  constructor() {
    super();

  }
}
class MaterialThumbs extends HTMLElement {
  constructor() {
    super();
    var shadow= this.attachShadow({mode: 'open'});
    // create elements of DOM
      var card=document.createElement('div');
      var cardImage=document.createElement('div');
      var myImage=document.createElement('img');
      var cardContent=document.createElement('div');
      var cardTitle=document.createElement('span');
    //create attributes customs
      var attrImg=this.getAttribute('src');
      var attrTitle=this.getAttribute('title');
    //Add a classes of css from framework
      card.classList.add('card');
      cardImage.classList.add('card-image','waves-effect','waves-block','waves-light');
      myImage.classList.add('activator');
      cardContent.classList.add('card-content');
      cardTitle.classList.add('card-title', 'activator', 'grey-text', 'text-darken-4');


    //insert attributes into elements
      myImage.src=attrImg;
      cardTitle.innerHTML=attrTitle;
    //appending elements
      card.appendChild(cardImage);
      card.appendChild(cardContent);
      cardImage.appendChild(myImage);
      cardContent.appendChild(cardTitle);


      shadow.innerHTML=`
        <style>
          @import url("materialize/css/materialize.min.css");
        </style>
      `;
      shadow.appendChild(card);
  }
}



customElements.define('x-product',XProduct);
customElements.define('x-write',XWrite);
customElements.define('x-div',XDiv);
customElements.define('x-bind',XBind);
customElements.define('select-options',SelectOptions);
customElements.define('material-thumbs',MaterialThumbs);
