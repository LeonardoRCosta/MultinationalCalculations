import { CalculateBonus } from '@use-cases/calculateBonus/CalculateBonus';
import { CalculateGrossSalary } from '@use-cases/calculateGrossSalary/CalculateGrossSalary';
import { CalculateMealTicket } from '@use-cases/calculateMealTicket/CalculateMealTicket';
import { CalculateMinSalary } from '@use-cases/calculateMinSalary/CalculateMinSalary';
import { CalculateNetSalary } from '@use-cases/calculateNetSalary/CalculateNetSalary';
import { CalculateTaxRate } from '@use-cases/calculateTaxRate/CalculateTaxRate';
import { GetWorkCoefficient } from '@use-cases/getWorkCoefficient/GetWorkCoefficient';
import { IntlFormatter } from '@utils/IntlFormatter';

const employeePosition = 'operario';
const workShifts = ['matutino', 'noturno'];
const workedHours = 70;

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

const employee: Record<string, unknown> = {};

Object.assign(employee, {
  workCoefficient,
  minSalary,
  grossSalary,
  taxRate,
  mealTicket,
  bonus,
  netSalary,
});

Object.keys(employee).forEach((key) => {
  const isPercentage: boolean = key === 'workCoefficient' || key === 'taxRate';
  employee[key] = IntlFormatter.execute({
    number: employee[key] as number,
    style: isPercentage ? 'percent' : 'currency',
  });
});

Object.assign(employee, {
  employeePosition,
  workShifts,
  workedHours,
});
console.log(employee);
