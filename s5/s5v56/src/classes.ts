console.log("your code goes here ...");

abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    //
  }

  static createEmployee(name: string) {
    return { name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, name: string, admins: string[]) {
    super(id, name);
    this.admins = admins;
  }

  describe() {
    console.log(`${this.name} Department. Id ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string = "";
  private static instance: AccountingDepartment;

  private constructor(id: string, name: string, public reports: string[]) {
    super(id, name);
  }

  static getInstance(id: string, name: string, reports: [string]) {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment(id, name, reports);
    return this.instance;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    else throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) throw new Error("No report set");
    this.addReport(value);
    this.lastReport = value;
  }
  describe() {
    console.log(`${this.name} Department. Id ${this.id}`);
  }
}

/* // works only if Department is not abstract 
const accounting = new Department("id1", "Accounting");
accounting.addEmployee("cj");
accounting.addEmployee("jj");
accounting.describe();
*/
/* // valid before employees was added
const accountingCopy = { describe: accounting.describe, name: "copy" };
accountingCopy.describe();
*/

const itDepartment = new ITDepartment("id2", "It", ["carlton"]);
itDepartment.addEmployee("it cj");
itDepartment.addEmployee("it jj");
console.log(itDepartment);

const accountingDepartment = AccountingDepartment.getInstance("id2", "It", [
  "report"
]);
accountingDepartment.addEmployee("acc cj");
accountingDepartment.addEmployee("acc jj");
console.log(accountingDepartment);
accountingDepartment.addReport("report 2");
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.mostRecentReport = "report 3";
console.log(accountingDepartment.mostRecentReport);
const ad = AccountingDepartment.getInstance("id2+", "It+", ["r"]);
console.log(accountingDepartment, ad);

const e1 = Department.createEmployee("cj");
console.log(e1);
