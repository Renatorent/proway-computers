"use strict";(self.webpackChunkproway_projeto=self.webpackChunkproway_projeto||[]).push([[582],{7582:(b,g,e)=>{e.r(g),e.d(g,{CarrinhoModule:()=>a});var p=e(6895),u=e(9541),t=e(1571),m=e(5087),l=e(433);function _(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade : "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(c){const d=t.CHM(n).$implicit;return t.KtG(d.quantidade=c)})("change",function(){t.CHM(n);const c=t.oxw(2);return t.KtG(c.calcularTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const C=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.removerProdutoCarrinho(C.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&r){const n=o.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.hij("Pre\xe7o : ",t.xi3(6,4,n.preco,"BRL"),""),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function f(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,_,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.comprar())}),t._uU(7,"Comprar"),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("Total : ",t.xi3(5,2,n.total,"BRL")," ")}}function x(r,o){1&r&&t._uU(0,"N\xe3o costa nenhum produto")}class s{constructor(o,n){this.carrinhoService=o,this.router=n,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((o,n)=>o+n.preco*n.quantidade,0)}removerProdutoCarrinho(o){this.itensCarrinho=this.itensCarrinho.filter(n=>n.id!==o),this.carrinhoService.removerProdutoCarrinho(o),this.calcularTotal()}comprar(){alert("P\xe1rabens pela compra, e muito obrigado"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}s.\u0275fac=function(o){return new(o||s)(t.Y36(m.e),t.Y36(u.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],["type","button",1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(o,n){if(1&o&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,f,8,5,"div",1),t.YNc(3,x,1,0,"ng-template",null,2,t.W1O)),2&o){const h=t.MAs(4);t.xp6(2),t.Q6J("ngIf",n.itensCarrinho.length>0)("ngIfElse",h)}},dependencies:[p.sg,p.O5,l.Fj,l.wV,l.JJ,l.On,p.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]});const v=[{path:"",component:s}];class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(v),u.Bz]});class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,i,l.u5]})}}]);