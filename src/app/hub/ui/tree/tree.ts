import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'tree',
    templateUrl: './tree.html',
    styleUrls: ['./tree.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TreeView {

    @Input("data") data;
}