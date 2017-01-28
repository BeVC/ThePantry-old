import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {

  treeDataOne = [
    {
      id: "a1",
      name: "Italy",
      parent: "",
      children: [
        {
          id: "a1-1",
          name: "Toscane",
          parent: "a1",
          children: [
            {
              id: "a1-1-1",
              name: "Firenze",
              parent: "a1-1",
              children: [
                {
                  id: "a1-1-1-1",
                  name: "Duomo",
                  parent: "a1-1-1",
                  children: [

                  ]
                }
              ]
            }, {
              id: "a1-1-2",
              name: "Siena",
              parent: "a1-1",
              children: [

              ]
            }
          ]
        },
        {
          id: "a1-2",
          name: "Lazio",
          parent: "a1",
          children: [

          ]
        }
      ]
    },
    {
      id: "b1",
      name: "Germany",
      parent: "",
      children: [
        {
          id: "b1-1",
          name: "Brandenburg",
          parent: "b1",
          children: [

          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
