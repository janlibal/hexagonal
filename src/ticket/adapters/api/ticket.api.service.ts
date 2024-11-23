import { Injectable } from '@nestjs/common'
import { TicketDto } from './ticket.dto'
import { TicketService } from 'src/ticket/domain/ports/ticket.service'
import { Ticket } from 'src/ticket/domain/model/ticket.model'

@Injectable()
export class TicketApiService {
  constructor(private ticketService: TicketService) {}

  create(tickerCommand: TicketDto): Ticket {
    return this.ticketService.create(
      tickerCommand.description,
      tickerCommand.priority,
    )
  }

  findAll(): Ticket[] {
    return this.ticketService.findAll()
  }
}
