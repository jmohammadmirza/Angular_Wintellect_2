import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles:[require("./app.component.scss")]
})
export class AppComponent {

    public header: string = "ANGULAR 2!";
    public colors:string[]=[
   "red","green","blue","black",
    ];
    public newColor:string="";

    public addColor(){
        this.colors.push(this.newColor);
        this.newColor="";
    }

}
