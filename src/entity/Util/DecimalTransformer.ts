import Decimal from 'decimal.js';
import { ValueTransformer } from 'typeorm';

export class DecimalTransformer implements ValueTransformer {
  to(decimal?: Decimal): string {
    return decimal ? decimal.toString() : "";
  }


  from(decimal?: string): Decimal | null {
    return decimal ? new Decimal(decimal) : null;
  }
}