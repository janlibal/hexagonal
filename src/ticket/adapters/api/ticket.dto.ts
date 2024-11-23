import { IsNotEmpty } from 'class-validator';

export class TicketDto {
  @IsNotEmpty()
  description: string;
  priority: Number = 1;
}