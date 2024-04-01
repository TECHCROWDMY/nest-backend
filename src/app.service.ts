import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      // status: 'success',
      // message: 'Hello World!',
      // data: null,
      assistant: {
        firstMessage: 'Hey Ryan, how are you?',
        model: {
          provider: 'openai',
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: "You're Ryan's assistant...",
            },
          ],
        },
      },
    };
  }
}
