import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Objective} from "./objective";

@Component({
    selector: 'objective',
    directives: [ROUTER_DIRECTIVES],
    template: `
<div class="panel panel-default" *ngIf="objectives">
    <div class="panel-heading">Objectives</div>
    <div id="objectives" class="list-group">
        <div class="list-group-item" *ngFor="let objective of objectives"
             [ngClass]="{'list-group-item-success': objective.isCorrect(), 'list-group-item-danger': !objective.isCorrect()}">
            {{objective.id}} - <span [innerHTML]="objective.description"></span><br />
             <span class="small">[{{objective.expected}} vs. {{objective.actual}}]</span>
        </div>
    </div>
</div>
    `
})

export class ObjectivesComponent {
    @Input() objectives: Objective[];
}
