/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmojiService {
  private charToEmoji: Record<string, string> = {
  a: '😀', b: '😁', c: '😂', d: '🤣', e: '😃',
  f: '😄', g: '😅', h: '😆', i: '😉', j: '😊',
  k: '😋', l: '😎', m: '😍', n: '😘', o: '😗',
  p: '😙', q: '😚', r: '☺️', s: '🙂', t: '🤗',
  u: '🤩', v: '🤔', w: '🤨', x: '😐', y: '😑',
  z: '😶', ' ': '🛑', '.': '🔸', ',': '🔹',
  '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣',
  '4': '4️⃣', '5': '5️⃣', '6': '6️⃣', '7': '7️⃣',
  '8': '8️⃣', '9': '9️⃣',
};


  private emojiToChar = Object.fromEntries(
    Object.entries(this.charToEmoji).map(([char, emoji]) => [emoji, char])
  );

  encryptText(text: string): string {
    return text
      .toLowerCase()
      .split('')
      .map((char) => this.charToEmoji[char] || char)
      .join('');
  }

  decryptEmoji(emojiStr: string): string {
    const emojis = [...emojiStr]; // spread for handling unicode properly
    return emojis.map((emoji) => this.emojiToChar[emoji] || emoji).join('');
  }
}
