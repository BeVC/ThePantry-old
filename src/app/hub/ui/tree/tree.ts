import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
    selector: 'tree',
    templateUrl: './tree.html',
    styleUrls: ['./tree.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TreeView implements OnInit {
    newPadding: number;
    calculatedPadding: string;

    @Input("data") data;
    @Input("padding") padding: number;

    ngOnInit() {
        this.newPadding = this.padding + 1;
        this.calculatedPadding = this.calculatePadding(this.newPadding);
    }

    private calculatePadding(padding): string {
        let calc = padding * 10;
        return calc + "px";
    }
}