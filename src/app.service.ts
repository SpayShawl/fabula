import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Marked } from '@ts-stack/markdown';

@Injectable()
export class AppService {
  getHello(): string {
    const styles = `
      <style>
        body {
          margin: 0;
          min-height: 100vh;
        }
        .markdown-body {
          height: 100%;
          padding: 2em;
        }
      </style>
    `;
    try {
      const data = fs.readFileSync('./src/stories/spayshawl.story.md', 'utf8');
      return (
        styles +
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css" integrity="sha512-1d9gwwC3dNW3O+lGwY8zTQrh08a41Ejci46DdzY1aQbqi/7Qr8Asp4ycWPsoD52tKXKrgu8h/lSpig1aAkvlMw==" crossorigin="anonymous" referrerpolicy="no-referrer" />' +
        '<main class="markdown-body">' +
        Marked.parse(data) +
        '</main>'
      );
    } catch (err) {
      return err;
    }
  }
}
