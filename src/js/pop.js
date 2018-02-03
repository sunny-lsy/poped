class pop{
    constructor(){
        this.name='zs';
        this.title='this is title';
        this.content = '美好的一天';
        this.tit = '确定';
        this.init();
    }
    init(){
        this.createWrap();
        console.log(666);
    }
    addEvent(){
        let span=document.querySelector('.span');
        let sure = document.querySelector('.sure');
        let _this = this;
            span.addEventListener('click',function(){
              _this.hide();
            });
            sure.addEventListener('click',function(){
                _this.hide();
            })
    }
    createButton(txt,cls){
        let but = document.createElement('button');
        but.innerHTML=txt;
        but.className=cls;
        return but;
    }
    createTitle(){
        let ol = document.createElement("ol");
        let span = document.createElement('span');
        span.className = 'span';
        span.innerHTML='x';
        ol.className='pop-title';
        ol.innerHTML = this.title;
        ol.append(span);
        return ol;

    }
    hide(){
        let oDiv = document.querySelector('.pop');
          oDiv.style.display='none';
    }
 createContent(){
        let ul = document.createElement("ul");
        ul.className='pop-content';
        ul.innerHTML = this.content;
        return ul;

    }
    createWrap(){
        let oDiv =document.createElement("div");
        let oTit =  this.createTitle();
        let oCon = this.createContent();
        let oBut = this.createButton(this.tit,'sure');
        oDiv.className='pop';
        document.body.append(oDiv);
        this.createTitle();
        oDiv.append(oTit);
         oDiv.append(oCon);
         oDiv.append(oBut);
         this.addEvent();
    }
}
export default pop;