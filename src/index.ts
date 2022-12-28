import { CalculateBonus } from '@use-cases/calculateBonus/CalculateBonus';
import { CalculateGrossSalary } from '@use-cases/calculateGrossSalary/CalculateGrossSalary';
import { CalculateMealTicket } from '@use-cases/calculateMealTicket/CalculateMealTicket';
import { CalculateMinSalary } from '@use-cases/calculateMinSalary/CalculateMinSalary';
import { CalculateNetSalary } from '@use-cases/calculateNetSalary/CalculateNetSalary';
import { CalculateTaxRate } from '@use-cases/calculateTaxRate/CalculateTaxRate';
import { GetWorkCoefficient } from '@use-cases/getWorkCoefficient/GetWorkCoefficient';
import { IntlFormatter } from '@utils/IntlFormatter';

let employee = {
  employeePosition: 'operario',
  workShifts: ['matutino', 'noturno'],
  workedHours: 70,
};

const { workedHours, employeePosition, workShifts } = employee;

const workCoefficient = GetWorkCoefficient.execute(workShifts);

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
  workShifts,
  workedHours,
});

const netSalary = CalculateNetSalary.execute({
  bonus,
  grossSalary,
  mealTicket,
  taxRate,
});

Object.assign(employee, {
  workCoefficient: IntlFormatter.execute({
    number: workCoefficient,
    style: 'percent',
  }),
  minSalary: IntlFormatter.execute({ number: minSalary, style: 'currency' }),
  grossSalary: IntlFormatter.execute({
    number: grossSalary,
    style: 'currency',
  }),
  mealTicket: IntlFormatter.execute({ number: mealTicket, style: 'currency' }),
  bonus: IntlFormatter.execute({ number: bonus, style: 'currency' }),
  taxRate: IntlFormatter.execute({ number: taxRate, style: 'percent' }),
  netSalary: IntlFormatter.execute({ number: netSalary, style: 'currency' }),
});

console.log(employee);
