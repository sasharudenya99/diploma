import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GroupService } from '../service/group.service';
import { Group } from '../model/group';

export class GroupServiceData implements OnInit, OnDestroy {
    private subscription: Subscription[] = [];
    editGroup: Group = new Group();
    public allGroup: Group[] = [];
    public groupById: Group;
    public isLoad = false;

    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this._loadGroups();
    }

    public _loadGroups() {
        this.subscription.push(this.groupService.getGroups().subscribe(groups => {
            this.allGroup = groups;
            this.isLoad = true;
        }));
    }

    public _addGroup(group) {
        this.subscription.push(this.groupService.addGroup(group).subscribe(() => {
            this._loadGroups();
            this._refreshGroup();
        }));
    }


    public _groupById(groupId) {
        this.subscription.push(this.groupService.getGroupById(groupId).subscribe(group => {
            this.groupById = group;
            this.isLoad = true;
        }));
    }

    public _deleteGroup(groupId) {
        this.subscription.push(this.groupService.deleteGroup(groupId).subscribe(() => {
            this._updateGroup();
            this._refreshGroup();
        }));
    }

    _updateGroup(): void {
        this._loadGroups();
    }

    _refreshGroup(): void {
        this.editGroup = new Group();
    }

    ngOnDestroy(): void {
        this.subscription.forEach(subscription =>
            subscription.unsubscribe());
    }

}
