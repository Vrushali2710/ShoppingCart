import { Component } from '@angular/core';
import products from './products.json';
interface PRODUCTS{
  p_id:Number;
  p_name:String;
  p_image?:String;
  p_cost:Number;
  p_availability:Number;
  p_details:String;
  p_category:String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';
  
  
  Products:PRODUCTS[]=products;
  public filterCategory:any;
 
  

  constructor(){
    this.filterCategory=this.Products;
    this.Products.forEach((a:any) => {
      Object.assign(a,{quantity:1});
      
    });
    console.log(this.Products)
  }
  filter(category:string){
    this.filterCategory =this.Products
    .filter((a:any)=>{
      if(a.p_category == category  || category == ""){
        return a;
      }
    })
  }
  quantity:number=1;
  i=1
  
  Increment(): void{
    
    this.i++;
    this.quantity =this.i;
    alert(JSON.stringify(products));
  }
  

  Decrement(): void{
    this.i--;
    this.quantity =this.i;
    
    alert(JSON.stringify(products));

  }

}
