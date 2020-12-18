import { ICommand } from '@victorbotjs/core'
import { Message } from 'discord.js';

class HelloWorldCommand implements ICommand {
  commandText: string = "hello";

  exec(message: Message): void {
    message.reply("Hello world!")
  }
}

export default HelloWorldCommand