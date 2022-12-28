import { CalculateBonus } from './CalculateBonus';
import { CalculateGrossSalary } from './CalculateGrossSalary';
import { CalculateMealTicket } from './CalculateMealTicket';
import { CalculateMinSalary } from './CalculateMinSalary';
import { CalculateNetSalary } from './CalculateNetSalary';
import { CalculateTaxRate } from './CalculateTaxRate';
import { GetWorkCoefficient } from './GetWorkCoefficient';
import { IntlFormatter } from './utils/IntlFormatter';

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
  workCoefficient: IntlFormatter.execute({ number: workCoefficient, style: 'percent' }),
  minSalary: IntlFormatter.execute({ number: minSalary, style: 'currency' }),
  grossSalary: IntlFormatter.execute({ number: grossSalary, style: 'currency' }),
  mealTicket: IntlFormatter.execute({ number: mealTicket, style: 'currency' }),
  bonus: IntlFormatter.execute({ number: bonus, style: 'currency' }),
  taxRate: IntlFormatter.execute({ number: taxRate, style: 'percent' }),
  netSalary: IntlFormatter.execute({ number: netSalary, style: 'currency' }),
});

console.log(employee);
