import { Body, Controller, Get, Logger, Post } from '@nestjs/common'
import { TicketDto } from './ticket.dto'
import { TicketService } from 'src/ticket/domain/ports/ticket.service'

@Controller({
  path: 'tickets',
  version: ['1'],
})
export class TicketController {
  private readonly logger = new Logger(TicketController.name)

  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): any[] {
    return this.ticketService.findAll()
  }

  @Post()
  create(@Body() ticketDto: TicketDto): any {
    const ticket = this.ticketService.create(
      ticketDto.description,
      ticketDto.priority,
    )
    this.logger.debug(ticketDto)
    this.logger.debug({ ticket })
    return { ...ticket }
  }
}
