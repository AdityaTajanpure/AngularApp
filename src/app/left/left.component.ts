import { Component } from "@angular/core";

@Component({
    selector: 'app-left',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.css']
})
export class LeftComponent {

    title = "Left Part!";
    h3Align = "right";

    show() {

        alert("Button gets clicked!")
    }

    changeAlign(align) {

        this.h3Align = align;
    }
}