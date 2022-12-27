interface ICalculateTaxProps {
  employeePosition: string;
  grossSalary: number;
}

export class CalculateTaxRate {
  private operarioMinGrossSalary = 945.0;

  private operarioMinTaxRate = 0.07;

  private operarioMaxTaxRate = 0.13;

  private gerenteMinGrossSalary = 1520.0;

  private gerenteMinTaxRate = 0.1;

  private gerenteMaxTaxRate = 0.15;

  execute({
    employeePosition,
    grossSalary,
  }: ICalculateTaxProps): number | undefined {
    return {
      operario:
        grossSalary >= this.operarioMinGrossSalary
          ? this.operarioMaxTaxRate
          : this.operarioMinTaxRate,
      gerente:
        grossSalary >= this.gerenteMinGrossSalary
          ? this.gerenteMaxTaxRate
          : this.gerenteMinTaxRate,
    }[employeePosition];
  }
}
