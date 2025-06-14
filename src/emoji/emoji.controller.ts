/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { EmojiService } from './emoji.service';

@Controller('emoji')
export class EmojiController {
  constructor(private readonly emojiService: EmojiService) {}

  @Post('encrypt')
  encrypt(@Body('text') text: string) {
    const encrypted = this.emojiService.encryptText(text);
    return { encrypted };
  }

  @Post('decrypt')
  decrypt(@Body('emoji') emoji: string) {
    const decrypted = this.emojiService.decryptEmoji(emoji);
    return { decrypted };
  }
}
