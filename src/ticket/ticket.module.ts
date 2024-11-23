import { Logger, Module } from '@nestjs/common'
import { TicketController } from './adapters/api/ticker.controller'
import { TicketInMemory } from './adapters/db/memory'
import { TicketApiService } from './adapters/api/ticket.api.service'
import { TicketService } from './domain/ports/ticket.service'
import { TicketRepository } from './domain/ports/ticket.repository'

@Module({
  imports: [],
  controllers: [TicketController],

  providers: [
    TicketService,
    TicketApiService,
    {
      provide: TicketRepository,
      useClass: TicketInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class TicketModule {}
