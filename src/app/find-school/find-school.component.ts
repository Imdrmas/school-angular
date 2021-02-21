import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { AddSchoolComponent } from '../add-school/add-school.component';
import { School } from '../modal/Modal';
import { SchoolService } from '../service/school.service';
import { ApplicationItemFlatNode, ApplicationItemNode, TreeApplicationService } from '../service/tree-application.service';

@Component({
  selector: 'app-find-school',
  templateUrl: './find-school.component.html',
  styleUrls: ['./find-school.component.css'],
  providers: [TreeApplicationService]
})
export class FindSchoolComponent implements OnInit {
  school: School = {} as School;
  idSchool: number;

  flatNodeMap = new Map<ApplicationItemFlatNode, ApplicationItemNode>();
  nestedNodeMap = new Map<ApplicationItemNode, ApplicationItemFlatNode>();

  treeControl: FlatTreeControl<ApplicationItemFlatNode>;
  treeFlattener: MatTreeFlattener<ApplicationItemNode, ApplicationItemFlatNode>;
  dataSource: MatTreeFlatDataSource<ApplicationItemNode, ApplicationItemFlatNode>;
  expandedNodes: ApplicationItemFlatNode[];

  constructor(private route: ActivatedRoute, private schoolService: SchoolService, private dialog: MatDialog,
    private treeApplicationService: TreeApplicationService) {
    this.route.params.subscribe(
      params => {
        this.idSchool = this.route.snapshot.params.idSchool;

        this.treeFlattener = new MatTreeFlattener(this.transform, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl<ApplicationItemFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.saveExpandedNodes();
        this.restoreExpandedNodes();

        treeApplicationService.applicationData.subscribe(school => {
          this.dataSource.data = school;
        });
        this.treeApplicationService.applicationState.next(this.school);

        this.schoolService.findSchool(this.idSchool).subscribe((school) => {
          this.school = school;
        })
      }
    )
   }

  ngOnInit(): void {

  }
  getLevel = (node: ApplicationItemFlatNode) => node.level;
  isExpandable = (node: ApplicationItemFlatNode) => node.expandable;
  getChildren = (node: ApplicationItemNode): ApplicationItemNode [] => node.children;
  hasChild = (_: number, nodeDate: ApplicationItemFlatNode) => nodeDate.expandable;
  hasNoContent = (_: number, nodeData: ApplicationItemFlatNode) => nodeData.item === '';

    transform = (node: ApplicationItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.name === node.name ? existingNode : new ApplicationItemFlatNode();
    flatNode.name = node.name;
    flatNode.id = node.id;
    flatNode.clazz = node.clazz;
    flatNode.level = level;
    flatNode.title = node.title;
    flatNode.routerLink = node.routerLink;
    flatNode.actions = node.actions;
    flatNode.expandable = (node.children && node.children.length > 0);
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }
  private saveExpandedNodes() {
    if (this.treeControl && this.treeControl.dataNodes) {
      this.expandedNodes = new Array<ApplicationItemFlatNode>();
      this.treeControl.dataNodes.forEach(node => {
      if (node.expandable && this.treeControl.isExpanded(node)) {
          this.expandedNodes.push(node);
        }
      });
    }
  }

  private restoreExpandedNodes() {
    if (this.expandedNodes && this.expandedNodes.length > 0) {
      this.expandedNodes.forEach(node => {
        this.treeControl.expand(this.treeControl.dataNodes.find(n => n.id === node.id));
      });
    }
  }
  deleteSchool() {
   if(confirm('Are you sure')) {
     this.schoolService.deleteSchool(this.idSchool).subscribe(() => {
       window.location.replace('/home');
     })
   }
  }
  editSchool(id: number) {
    this.dialog.open(AddSchoolComponent, {
      data: {id},
      height: '580px',
      width: '400px',
    });
  }

}
