import { AppError } from '@errors/AppError';

interface ICalculateTaxProps {
  employeePosition: string;
  grossSalary: number;
}

export class CalculateTaxRate {
  static execute({
    employeePosition,
    grossSalary,
  }: ICalculateTaxProps): number {
    const OPERARIO_MIN_GROSS_SALARY = 945.0;

    const OPERARIO_MIN_TAX_RATE = 0.07;

    const OPERARIO_MAX_TAX_RATE = 0.13;

    const GERENTE_MIN_GROSS_SALARY = 1520.0;

    const GERENTE_MIN_TAX_RATE = 0.1;

    const GERENTE_MAX_TAX_RATE = 0.15;

    const taxRate = {
      operario:
        grossSalary >= OPERARIO_MIN_GROSS_SALARY
          ? OPERARIO_MAX_TAX_RATE
          : OPERARIO_MIN_TAX_RATE,
      gerente:
        grossSalary >= GERENTE_MIN_GROSS_SALARY
          ? GERENTE_MAX_TAX_RATE
          : GERENTE_MIN_TAX_RATE,
    }[employeePosition];

    if (!taxRate) throw new AppError('Invalid employee position!');

    return taxRate;
  }
}
