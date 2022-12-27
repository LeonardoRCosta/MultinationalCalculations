import { CalculateBonus } from './CalculateBonus';
import { CalculateGrossSalary } from './CalculateGrossSalary';
import { CalculateMealTicket } from './CalculateMealTicket';
import { CalculateMinSalary } from './CalculateMinSalary';
import { CalculateNetSalary } from './CalculateNetSalary';
import { CalculateTaxRate } from './CalculateTaxRate';
import { GetWorkCoefficient } from './GetWorkCoefficient';

let employee = {
  employeePosition: 'operario',
  workShift: 'matutino',
  workedHours: 70,
};

const { workedHours, employeePosition, workShift } = employee;

const workCoefficient = GetWorkCoefficient.execute(workShift);

const minSalary = CalculateMinSalary.execute(employeePosition);

const grossSalary = CalculateGrossSalary.execute({
  workedHours,
  workCoefficient,
  minSalary,
});

const taxRate = CalculateTaxRate.execute({
  employeePosition,
  grossSalary,
});

const mealTicket = CalculateMealTicket.execute({
  employeePosition,
  workCoefficient,
  grossSalary,
});

const bonus = CalculateBonus.execute({
  workShift,
  workedHours,
});

const netSalary = CalculateNetSalary.execute({
  bonus,
  grossSalary,
  mealTicket,
  taxRate,
});

Object.assign(employee, {
  minSalary,
  grossSalary,
  mealTicket,
  bonus,
  taxRate,
  netSalary,
});

console.log(employee);
