//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { EmployeesEntity } from './db/Employees.entity';
import { EvaluationsEntity } from './db/Evaluations.entity';
import { PayrollEntity } from './db/Payroll.entity';
import { LeaveRequestsEntity } from './db/LeaveRequests.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      EmployeesEntity,
      EvaluationsEntity,
      PayrollEntity,
      LeaveRequestsEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          userId: 1,
          name: 'name 1',
          email: 'email 1',
          password: 'password 1',
          role: 'role 1',
          id: 99,
        },
        {
          userId: 2,
          name: 'name 2',
          email: 'email 2',
          password: 'password 2',
          role: 'role 2',
          id: 17,
        },
        {
          userId: 3,
          name: 'name 3',
          email: 'email 3',
          password: 'password 3',
          role: 'role 3',
          id: 16,
        },
        {
          userId: 4,
          name: 'name 4',
          email: 'email 4',
          password: 'password 4',
          role: 'role 4',
          id: 95,
        },
        {
          userId: 5,
          name: 'name 5',
          email: 'email 5',
          password: 'password 5',
          role: 'role 5',
          id: 70,
        },
      ],
      Employees: [
        {
          employeeId: 1,
          firstName: 'firstName 1',
          lastName: 'lastName 1',
          middleName: 'middleName 1',
          dateOfBirth: '2024-04-15T04:33:13.869Z',
          gender: 'gender 1',
          nationality: 'nationality 1',
          maritalStatus: 'maritalStatus 1',
          contactInformation: 'contactInformation 1',
          address: 'address 1',
          department: 'department 1',
          position: 'position 1',
          manager: 'manager 1',
          employmentType: 'employmentType 1',
          startDate: '2024-09-16T23:10:05.480Z',
          endDate: '2025-03-09T23:48:40.456Z',
          salaryInformation: 0.96,
          profilePicture: 'profilePicture 1',
          id: 28,
        },
        {
          employeeId: 2,
          firstName: 'firstName 2',
          lastName: 'lastName 2',
          middleName: 'middleName 2',
          dateOfBirth: '2024-02-17T19:28:49.095Z',
          gender: 'gender 2',
          nationality: 'nationality 2',
          maritalStatus: 'maritalStatus 2',
          contactInformation: 'contactInformation 2',
          address: 'address 2',
          department: 'department 2',
          position: 'position 2',
          manager: 'manager 2',
          employmentType: 'employmentType 2',
          startDate: '2023-09-03T08:04:46.150Z',
          endDate: '2024-07-21T12:13:17.561Z',
          salaryInformation: 0.77,
          profilePicture: 'profilePicture 2',
          id: 30,
        },
        {
          employeeId: 3,
          firstName: 'firstName 3',
          lastName: 'lastName 3',
          middleName: 'middleName 3',
          dateOfBirth: '2024-07-26T07:21:32.103Z',
          gender: 'gender 3',
          nationality: 'nationality 3',
          maritalStatus: 'maritalStatus 3',
          contactInformation: 'contactInformation 3',
          address: 'address 3',
          department: 'department 3',
          position: 'position 3',
          manager: 'manager 3',
          employmentType: 'employmentType 3',
          startDate: '2024-05-04T06:56:24.502Z',
          endDate: '2024-07-19T06:12:11.491Z',
          salaryInformation: 0.85,
          profilePicture: 'profilePicture 3',
          id: 36,
        },
        {
          employeeId: 4,
          firstName: 'firstName 4',
          lastName: 'lastName 4',
          middleName: 'middleName 4',
          dateOfBirth: '2024-12-04T15:53:31.065Z',
          gender: 'gender 4',
          nationality: 'nationality 4',
          maritalStatus: 'maritalStatus 4',
          contactInformation: 'contactInformation 4',
          address: 'address 4',
          department: 'department 4',
          position: 'position 4',
          manager: 'manager 4',
          employmentType: 'employmentType 4',
          startDate: '2024-02-15T02:18:51.879Z',
          endDate: '2024-11-04T16:26:16.391Z',
          salaryInformation: 0.69,
          profilePicture: 'profilePicture 4',
          id: 30,
        },
        {
          employeeId: 5,
          firstName: 'firstName 5',
          lastName: 'lastName 5',
          middleName: 'middleName 5',
          dateOfBirth: '2025-03-01T07:37:25.049Z',
          gender: 'gender 5',
          nationality: 'nationality 5',
          maritalStatus: 'maritalStatus 5',
          contactInformation: 'contactInformation 5',
          address: 'address 5',
          department: 'department 5',
          position: 'position 5',
          manager: 'manager 5',
          employmentType: 'employmentType 5',
          startDate: '2023-07-09T04:47:26.516Z',
          endDate: '2023-08-02T00:11:31.741Z',
          salaryInformation: 0.58,
          profilePicture: 'profilePicture 5',
          id: 65,
        },
      ],
      Evaluations: [
        {
          reviewId: 1,
          employeeId: 1,
          periodStart: '2025-03-31T07:31:04.348Z',
          periodEnd: '2025-01-12T06:58:39.025Z',
          goalsObjectives: 'goalsObjectives 1',
          achievements: 'achievements 1',
          improvementAreas: 'improvementAreas 1',
          feedbackFromSupervisor: 'feedbackFromSupervisor 1',
          overallRating: 1,
          recommendations: 'recommendations 1',
          id: 93,
        },
        {
          reviewId: 2,
          employeeId: 2,
          periodStart: '2023-07-28T21:45:38.094Z',
          periodEnd: '2023-08-18T07:05:48.342Z',
          goalsObjectives: 'goalsObjectives 2',
          achievements: 'achievements 2',
          improvementAreas: 'improvementAreas 2',
          feedbackFromSupervisor: 'feedbackFromSupervisor 2',
          overallRating: 2,
          recommendations: 'recommendations 2',
          id: 43,
        },
        {
          reviewId: 3,
          employeeId: 3,
          periodStart: '2024-09-23T11:54:21.522Z',
          periodEnd: '2023-09-16T17:27:21.514Z',
          goalsObjectives: 'goalsObjectives 3',
          achievements: 'achievements 3',
          improvementAreas: 'improvementAreas 3',
          feedbackFromSupervisor: 'feedbackFromSupervisor 3',
          overallRating: 3,
          recommendations: 'recommendations 3',
          id: 41,
        },
        {
          reviewId: 4,
          employeeId: 4,
          periodStart: '2023-09-08T22:27:09.825Z',
          periodEnd: '2024-08-14T16:50:39.646Z',
          goalsObjectives: 'goalsObjectives 4',
          achievements: 'achievements 4',
          improvementAreas: 'improvementAreas 4',
          feedbackFromSupervisor: 'feedbackFromSupervisor 4',
          overallRating: 4,
          recommendations: 'recommendations 4',
          id: 96,
        },
        {
          reviewId: 5,
          employeeId: 5,
          periodStart: '2023-10-08T08:20:40.864Z',
          periodEnd: '2024-08-13T21:44:33.035Z',
          goalsObjectives: 'goalsObjectives 5',
          achievements: 'achievements 5',
          improvementAreas: 'improvementAreas 5',
          feedbackFromSupervisor: 'feedbackFromSupervisor 5',
          overallRating: 5,
          recommendations: 'recommendations 5',
          id: 76,
        },
      ],
      Payroll: [
        {
          payrollId: 1,
          employeeId: 1,
          periodStartDate: '2023-08-12T10:26:03.995Z',
          periodEndDate: '2024-11-09T04:40:22.079Z',
          grossSalary: 0.32,
          deductions: 0.82,
          netSalary: 0.13,
          payDate: '2024-09-03T15:03:21.144Z',
          overtimeHours: 1,
          overtimePay: 0.89,
          id: 68,
        },
        {
          payrollId: 2,
          employeeId: 2,
          periodStartDate: '2023-07-19T23:43:25.892Z',
          periodEndDate: '2025-03-10T13:41:26.959Z',
          grossSalary: 0.93,
          deductions: 0.74,
          netSalary: 0.45,
          payDate: '2024-05-22T23:54:22.685Z',
          overtimeHours: 2,
          overtimePay: 0.56,
          id: 53,
        },
        {
          payrollId: 3,
          employeeId: 3,
          periodStartDate: '2025-03-22T23:18:34.630Z',
          periodEndDate: '2024-07-22T23:31:08.769Z',
          grossSalary: 0,
          deductions: 0.83,
          netSalary: 0.3,
          payDate: '2024-04-08T01:10:23.728Z',
          overtimeHours: 3,
          overtimePay: 0.79,
          id: 81,
        },
        {
          payrollId: 4,
          employeeId: 4,
          periodStartDate: '2023-06-20T07:17:00.343Z',
          periodEndDate: '2024-10-27T14:10:34.413Z',
          grossSalary: 0.26,
          deductions: 0.23,
          netSalary: 0.62,
          payDate: '2024-05-10T15:40:39.767Z',
          overtimeHours: 4,
          overtimePay: 0.41,
          id: 84,
        },
        {
          payrollId: 5,
          employeeId: 5,
          periodStartDate: '2024-06-05T18:35:31.005Z',
          periodEndDate: '2023-10-29T02:17:10.375Z',
          grossSalary: 0.4,
          deductions: 0.18,
          netSalary: 0.97,
          payDate: '2023-07-28T14:22:56.401Z',
          overtimeHours: 5,
          overtimePay: 0.01,
          id: 92,
        },
      ],
      LeaveRequests: [
        {
          requestId: 1,
          employeeId: 1,
          typeOfLeave: 'typeOfLeave 1',
          startDate: '2023-05-27T02:38:48.798Z',
          endDate: '2023-10-14T15:38:31.645Z',
          reason: 'reason 1',
          approvalStatus: 'approvalStatus 1',
          approverUserId: 1,
          id: 30,
        },
        {
          requestId: 2,
          employeeId: 2,
          typeOfLeave: 'typeOfLeave 2',
          startDate: '2025-01-01T15:55:58.098Z',
          endDate: '2024-03-24T09:11:54.487Z',
          reason: 'reason 2',
          approvalStatus: 'approvalStatus 2',
          approverUserId: 2,
          id: 29,
        },
        {
          requestId: 3,
          employeeId: 3,
          typeOfLeave: 'typeOfLeave 3',
          startDate: '2023-09-03T05:23:11.197Z',
          endDate: '2024-08-21T04:41:21.767Z',
          reason: 'reason 3',
          approvalStatus: 'approvalStatus 3',
          approverUserId: 3,
          id: 75,
        },
        {
          requestId: 4,
          employeeId: 4,
          typeOfLeave: 'typeOfLeave 4',
          startDate: '2023-10-04T10:21:52.737Z',
          endDate: '2024-10-13T09:21:05.438Z',
          reason: 'reason 4',
          approvalStatus: 'approvalStatus 4',
          approverUserId: 4,
          id: 91,
        },
        {
          requestId: 5,
          employeeId: 5,
          typeOfLeave: 'typeOfLeave 5',
          startDate: '2023-09-23T09:51:08.117Z',
          endDate: '2023-10-13T18:44:02.695Z',
          reason: 'reason 5',
          approvalStatus: 'approvalStatus 5',
          approverUserId: 5,
          id: 92,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('EmployeesEntity', data.Employees);
      await this.SeedResource('EvaluationsEntity', data.Evaluations);
      await this.SeedResource('PayrollEntity', data.Payroll);
      await this.SeedResource('LeaveRequestsEntity', data.LeaveRequests);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
