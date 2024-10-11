export interface IAPIRESPONSE {
    message: string;
    result: boolean;
    data: any
}

export interface IParentDept {

    departmentId: number,
    departmentName: string,
    departmentLogo:string

}

export interface IChildDept {

    childDeptId: number,
    parentDeptId: number,
    departmentName:string

}

export interface IProjectEmployee {
    empProjectId: number;
    projectId: number;
    empId: number;
    assignedDate: string;
    role: string;
    isActive: string;
    projectName: string;
    employeeName: string;
}

export interface IProject {
    projectId: number
    projectName: string
    clientName: string
    startDate: string
    leadByEmpId: number
    contactPerson: string
    contactNo: string
    emailId: string
    employeeName: string;
}

export interface IProjectEmployee {
    empProjectId: number;
    projectId: number;
    empId: number;
    assignedDate: string;
    role: string;
    isActive: string;
    projectName: string;
    employeeName: string;
}

export interface IProject {
    projectId: number
    projectName: string
    clientName: string
    startDate: string
    leadByEmpId: number
    contactPerson: string
    contactNo: string
    emailId: string
    employeeName: string;
}
